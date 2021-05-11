import React, { useState } from 'react'
import './Login.css'
import Imgamazon from './Images/Amazon_logo.svg'
import { Link, useHistory } from 'react-router-dom';
import { auth } from './Firebase';


// The functions folder is the full back-end code

function Login() {
    
    const history = useHistory()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password).then((auth) => {
                if(auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();


        auth
            .createUserWithEmailAndPassword(email, password).then((auth) => {
                console.log(auth)
                if(auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
        // do some fancy firebase register shitttt
    }

    return (
        <div className = "login">
            <Link to = '/'>
                <img
                    className = "login__logo" 
                    src= {Imgamazon} 
                    alt="Amazon logo" /> 
            </Link>

            <div className="login__container">
                    <h1>Sign-in</h1>

                    <form>
                        <h5>E-mail</h5>
                        <input type = 'text' value = {email} onChange = {e => setEmail(e.target.value)} />

                        <h5>Password</h5>
                        <input type = 'password' value = {password} onChange = {e => setPassword(e.target.value)} />

                        <button type = 'submit' className = "login__signInButton" onClick = {signIn} >Sign In</button>
                    </form>

                    <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
                    <button onClick = {register} className = "login__registerButton">Create your amazon account</button>
            </div>
        </div>
    )
}

export default Login;
