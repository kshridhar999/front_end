import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Liked from "./liked";

const Home = () => {
  // let id=window.localStorage.getItem("id")?JSON.parse(window.localStorage.getItem("id")):""
  let isSigned = window.localStorage.getItem("isSigned")?JSON.parse(window.localStorage.getItem("isSigned")):false
  const [user, setUser] = useState([]);
  const [vidName, setVidName] = useState("");
  const [vidList, setVidList] = useState([{url:"/Users/cogoport/download_vids/a.mp4", title:"a"},{url:"/Users/cogoport/download_vids/b.mp4", title:"b"}
  ]);
  let navigate = useNavigate();

  const Signin = ()=> {
    navigate("/signin");
  }

  const Signup = () => {
    navigate("/signup");
  }

  const getVids = async () => {
    let allVideos = await axios.get("https://sshtube-app.herokuapp.com/videos");
    allVideos=allVideos.data
    setVidList(allVideos);
  }
  useEffect(()=>{
    getVids();
  }, []);
  return (
    <div>
      <div className="navBar">
          <div>
          {isSigned?
          (<><Link to="/user"><img src="https://us.123rf.com/450wm/koblizeek/koblizeek2001/koblizeek200100050/138262629-man-icon-profile-member-user-perconal-symbol-vector-on-white-isolated-background-.jpg?ver=6" width="50" height="50" alt="img" className="leftOptions"></img></Link>
          <div class="circle" onClick={()=>{window.open("http://127.0.0.1:5000/upload", '_blank');}}></div></>
          ):(<><Link to="/signin"><img src="https://us.123rf.com/450wm/koblizeek/koblizeek2001/koblizeek200100050/138262629-man-icon-profile-member-user-perconal-symbol-vector-on-white-isolated-background-.jpg?ver=6" width="20" height="20"alt="img" className="leftOptions"></img></Link>
          <Link to="/signin" className="leftOptions">Uploads</Link></>)
          }
          </div>

          <div>
          <input type="text" value={vidName} onChange={(e) => {setVidName(e.target.value)}} className="searchInp"></input>
          <button className="searchButton" onClick={getVids}>Search</button>
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
            <Link to={"/video/"+vid.id} >
              <div className="vidCard">
              <img src={vid.description} height="200" width="300" alt="some vid">
              </img>
              {console.log(vid.description)}
              <div className="bottomInfo">
              <p className="title">{vid.title}</p>
              <div>Likes:{vid.likeCount}</div>
              </div>
              </div>
            </Link>
            </>
          )
        })}
      </div>
      {/* <div className={styles.signing}>
      <button className={styles.signButton} onClick={Signup}>Sign up</button>
      <button className={styles.signButton} onClick={Signin}>Sign in</button>
      </div> */}

    </div>
  )
}

export default Home;