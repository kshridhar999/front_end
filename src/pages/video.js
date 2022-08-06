import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
const Video = () => {
  let id = useParams();
  const [vidInfo,setVidInfo]=useState([]);
  const [likedVidList,setLiked] =useState([]);
  let userInfo = window.localStorage.getItem("userInfo")?JSON.parse(window.localStorage.getItem("userInfo")):[];
  const [isLiked, setIsLiked]=useState(false);
  
  const isliked=()=>{
    if(userInfo.liked_vid.length){
      let likedArr=userInfo.liked_vid.split("|");
      likedArr.pop();
      console.log(likedArr)
      setLiked(likedArr);
      let vid_id = vidInfo.id.then((x)=>x.toString());
      for(let i=0;i<likedArr.length; i++){
        if(likedArr[i]==vid_id){
          setIsLiked(true);
          console.log("yex")
          break;
        }
      }
  }
}
  useEffect(()=>{
    getVidInfo().then(()=>isliked());
  },[]);
  // const addWatch=(id)=>{
  //   if(userInfo.watch_history.length){
  //     let watched=0;
  //     if(userInfo.watch_history.includes("|"+id+"|")){
  //       watched=1;
  //       }
  //     else{
  //       userInfo.watch_history+=id+"|";
  //     }  
  //     }
  //   else{
  //     userInfo.watch_history=id+"|";
  //   }
  //   window.localStorage.setItem("userInfo",JSON.stringify(userInfo))
  // }
  // useEffect(()=>{
  //   addWatch(vidInfo.id)
  // },[])
  
  const getVidInfo=async()=>{
    let abc =await axios.get("https://sshtube-app.herokuapp.com/videos/"+id.id);
    setVidInfo(abc.data);
  }
const like= (id)=>{
  // if(userInfo){
  //   if(userInfo.liked_vid.length){
  //     if(userInfo.liked_vid.includes(id.toString())){
  //       userInfo.liked_vid.replace(id.toString()+"|","");
  //       vidInfo.likeCount-=1;
  //     }else{
  //       userInfo.liked_vid+=id.toString()+"|";
  //       vidInfo.likeCount+=1;
  //     }}else{
  //       userInfo.liked_vid+=id.toString()+"|";
  //       console.log(typeof(id))
  //       vidInfo.likeCount+=1;
  //     }
  //     window.localStorage.setItem("userInfo",JSON.stringify(userInfo));
  //   }else{
  //     alert("Please sign in to like the video.");
  //     // Navigate("/signin");
  //   }
  }
  const save= (id)=>{
    // if(userInfo){
    //   if(userInfo.save_vid.length){
    //     let savedArr=userInfo.saved_vid.split("|");
    //     for (let i = 0; i < savedArr.length-1; i++) {
    //       if(savedArr[i]===id){
    //         savedArr.splice(i,1);
    //       }else{
    //         savedArr.push(id)
    //         savedArr.push("")
    //       }
    //     }
    //     }else{
    //       let savedArr=[];
    //       savedArr.push(id)
    //       savedArr.push("")
    //     }
    //     saved_vid=savedArr.join("dkdddkkm")
    //     window.localStorage.setItem("userInfo",JSON.stringify(userInfo));
    //   }else{
    //     alert("Please sign in to save the video.");
    //     // Navigate("/signin");
    //   }
    }
    
  return (
    <>
      <div className="pagetop">
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
        <div className='pagecontent'>
          <h1>hello description</h1>
          <div className="video">
            <div>
            <video width="300" height="250" src={vidInfo.url} controls />
            </div>
            <div>
              {isLiked?<button className="liked" onClick={()=>like(1234)}>Liked</button>:
              <button className="notliked" onClick={()=>like(1234)}>Like</button>}
              {isLiked?<button className="liked" onClick={()=>like(1234)}>Saved</button>:
              <button className="notliked" onClick={()=>save(1234)}>Save</button>}
              {isLiked?<button className="liked" onClick={()=>save(1234)}>Disliked</button>:
              <button className="notliked" onClick={()=>like(1234)}>Dislike</button>}
              {isLiked?console.log(1):console.log("here")}
            </div>
          </div>

        </div>
      </div>



    </>
  )
}
export default Video;