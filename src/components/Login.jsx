import React, { useState } from 'react';
import { login } from '../api/Api';

const Login = ({ history }) => {
    const [userData, setUserData] = useState({
        username: '',
        password: '',
    });

    const [error, setError] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await login(userData);
            localStorage.setItem('token', response.token);
            history.push('/products');
        } catch (error) {
            setError('Invalid credentials. Please check your username and password.');
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
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
                <button type="submit">Login</button>
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </form>
        </div>
    );
};

export default Login;
