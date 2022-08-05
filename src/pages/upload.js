import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
// import styles from "../stylesheets/signup-in.module.css";

const Upload = () => {
  return (<>
    <div>
    <div className="navBar">
          <div className="searchInp">
          <Link to="/user"><img src="https://us.123rf.com/450wm/koblizeek/koblizeek2001/koblizeek200100050/138262629-man-icon-profile-member-user-perconal-symbol-vector-on-white-isolated-background-.jpg?ver=6" width="50" height="50" alt="img" className="leftOptions"></img></Link>
            <Link to="/" className="leftOptions">Home</Link>
          </div>
          
          <div className="searchInp">
          <Link to="/saved" className="rightOptions">Saved</Link>
          <Link to="/watch_history" className="rightOptions">History</Link>
          <Link to="/liked" className="rightOptions">Liked</Link>
          </div> 
          </div>

        </div>
        
        <h1>hello uploadpage</h1>

        </>

  )
}

export default Upload;