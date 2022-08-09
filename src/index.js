import {React} from "react"
import {render} from "react-dom"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "../src/pages/home"
import Signup from "../src/pages/signup"
import Signin from "../src/pages/signin"
import WatchHistory from "./pages/watch_history"
import Saved from "./pages/saved"
import Liked from "../src/pages/liked"
import Uploads from "../src/pages/upload"
import "./stylesheets/style.css"
import Video from "./pages/video"
import User from "./pages/user"
import Results from "./pages/results"

const App=()=>{
    return(
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/liked" element={<Liked/>}/>
                <Route path="/watch_history" element={<WatchHistory/>}/>
                <Route path="/saved" element={<Saved/>}/>
                <Route path="/uploads" element={<Uploads/>}/>
                <Route path="/signin" element={<Signin/>}/>
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/video/:id" element={<Video/>}/>
                <Route path="/user" element={<User/>}/>
                <Route path="/results/:title" element={<Results/>}/>
            </Routes>
        </BrowserRouter>
        </>
        )
}
render(<App/>,document.getElementById("root"))