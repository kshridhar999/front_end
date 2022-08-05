import React, { useState } from "react";
import { Link } from "react-router-dom";
// import styles from "../stylesheets/signup-in.module.css"
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signin = () => {
    const[username, setUsername] = useState("pqrs");
    const[Password, setPassword] = useState("abcd");
    let isSigned = false;
    let navigate=useNavigate();

    const Signin = async () => {
        let all_users = await axios.get("https://sshtube-app.herokuapp.com/users");
        all_users = all_users.data
        for (let i=0;i<all_users.length;i++){
            if(all_users[i]["username"]===username&&all_users[i]["password"]===Password){
                // let userInfo=await all_users[i];
                window.localStorage.setItem("userInfo",JSON.stringify(all_users[i]));
                isSigned = true;
                break;
            }
        }
        if (isSigned){
            window.localStorage.setItem("isSigned",JSON.stringify(isSigned));
            navigate("/")
        }
        else{
            alert("Not registered");
        }
    }

    return (
        <>
        <div  className="signing">

        <input type="name" value={username} className="signingInp" onChange={(e)=>{setUsername(e.target.value)}} required></input>

        <input type="password" value={Password} className="signingInp" onChange={(e)=>{setPassword(e.target.value)}} required></input>

        <button onClick={Signin} className="signButton">Sign in</button>

        <Link to="/signup">Don't have an account! Sign up</Link>

        </div>
        </>
    )
}

export default Signin;