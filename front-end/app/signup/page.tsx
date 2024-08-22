"use client";
import React, { useState } from 'react';
import '../../styles/signup.css'; 
import 'bootstrap-icons/font/bootstrap-icons.css'; 
import Link from 'next/link'

const Signup = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className='outerdiv'>
            <div className='flexContainer'>

                <div className='leftBox'>
                    <h1>Sign up</h1>
                    <div className="form-group">
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Email" />
                    </div>
                    <div className="form-group">
                        <div className="icon-container">
                            <input 
                                type={showPassword ? "text" : "password"} 
                                className="form-control" 
                                id="password" 
                                placeholder="Password" 
                            />
                            <i 
                                className={`bi ${showPassword ? 'bi-eye-fill' : 'bi-eye-slash'} custom-icon`} 
                                onClick={togglePasswordVisibility}
                            ></i>
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm Password" />
                    </div>
                    <button type="submit" className="btn btn-primary rounded-pill">Sign Up</button>
                    <p className="signin-link">Already have an account? <Link href="/login">Sign in</Link></p>
                </div>

                <div className='rightBox'>
                    <img src='/cover.png' alt="Cover" />
                </div>

            </div>
        </div>
    );
};

export default Signup;
