import React, { useState } from 'react';
import "./Login.css"

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    

    const handleSubmit = (e)=>{
        e.preventDefault();
        const user = JSON.parse(localStorage.getItem('user'))
        if (user && user.email === email && user.password === password ) {
            alert('successfully login..')
            window.location.href="/dashboard"
        }else{
            alert("Invalid Credentials")
        }
    }

    return (
        <div className="login-container">
      <h2>Login Page</h2>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input type="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} required /><br />
        <label>Password:</label>
        <input type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} required /><br />
        <button type="submit">Login</button>
        <p><a href="/">Click Here To Create Account</a></p>
      </form>
    </div>
    );
}

export default Login;
