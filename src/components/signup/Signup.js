import React, { useEffect, useState } from 'react';
import "./Signup.css"
const Signup = () => {

    const [user, setUser] = useState({
        name: "",
        email:"",
        password: "",
        phone:"",
        profession:"developer",
        
    });



    const handleChange =(e)=>{
        const {name,value} = e.target
        setUser((prevUser)=>({...prevUser,[name]:value}))
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        localStorage.setItem('user',JSON.stringify(user))
        alert("signup Successfull")
        window.location.href="/login"
        
    }

    return (
    <div className="Signup-container">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={user.name} onChange={handleChange} required /><br />
        <label>Password:</label>
        <input type="password" name="password" value={user.password} onChange={handleChange} required /><br />
        <label>Email:</label>
        <input type="email" name="email" value={user.email} onChange={handleChange} required /><br />
        <label>Phone:</label>
        <input type="text" name="phone" value={user.phone} onChange={handleChange} required /><br />
        <label>Profession:</label>
        <select name="profession" value={user.profession} onChange={handleChange}>
          <option value="Developer">Developer</option>
          <option value="Designer">Designer</option>
          <option value="Manager">Manager</option>
          <option value="Other">Other</option>
        </select><br />
        <button type="submit">Signup</button>
        <p><a href="/login">Already have a account</a></p>
      </form>
    </div>
    );
}

export default Signup;
