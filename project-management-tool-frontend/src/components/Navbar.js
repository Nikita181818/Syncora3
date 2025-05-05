import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Navbar = () => {
    const navigate = useNavigate(); // Initialize useNavigate

    const handleLogout = () => {
        // Clear authentication data
        localStorage.removeItem('token'); // Adjust based on your storage method
        // Optionally clear other user data
        // localStorage.removeItem('user');

        // Redirect to login page
        navigate('/login');
    };

    return (
        <nav className="sticky top-0 bg-gray-800 text-white p-4 flex justify-between items-center">
            <div className="text-lg font-bold">Task Management</div>
            <div>
                <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg">Notifications</button>
                <button
                    onClick={handleLogout} // Add onClick handler
                    className="px-4 py-2 bg-red-500 hover:bg-red-600 rounded-lg ml-4"
                >
                    Logout
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
