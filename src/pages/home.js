import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Liked from "./liked";

const Home = () => {
  // let id=window.localStorage.getItem("id")?JSON.parse(window.localStorage.getItem("id")):""
  let isSigned = window.localStorage.getItem("isSigned")?JSON.parse(window.localStorage.getItem("isSigned")):false
  const [user, setUser] = useState([]);
  const [vidName, setVidName] = useState("");
  const [vidList, setVidList] = useState([{url:"media.istockphoto.com/photos/hand-holding-heart-against-sparkling-golden-bokeh-lights-picture-id1193218253?k=20&m=1193218253&s=612x612&w=0&h=867Eq3yPsTe0ReLD2GEjicWH-6Q-TB_N1k9KHcmtfUU="},{url:"media.istockphoto.com/photos/hand-holding-heart-against-sparkling-golden-bokeh-lights-picture-id1193218253?k=20&m=1193218253&s=612x612&w=0&h=867Eq3yPsTe0ReLD2GEjicWH-6Q-TB_N1k9KHcmtfUU="},{url:"media.istockphoto.com/photos/hand-holding-heart-against-sparkling-golden-bokeh-lights-picture-id1193218253?k=20&m=1193218253&s=612x612&w=0&h=867Eq3yPsTe0ReLD2GEjicWH-6Q-TB_N1k9KHcmtfUU="},{url:"media.istockphoto.com/photos/hand-holding-heart-against-sparkling-golden-bokeh-lights-picture-id1193218253?k=20&m=1193218253&s=612x612&w=0&h=867Eq3yPsTe0ReLD2GEjicWH-6Q-TB_N1k9KHcmtfUU="},{url:"media.istockphoto.com/photos/hand-holding-heart-against-sparkling-golden-bokeh-lights-picture-id1193218253?k=20&m=1193218253&s=612x612&w=0&h=867Eq3yPsTe0ReLD2GEjicWH-6Q-TB_N1k9KHcmtfUU="},{url:"media.istockphoto.com/photos/hand-holding-heart-against-sparkling-golden-bokeh-lights-picture-id1193218253?k=20&m=1193218253&s=612x612&w=0&h=867Eq3yPsTe0ReLD2GEjicWH-6Q-TB_N1k9KHcmtfUU="} ]);
  let navigate = useNavigate();

  const Signin = ()=> {
    navigate("/signin");
  }

  const Signup = () => {
    navigate("/signup");
  }

  const getVids = async () => {
    let allVideos = await axios.get("http://127.0.0.1:5000/videos");
    setVidList(allVideos);
  }
  return (
    <div>
      <div className="navBar">
          <div>
          {isSigned?
          (<><Link to="/user"><img src="https://us.123rf.com/450wm/koblizeek/koblizeek2001/koblizeek200100050/138262629-man-icon-profile-member-user-perconal-symbol-vector-on-white-isolated-background-.jpg?ver=6" width="50" height="50" alt="img" className="leftOptions"></img></Link>
          <Link to="/uploads" className="leftOptions">Uploads</Link> </> 
          ):(<><Link to="/signin"><img src="https://us.123rf.com/450wm/koblizeek/koblizeek2001/koblizeek200100050/138262629-man-icon-profile-member-user-perconal-symbol-vector-on-white-isolated-background-.jpg?ver=6" width="20" height="20"alt="img" className="leftOptions"></img></Link>
          <Link to="/signin" className="leftOptions">Uploads</Link></>)
          }
          </div>

          <div>
          <input type="text" value={vidName} onChange={(e) => {setVidName(e.target.value)}} className="searchInp"></input>
          <button className="searchButton" onClick={getVids}>Search</button>
          </div>

          <div>
            {isSigned? ///////////////////////////
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
            <Link to={"/video"} >
              <div className="vidCard">
              <img src={"https://"+vid.url} height="200" width="300"></img>
              <div className="bottomInfo">
              <p className="title">My name is anthony gonz Please state the value of your mind.</p>
              <div>Likes:likeCount</div>
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