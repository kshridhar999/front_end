import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
const Video = () => {
  var id = useParams();
  const [vidInfo,setVidInfo]=useState([]);
  const [likedVidList,setLiked] =useState([]);
  let userInfo=window.localStorage.getItem("userInfo")?JSON.parse(window.localStorage.getItem("userInfo")):null;
  let isLiked=false;
  const isliked=()=>{
    console.log(userInfo.liked_vid.length)
    if(userInfo.liked_vid.length>0){
      let likedArr=userInfo.liked_vid.split("|");
      setLiked(likedArr)
      console.log(likedArr)
  }}
  useEffect(()=>{
    isliked()
  },[])
  
  // const getVidInfo=async()=>{
  //   // let vidInfo=await axios.get("http://127.0.0.1:5000/videos"+id);
  //   setVidInfo(vidInfo);
  // useEffect(()=>{
  //   getVidInfo()
  // },[]);
//   const like= async (id)=>{
//   let User = window.localstorage.getItem("user")?JSON.parse(window.localstorage.getItem("user")):[];
//   setUser([User]);
//   let liked_arr = user.liked_vid?user.liked_vid:""
//   if(liked_arr.length){
//     if(user.liked_vid.contains(id)){
//       user.liked_vid.replace(id+"|","")
//     }else{
//       user.liked_vid+=id+"|"
//     }
//   }else{
//     user.liked_vid = id + "|"
//   }
//   setUser([user]).then(window.localStorage.setItem("user",JSON.stringify([user])))
//   }
const like= (id)=>{
  if(userInfo){
    if(userInfo.liked_vid.length){
      if(userInfo.liked_vid.includes(id.toString())){
        userInfo.liked_vid.replace(id.toString()+"|","");
        vidInfo.likeCount-=1;
      }else{
        userInfo.liked_vid+=id.toString()+"|";
        vidInfo.likeCount+=1;
      }}else{
        userInfo.liked_vid+=id.toString()+"|";
        console.log(typeof(id))
        vidInfo.likeCount+=1;
      }
      window.localStorage.setItem("userInfo",JSON.stringify(userInfo));
    }else{
      alert("Please sign in to like the video.");
      // Navigate("/signin");
    }
  }
  const save= (id)=>{
    if(userInfo){
      if(userInfo.save_vid.length){
        if(userInfo.save_vid.includes(id.toString())){
          userInfo.save_vid.replace(id.toString()+"|","");
        }else{
          userInfo.save_vid+=id.toString()+"|";
        }}else{
          userInfo.save_vid+=id.toString()+"|";
        }
        window.localStorage.setItem("userInfo",JSON.stringify(userInfo));
      }else{
        alert("Please sign in to save the video.");
        // Navigate("/signin");
      }
    }
    
  return (
    <>
      <div className="pagetop">
      <div className="navBar">
          <div className="searchInp">
          <Link to="/user"><img src="https://us.123rf.com/450wm/koblizeek/koblizeek2001/koblizeek200100050/138262629-man-icon-profile-member-user-perconal-symbol-vector-on-white-isolated-background-.jpg?ver=6" width="50" height="50" alt="img" className="leftOptions"></img></Link>
            <Link to="/uploads" className="leftOptions">Uploads</Link>
          </div>
          
          <div className="searchInp">
          
          <Link to="/watch_history" className="rightOptions">History</Link>
          <Link to="/" className="rightOptions">Home</Link>
          <Link to="/liked" className="rightOptions">Liked</Link>
          </div> 
      </div>
        <div className='pagecontent'>
          <h1>hello description</h1>
          <div className="video">
            <div>
            <video width="300" height="250" src="https://video-links.b-cdn.net/media/videolinks/video/one_rs.mp4" controls>
                no vid found.
            </video>
            </div>
            <div>
              {isLiked?<button className="liked" onClick={()=>like(1234)}>Liked</button>:
              <button className="notliked" onClick={()=>like(1234)}>Like</button>}
              {isLiked?<button className="liked" onClick={()=>like(1234)}>Saved</button>:
              <button className="notliked" onClick={()=>save(1234)}>Save</button>}
              {isLiked?<button className="liked" onClick={()=>save(1234)}>Disliked</button>:
              <button className="notliked" onClick={()=>like(1234)}>Dislike</button>}
            </div>
          </div>

        </div>
      </div>



    </>
  )
}
export default Video;