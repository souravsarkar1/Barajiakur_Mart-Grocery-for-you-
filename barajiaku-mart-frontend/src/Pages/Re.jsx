import React, { useState } from 'react';
import axios from 'axios';

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        pass: '',
        age: '',
        city: '',
        photo: null
    });

    const handleInputChange = event => {
        const { name, value } = event.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleFileChange = event => {
        const file = event.target.files[0];
        setFormData(prevData => ({
            ...prevData,
            photo: file
        }));
    };

    const handleSubmit = async event => {
        event.preventDefault();
        console.log(formData.photo);
        const formDataToSend = new FormData();
        for (const key in formData) {
            formDataToSend.append(key, formData[key]);
        }

        try {
            await axios.post('http://localhost:4500/seller/register', formDataToSend);
            alert('Registration successful!');
        } catch (error) {
            console.error(error);
            alert('Registration failed.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
            />
            <input
                type="password"
                name="pass"
                placeholder="Password"
                value={formData.pass}
                onChange={handleInputChange}
            />
            <input
                type="number"
                name="age"
                placeholder="Age"
                value={formData.age}
                onChange={handleInputChange}
            />
            <input
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleInputChange}
            />
            <input
                type="file"
                name="photo"
                accept="image/*"
                onChange={handleFileChange}
            />
            <button type="submit">Register</button>
        </form>
    );
};

export default RegistrationForm;
