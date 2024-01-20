import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div className="text-white text-center mt-20">
            <h2 className="text-4xl font-bold mb-8">Welcome to Our Application!</h2>
            <div className="flex justify-center items-center gap-6">
                <Link to="/signup" className="bg-green-500 py-2 px-4 rounded-md text-white">
                    Sign Up
                </Link>
                <Link to="/login" className="bg-blue-500 py-2 px-4 rounded-md text-white">
                    Login
                </Link>
            </div>
        </div>
    );
};

export default LandingPage;