import React, { useEffect, useState }  from "react";
import { Link, useParams } from "react-router-dom";

const Liked = () => {
  // let userInfo= JSON.parse(window.localStorage.getItem("userInfo"));
  // if(userInfo.liked_vid.length){
  //   let likedArr= userInfo.liked_vid.split("|");
  //   if{}
  // }
  const [likedVidList,setLiked] =useState([]);
  let userInfo=window.localStorage.getItem("userInfo")?JSON.parse(window.localStorage.getItem("userInfo")):null;
  const getLiked=()=>{
    if(userInfo.liked_vid.length){
      let liked_arr=userInfo.liked_vid.split("|");
      liked_arr.splice(liked_arr.length-1,1);
      setLiked(liked_arr)
  }
  }
  
  useEffect(()=>{
    getLiked()
  },[])
    return (
        <>
        <div>
            <div className="navBar">
          <div className="searchInp">
          <Link to="/user"><img src="https://us.123rf.com/450wm/koblizeek/koblizeek2001/koblizeek200100050/138262629-man-icon-profile-member-user-perconal-symbol-vector-on-white-isolated-background-.jpg?ver=6" width="50" height="50" alt="img" className="leftOptions"></img></Link>
          <div class="circle" onClick={()=>{window.open("http://127.0.0.1:5000/upload", '_blank');}}></div>
          </div>
          
          <div className="searchInp">
          
          <Link to="/watch_history" className="rightOptions">History</Link>
          <Link to="/saved" className="rightOptions">Saved</Link>
          <Link to="/" className="rightOptions">Home</Link>
          </div> 
          </div>
      </div>
      <div className="vidList">
        {likedVidList.map((vid) => {
          return (
            <>
            <Link to={"/video"} >
              <div className="vidCard">
              <img src="" height="200" width="300"></img>
              <div className="bottomInfo">
              <p className="title">{vid}</p>
              <div>Likes:likeCount</div>
              </div>
              </div>
            </Link>
            </>
          )
        })}
      </div>
        </>
    )
}

export default Liked;