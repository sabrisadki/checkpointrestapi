import React, { useState } from 'react';
import axios from 'axios';
import '/home/sabri/Desktop/contactlistproject/frontend/src/Components/Contactus/Contactus.css';

const Contactus = () => {
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [message, setMessage] = useState('');

const handleReset = () => {
    setName('');
    setEmail('');
    setMessage('');
};

const handleSend = () => {
    const contactData = {
    name: name,
    email: email,
    message: message,
    };

    // Make the API call to send the contact data to the server
    axios.post('http://localhost:5001/api/contactus', contactData)
    .then((response) => {
        console.log('Contact data sent successfully:', response.data);
        // Optionally, show a success message to the user
    })
    .catch((error) => {
        console.error('Error sending contact data:', error);
        // Optionally, show an error message to the user
    });

    // Reset the form after sending the data
    handleReset();
};

return (
    <div className="form-1-container">
    <div className="form-1">
        <span className="heading">Get in touch</span>
        <input
        placeholder="Name"
        type="text"
        className="input"
        value={name}
        onChange={(e) => setName(e.target.value)}
        />
        <input placeholder="Email" id="mail" type="email"className="input" value={email} onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
        placeholder="Say Hello"
        rows="10"
        cols="30"
        id="message"
        name="message"
        className="textarea"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        />
        <div className="button-container">
        <div className="send-button" onClick={handleSend}>
            Send
        </div>
        <div className="reset-button-container">
            <div id="reset-btn" className="reset-button" onClick={handleReset}>
            Reset
            </div>
        </div>
        </div>
    </div>
    </div>
);
};

export default Contactus;
