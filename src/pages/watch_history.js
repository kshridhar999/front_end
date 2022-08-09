import React, { useEffect, useState }  from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Watched_vid = () => {
  const [watchedVidInfo,setInfo]=useState([]);
  let userInfo=window.localStorage.getItem("userInfo")?JSON.parse(window.localStorage.getItem("userInfo")):[];
  const getWatched=async()=>{
    if(userInfo.watch_history.length){
      let watch_arr=userInfo.watch_history.split("|");
      console.log(watch_arr);
      watch_arr.pop();
      console.log(watch_arr)
      // console.log(watch_arr)
      let watchVidList=[]
      for (let i = 0; i < watch_arr.length; i++) {
        console.log(watch_arr[i].toString())
        let watchVid= await axios.get("https://sshtube-app.herokuapp.com/videos/" + watch_arr[i].toString());
        watchVid=watchVid.data
        watchVidList.push(watchVid)
    } setInfo(watchVidList)}
  }
  useEffect(()=>{
    getWatched()
  },[])
    return (
        <>
        <div>
          <div className="navBar">
          <Link to="/user"><img src={userInfo.profile_picture} width="50" height="50" alt="img" className="leftOptions profile"></img></Link>
          <div class="circle" onClick={()=>{window.open("http://127.0.0.1:5000/upload", '_blank');}}></div>
          <div>
          <Link to="/" className="rightOptions"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-house-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
  <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
</svg></Link>
          <Link to="/saved" className="rightOptions">Saved</Link>
          <Link to="/liked" className="rightOptions">Liked</Link> 
          </div>
          </div>
      </div>
      <div className="vidList">
      {watchedVidInfo.map((vid) => {
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
        </>
    )
}
export default Watched_vid;