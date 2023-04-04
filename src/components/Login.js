import React from "react";
import spotify from '../image/spotify.png'
import '../style/Login.css'
import {LoginUrl} from './subComponents/spotify'


function Login(){
    
    return (
        <div className="login">
            <img src={spotify} alt="" />

            <a href={LoginUrl}> LOGIN WITH SPOTIFY </a>
        </div>
    )
}

export default Login;