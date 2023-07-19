import React, { useEffect, useState } from "react";
import './HomePage.css'



function Home() {   
    
    const [contactData,setContactData]=useState('');
    console.log(contactData);

    useEffect(() => {
        const storedData=localStorage.getItem('User');
         if(storedData){
            const parseData=JSON.parse(storedData)
            setContactData(parseData);
         }
    },[]);

    
    
    const handleClearData = () =>{
        const confirmation=window.confirm("Are you sure you want to clear the data?")

        if(confirmation){
            localStorage.clear();
            setContactData(null)
        }
    }

    return (
        <div className='home-container'>
            
            <h1 className="welcome-message">Welcome to the Home Page!</h1>
            {contactData && (
                <div className="contact-details">
                    <h2>Contact Details</h2>
                    <p>First Name: {contactData.firstName}</p>
                    <p>Last Name: {contactData.lastName}</p>
                </div>
            )}
            <button className="clear-button" onClick={handleClearData}>Clear</button>
        </div>
    )

}
export default Home;