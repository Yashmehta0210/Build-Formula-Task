import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './ContactPage.css';


function Contact(){
    const navigate=useNavigate();
    const [userData, setUserData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber:''
    });

    const handleChange = (e) => {
        const {name,value} = e.target
        setUserData({...userData,[name]: value })
        
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("User", JSON.stringify(userData))
        navigate('/');

        setUserData('');
    }

    return (
        <div  className="contact-container">
            <h1 className="contact-heading">Contact Page</h1>
            <form  onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="form-label">First Name:</label>
                    <input className="form-input" type="text" name='firstName'  value={userData.firstName} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label className="form-label">Last Name:</label>
                    <input className="form-input" type="text" name='lastName' value={userData.lastName} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label className="form-label">Email Id:</label>
                    <input className="form-input" type="email" name='email' value={userData.email} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label className="form-label">Phone Number:</label>
                    <input className="form-input" type="tel" name='phoneNumber' value={userData.phoneNumber} onChange={handleChange} required />
                </div>

                <button className="submit-button" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Contact;