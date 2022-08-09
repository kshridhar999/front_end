import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import Swal from "sweetalert2";

const Video = () => {
  const [showVid,setShowVid] = useState([]);
  const [isLiked, setIsLiked]=useState(false);
  const [isSaved, setIsSaved]=useState(false);

  let id = useParams();
  let isSigned = window.localStorage.getItem("isSigned")?JSON.parse(window.localStorage.getItem("isSigned")):false;
  let userInfo = window.localStorage.getItem("userInfo")?JSON.parse(window.localStorage.getItem("userInfo")):false;

  const getVid = async () => {
    let vidInfo = await axios.get("https://sshtube-app.herokuapp.com/videos/" + id.id);
    vidInfo =vidInfo.data;
    setShowVid(vidInfo);
    console.log(showVid);
  }

  let alreadyInHistory = false;
  const addtoHistory = (vid_info) =>{
    if(userInfo.watch_history.length){
      console.log("here1")
      let historyArr=userInfo.watch_history.split("|");
      historyArr.pop();
      let x = vid_info.id.toString()
      for(let i=0;i<historyArr.length; i++){
        if(historyArr[i]===x){
          alreadyInHistory = true;
          break;
        }
      }
      if (!alreadyInHistory){
        console.log("here2")
        userInfo.watch_history += vid_info.id.toString() + "|";
        window.localStorage.setItem("userInfo", JSON.stringify({...userInfo, "watch_history":(userInfo.watch_history)}));
      }
  }
  }
let alreadyInLiked  = false;

const isliked =()=>{
  let x= showVid.id.toString()
  if(userInfo){
    if(userInfo.liked_vid.length){
      let likedArr=userInfo.liked_vid.split("|");
      likedArr.pop();
      console.log(likedArr)
      for (let i = 0; i< likedArr.length; i++) {
        if(likedArr[i]===x.toString()){
          console.log(likedArr)
          setIsLiked(!isLiked);
          console.log("already liked");
          break;}}}
}}

const like=()=>{
let x= showVid.id.toString()
  if(userInfo){
    if(userInfo.liked_vid.length){
      let likedArr=userInfo.liked_vid.split("|");
      likedArr.pop();
      console.log(likedArr)
      for (let i = 0; i< likedArr.length; i++) {
        if(likedArr[i]===x.toString()){
          alreadyInLiked=true;
          likedArr.splice(i,1);
          console.log(likedArr)
          setIsLiked(!isLiked);
          console.log("already liked");
          break;
        }
      }if(!alreadyInLiked){
        console.log("newly liked")
        likedArr.push(x.toString());
        setIsLiked(!isLiked);
      }
      likedArr.push("");
      userInfo.liked_vid = likedArr.join("|")
      window.localStorage.setItem("userInfo",JSON.stringify(userInfo));
      }else{
        setIsLiked(!isLiked);
        userInfo.liked_vid += x.toString() + "|";
        window.localStorage.setItem("userInfo",JSON.stringify(userInfo));
      }
    }else{
      Swal.fire("To like a video, please sign in.")
    }
  }
let alreadyInSaved = false;

const issaved = () =>{
  let x= showVid.id.toString()
  if(userInfo){
    if(userInfo.save_vid.length){
      let savedArr=userInfo.save_vid.split("|");
      savedArr.pop();
      for(let i=0;i<savedArr.length; i++){
        if(savedArr[i]===x.toString()){
          setIsSaved(!isSaved);
          console.log("already saved");
          break;}}}}}


const save=()=>{
let x= showVid.id.toString()
  if(userInfo){
    if(userInfo.save_vid.length){
      let savedArr=userInfo.save_vid.split("|");
      savedArr.pop();
      for(let i=0;i<savedArr.length; i++){
        if(savedArr[i]===x.toString()){
          savedArr.splice(i,1);
          setIsSaved(!isSaved);
          console.log("already saved");
          break;
        }
      }if(!alreadyInSaved){
        savedArr.push(x.toString());
        setIsSaved(!isSaved);
      }
      savedArr.push("");
      userInfo.save_vid = savedArr.join("|")
      window.localStorage.setItem("userInfo",JSON.stringify(userInfo));
      }else{
        setIsSaved(!isSaved);
        userInfo.save_vid += x.toString() + "|";
        window.localStorage.setItem("userInfo",JSON.stringify(userInfo)); 
      }
    }else{
      Swal.fire("To save a video, please sign in.")
    }
  }

  useEffect(()=>{
    getVid().then((x)=>{isliked(x);issaved(x);});
  },[]);

  return (
    <>
      <div className="pagetop">
      <div className="navBar">
        <div className="center">
        {isSigned?
          (<><Link to="/user"><img src={userInfo.profile_picture} width="50" height="50" alt="img" className="leftOptions profile"></img></Link>
          <Link to="/" className="leftOptions">Home</Link>
          <div class="circle" onClick={()=>{window.open("http://127.0.0.1:5000/upload", '_blank');}}></div></>
          ):(<><Link to="/signin"><img src="https://us.123rf.com/450wm/koblizeek/koblizeek2001/koblizeek200100050/138262629-man-icon-profile-member-user-perconal-symbol-vector-on-white-isolated-background-.jpg?ver=6" width="50" height="50"alt="img" className="leftOptions"></img></Link>
          <Link to="/" className="leftOptions"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-house-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
  <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
</svg></Link></>)
          }
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
        <div className='pagecontent'>
          <h1>{showVid.title}</h1>
          <h1>{showVid.id}</h1>
          <div className="video">
            <div>
            <video width="700" height="500" src={showVid.url} controls autoPlay />
            </div>
            <div>
              {isLiked?<button onClick={like} className="liked">Liked</button>:
              <button onClick={like}>Like</button>}
              {isSaved?<button onClick={save} className="saved">Saved</button>:
              <button onClick={save}>Save</button>}
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
export default Video;