import React, { useEffect, useState }  from "react";
import { Link } from "react-router-dom";

const Watched_vid = () => {
    const [watched,setWatched]=useState([])
    let userInfo = JSON.parse(window.localStorage.getItem("userInfo"));
    // setUser({id:1,liked:"pqr|123|rts|",liked:"pqr|123|rts|",disliked:"pqr|123|rts|",saved:"pqr|123|rts|",history:"pqr|123|rts|"})
    const showHist=()=>{
      if(userInfo.watch_history.length){
        let watchedArr= userInfo.Watched_vid.split("|");
        let newArr=[]
        for (let i = 0; i < watchedArr.length-1; i++) {
          newArr.push(watchedArr[i])
        }
        setWatched(newArr)
        console.log(watched)
        }
      }
    useEffect(()=>{
      showHist();
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
          <Link to="/" className="rightOptions">Home</Link>
          <Link to="/saved" className="rightOptions">Saved</Link>
          <Link to="/liked" className="rightOptions">Liked</Link>
          </div> 
          </div>
        </div>
        <div className="vidList">
          {watched.map(vid=>{
            return(
              <div className="vidCard">
                <img src="" alt=""></img>
              </div>
            )
          })}
        </div>
        </>
    )
}

export default Watched_vid;