import React  from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const Saved_vid = () => {
  const [savedVidList,setSave] =useState([]);
  let userInfo=window.localStorage.getItem("userInfo")?JSON.parse(window.localStorage.getItem("userInfo")):null;
  const getSaved=()=>{
    if(userInfo.save_vid.length){
      let saved_arr=userInfo.save_vid.split("|");
      saved_arr.splice(saved_arr.length-1,1);
      setSave(saved_arr)
  }
  }
  
  useEffect(()=>{
    getSaved()
  },[])
    return (<>
         <div>
            <div className="navBar">
          <div className="searchInp">
          <Link to="/user"><img src="https://us.123rf.com/450wm/koblizeek/koblizeek2001/koblizeek200100050/138262629-man-icon-profile-member-user-perconal-symbol-vector-on-white-isolated-background-.jpg?ver=6" width="50" height="50" alt="img" className="leftOptions"></img></Link>
          <div class="circle" onClick={()=>{window.open("http://127.0.0.1:5000/upload", '_blank');}}></div>
          </div>
          
          <div className="searchInp">
          
          <Link to="/watch_history" className="rightOptions">History</Link>
          <Link to="/" className="rightOptions">Home</Link>
          <Link to="/liked" className="rightOptions">Liked</Link>
          </div> 
          </div>
        
      
        </div>
        <div className="vidList">
        {savedVidList.map((vid) => {
          return (
            
            <Link to={"/video"} >
              <div className="vidCard">
              <img src="" height="200" width="300"></img>
              <div className="bottomInfo">
              <p className="title">{vid}</p>
              <div>Likes:likeCount</div>
              </div>
              </div>
            </Link>
            
          )
        })}
      </div>
        <h1>in saved page</h1>
        </>
    )
}

export default Saved_vid;