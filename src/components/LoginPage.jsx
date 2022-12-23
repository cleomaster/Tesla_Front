import React, { useState } from 'react';
import axios from 'axios';
import logo from "../assets/logo.svg";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { APIUrl } from './services/services';






function LoginPage(props) {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
       const { headers } = await axios.post(`${APIUrl}/api/users/login`, {
            email,
            password
        })
        localStorage.setItem("token", headers["x-auth-token"]);
        navigate("/");
    }

    return (
        <div className="center-container">
        <div className="form-container">
            <div className="form-content">
            <Link className="logo" to="/">
              <img  width="128" height="30" src={logo} alt="logo" />
            </Link>
            </div>
            <div className="form-content form-margin-bottom">
                <h1 className="text-margin-bottom">Sign in to your account</h1>
                <p className="text-margin-bottom">Or</p>
                <Link to="/signup" className="form-anchor-button" replace>
                    create your new account
                </Link>
            </div>
            <div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input onChange={(e) => setEmail(e.currentTarget.value)} id="email" type="text" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input onChange={(e) => setPassword(e.currentTarget.value)} id="password" type="password" />
                </div>
                <div className="form-actionButtons">
                    <button className="form-anchor-button">Forgot your password?</button>
                </div>
                <button onClick={handleLogin} className="form-button" type="submit">Sign In</button>
            </div>
           </div>
        </div>
    );
}

export default LoginPage;