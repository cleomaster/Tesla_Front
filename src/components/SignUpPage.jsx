import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import logo from "../assets/logo.svg";
import { APIUrl } from './services/services';

function SignUpPage(props) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleRegister = async () => {
        axios.post(`${APIUrl}/api/users/register`, {
            name, 
            email,
            password,
        })
        console.log("Registration successful");
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
                <h1 className="text-margin-bottom">Sign up your account</h1>
                <p className="text-margin-bottom">Or</p>
                <Link className="form-anchor-button" to="/login" replace>Login</Link>
            </div>
            <div>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input onChange={(e) => setName(e.currentTarget.value)} id="name" type="text" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input onChange={(e) => setEmail(e.currentTarget.value)} id="email" type="email" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input onChange={(e) => setPassword(e.currentTarget.value)} id="password" type="password" />
                </div>
                <div className="form-group">
                    <label htmlFor="confirmpassword">Confirm Password</label>
                    <input onChange={(e) => setConfirmPassword(e.currentTarget.value)} id="confirmpassword" type="password" />
                </div>
                <div className="form-actionButtons">
                    <button className="form-anchor-button" href="#">Forgot your password?</button>
                </div>
                <button onClick={handleRegister} className="form-button" type="submit">Sign Up</button>
            </div>
           </div>
        </div>
    );
}

export default SignUpPage;