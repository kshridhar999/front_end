import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const User=()=>{
    let userInfo = JSON.parse(window.localStorage.getItem("userInfo"))
    let isSigned = JSON.parse(window.localStorage.getItem("isSigned"))
    let navigate=useNavigate();
    const signout =async()=>{
        let isSigned=false;
        await axios.put("https://sshtube-app.herokuapp.com/users/"+userInfo.id,userInfo);
        window.localStorage.removeItem("userInfo");
        window.localStorage.setItem("isSigned",JSON.stringify(isSigned));
        navigate("/");
        
    }
    return(
        <>
        <div className="navBar">
          {isSigned?
          (<><Link to="/user"><img src="https://us.123rf.com/450wm/koblizeek/koblizeek2001/koblizeek200100050/138262629-man-icon-profile-member-user-perconal-symbol-vector-on-white-isolated-background-.jpg?ver=6" width="50" height="50" alt="img" className="leftOptions"></img></Link>
          <Link to="/uploads" className="leftOptions">Uploads</Link> </> 
          ):(<><Link to="/signin"><img src="https://us.123rf.com/450wm/koblizeek/koblizeek2001/koblizeek200100050/138262629-man-icon-profile-member-user-perconal-symbol-vector-on-white-isolated-background-.jpg?ver=6" width="20" height="20"alt="img" className="leftOptions"></img></Link>
          <Link to="/signin" className="leftOptions">Uploads</Link></>)
          }

          

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
    
        <div className="user">
            <h1 className="info">Username:{userInfo.username}</h1>
            <h1 className="info"> Password:{userInfo.password}</h1>
            <button onClick={signout}>Signout</button>
        </div>
        
        </>
    )
}
export default User