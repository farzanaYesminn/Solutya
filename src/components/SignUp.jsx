import React, { useState } from 'react';
import { signUp } from '../api/Api';

const Signup = () => {
    const [userData, setUserData] = useState({
        username: '',
        password: '',
        role: 'User', // Default role
        name: '',
        address: '',
        phone: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const response = await signUp(userData);
            console.log(response);
        } catch (error) {
            console.error('Error signing up:', error.message);
        }
    };

    return (
        <div>
            <h2>Signup</h2>
            <form onSubmit={handleSignup}>
                <label>
                    Username:
                    <input
                        type="text"
                        name="username"
                        value={userData.username}
                        onChange={handleInputChange}
                    />
                </label>
                <br />
                <label>
                    Password:
                    <input
                        type="password"
                        name="password"
                        value={userData.password}
                        onChange={handleInputChange}
                    />
                </label>
                <br />
                <label>
                    Role:
                    <select
                        name="role"
                        value={userData.role}
                        onChange={handleInputChange}
                    >
                        <option value="User">User</option>
                        <option value="Admin">Admin</option>
                        <option value="SuperAdmin">SuperAdmin</option>
                    </select>
                </label>
                <br />
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={userData.name}
                        onChange={handleInputChange}
                    />
                </label>
                <br />
                <label>
                    Address:
                    <input
                        type="text"
                        name="address"
                        value={userData.address}
                        onChange={handleInputChange}
                    />
                </label>
                <br />
                <label>
                    Phone:
                    <input
                        type="text"
                        name="phone"
                        value={userData.phone}
                        onChange={handleInputChange}
                    />
                </label>
                <br />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default Signup;
