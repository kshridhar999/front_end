import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
const Results =()=>{
    let title=useParams();
    let isSigned = window.localStorage.getItem("isSigned")?JSON.parse(window.localStorage.getItem("isSigned")):false;
    let userInfo = window.localStorage.getItem("userInfo")?JSON.parse(window.localStorage.getItem("userInfo")):[];
    let allVideos=JSON.parse(window.localStorage.getItem("allVideos"));
    const [vidName, setVidName] = useState("");
    const [vidList, setVidList] = useState([]);
    let navigate = useNavigate();


    let searched=[]
    const getVids = () => {
        for (let i = 0; i< allVideos.length; i++) {
        if(allVideos[i].title.toLowerCase().includes(title.title.toLowerCase())){
            console.log(allVideos[i].title)
            searched.push(allVideos[i]);
        }
        }setVidList(searched)
    }

    useEffect(()=>{
        getVids();
      },[]);

    const getVid = (x) =>{
        if(x){
            navigate("/results/"+x);
        }else{
            navigate("/");
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
          <button className="searchButton" onClick={(e)=>getVid(vidName)}>Search</button>
          </div>

          <div>
            {isSigned?
            (<><Link to={"/watch_history"} className="rightOptions">History</Link>
            <Link to={"/saved"} className="rightOptions">Saved</Link>
            <Link to={"/liked"} className="rightOptions">Liked</Link></>):
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
export default Results;