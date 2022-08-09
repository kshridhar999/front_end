import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Liked from "./liked";
import Swal, { SweetAlertGrow } from "sweetalert2";

const Home = () => {
  let isSigned = window.localStorage.getItem("isSigned")?JSON.parse(window.localStorage.getItem("isSigned")):false;
  let userInfo = window.localStorage.getItem("userInfo")?JSON.parse(window.localStorage.getItem("userInfo")):[];
  const [user, setUser] = useState([]);
  const [vidName, setVidName] = useState("");
  const [vidList, setVidList] = useState([]);
  let navigate = useNavigate();

  // const Signin = ()=> {
  //   navigate("/signin");
  // }

  // const Signup = () => {
  //   navigate("/signup");
  // }
  let searched=[]
  const getVids = async () => {
    if(localStorage.getItem("allVideos")){
      console.log("taken from local storage")
      setVidList(JSON.parse(window.localStorage.getItem("allVideos")))
    }else{
      console.log("taken from api")
    let allVideos = await axios.get("https://sshtube-app.herokuapp.com/videos");
    allVideos=allVideos.data
    setVidList(allVideos);
    window.localStorage.setItem("allVideos",JSON.stringify(allVideos));
    }
  }
  useEffect(()=>{
    getVids();
  },[]);

  const getVid = (x) =>{
    if(x){
      navigate("/results/"+x);
    }else{
      let timerInterval
      Swal.fire({
        title: 'Please search with a name ;)',
        timer: 1000,
        didOpen: () => {
          Swal.showLoading()
          const b = Swal.getHtmlContainer().querySelector('b')
          timerInterval = setInterval(() => {
            b.textContent = Swal.getTimerLeft()
          }, 100)
        },
        willClose: () => {
          clearInterval(timerInterval)
        }
      })
    }
  }
  
  return (
    <div>
      <div className="navBar">
          <div className="center">
          {isSigned?
          (<><Link to="/user"><img src={userInfo.profile_picture} width="50" height="50" alt="img" className="leftOptions profile"></img></Link>
          <div class="circle" onClick={()=>{window.open("http://127.0.0.1:5000/upload", '_blank');}}></div></>
          ):(<><Link to="/signin"><img src="https://us.123rf.com/450wm/koblizeek/koblizeek2001/koblizeek200100050/138262629-man-icon-profile-member-user-perconal-symbol-vector-on-white-isolated-background-.jpg?ver=6" width="50" height="50"alt="img" className="leftOptions"></img></Link>
          <Link to="/signin" className="leftOptions">Uploads</Link></>)
          }
          </div>

          <div className="spaced">
          <input type="text" value={vidName} onChange={(e) => {setVidName(e.target.value)}} className="searchInp"></input>
          <button className="searchButton" onClick={(e)=>getVid(vidName)}><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg></button>
          </div>

          <div className="center">
            {isSigned?
            (<><Link to={"/watch_history"} className="rightOptions"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-clock-history" viewBox="0 0 16 16">
            <path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z"/>
            <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z"/>
            <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z"/>
          </svg></Link>
            <Link to={"/saved"} className="rightOptions"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-save2" viewBox="0 0 16 16">
  <path d="M2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9.5a1 1 0 0 0-1 1v4.5h2a.5.5 0 0 1 .354.854l-2.5 2.5a.5.5 0 0 1-.708 0l-2.5-2.5A.5.5 0 0 1 5.5 6.5h2V2a2 2 0 0 1 2-2H14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h2.5a.5.5 0 0 1 0 1H2z"/>
</svg></Link>
            <Link to={"/liked"} className="rightOptions"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg></Link></>):
            (<><Link to="/signin" className="rightOptions">History</Link>
            <Link to="/signin" className="rightOptions">Saved</Link>
            <Link to="/signin" className="rightOptions">Liked</Link></>)}
          </div> 
      </div>
      <div className="vidList">
        {vidList.map((vid) => {
          return (
            <>
            <Link to={"/video/"+vid.id}>
              <div className="vidCard">
              <img src={vid.description} className="thumb" alt="some vid"/>
              <div className="bottomInfo">
              <p className="title">{vid.title}</p>
              <p>Likes:{vid.likeCount}</p>
              </div>
              </div>
            </Link>
            </>
          )
        })}
      </div>
    </div>
  )
}

export default Home;