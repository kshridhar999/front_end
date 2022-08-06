import React, { useState } from "react";
import { Link } from "react-router-dom";
// import styles from "../stylesheets/signup-in.module.css"
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Signup = () => {
    const[username, setUsername] = useState("");
    const[profile_picture, setProfilePicture] = useState([]);
    const[Password, setPassword] = useState("");
    const[confirmPassword, setConfirmPassword] = useState("");
    let navigate=useNavigate()
    const Signup = () => {
        if(Password!==confirmPassword){
            alert("Password is not confirmed");
        }
        else{
            axios.post("http://sshtube-app.herokuapp.com/user", {"username":username, "password":Password, "profile_picture":"", "liked_vid":"", "watch_history":"", "save_vid":"", "upload_list":""})
            // alert("SUCCESS!");
            navigate("/signin");
        }
    }

    return (
        <>
        <div  className="signing">

        <input type="name" placeholder="username" value={username} className="signingInp" onChange={(e)=>{setUsername(e.target.value)}} required></input>

        <input type="password" placeholder="password" value={Password} className="signingInp" onChange={(e)=>{setPassword(e.target.value)}} required></input>

        <input type="password" placeholder="confirm password" value={confirmPassword} className="signingInp" onChange={(e)=>{setConfirmPassword(e.target.value)}} required></input>

        <button onClick={Signup} className="signButton">Sign up</button>

        <Link to="/signin">Have an account! Sign in</Link>

        </div>
        </>
    )
}

export default Signup;