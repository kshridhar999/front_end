import React, { useState }  from "react";
import { Link } from "react-router-dom";

const Watched_vid = () => {
    const [user,setUser]=useState([]);
    const [watched,setWatched]=useState([])
    // setUser({id:1,liked:"pqr|123|rts|",liked:"pqr|123|rts|",disliked:"pqr|123|rts|",saved:"pqr|123|rts|",history:"pqr|123|rts|"})
    const showHist=()=>{
      if(user.Watched_vid.length){
        let watchedArr= user.Watched_vid.split("|");
        for(let i=0;i<watchedArr.length - 1;i++){
          setWatched([...watched,watchedArr[i]])
        }
      }
    }
    return (
        <>
        <div>
            <div className="navBar">
          <div className="searchInp">
          <Link to="/user"><img src="https://us.123rf.com/450wm/koblizeek/koblizeek2001/koblizeek200100050/138262629-man-icon-profile-member-user-perconal-symbol-vector-on-white-isolated-background-.jpg?ver=6" width="50" height="50" alt="img" className="leftOptions"></img></Link>
            <Link to="/uploads" className="leftOptions">Uploads</Link>
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