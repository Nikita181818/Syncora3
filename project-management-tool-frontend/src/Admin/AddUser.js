    import React, { useState } from 'react';
    import Sidebar from '../components/Sidebar';
    import Navbar from '../components/Navbar';
    import { useNavigate } from 'react-router-dom';

    const AddUser = () => {
        const url = 'https://project-management-tool-backend-ifbp.onrender.com/signup'; // Backend signup endpoint
        const [name, setName] = useState("");
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [role, setRole] = useState(""); // State for role selection
        const [errorMessage, setErrorMessage] = useState("");  // State for error message
        const navigate = useNavigate();

        const handleSubmit = (e) => {
            e.preventDefault(); // Prevent page reload

            const data = { name, email, password, role }; // Data to be sent to backend

            fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            })
                .then((response) => {
                    if (response.ok) {
                        return response.json(); // Parse the JSON if the response is successful
                    } else if (response.status === 400) {
                        throw new Error("Bad request. Please check your input.");
                    } else if (response.status === 500) {
                        throw new Error("Internal server error. Please try again later.");
                    } else {
                        throw new Error(`Error occurred. Status code: ${response.status}`);
                    }
                })
                .then(() => {
                    // Clear the form fields
                    setName('');
                    setEmail('');
                    setPassword('');
                    setRole('');

                    // Redirect to the user list page
                    navigate("/admin/user-list"); // Replace with the correct route for your user list page
                })
                .catch((err) => {
                    // Handle error cases
                    setErrorMessage(err.message);
                    setPassword(""); // Clear the password field for security reasons
                });
        };

        return (
            <div className="flex">
                <Sidebar userRole="admin" />
                <div className="flex-1">
                    <Navbar userRole="admin" />
                    <div className="p-6">
                        <h1 className="text-2xl font-bold mb-6">Add User</h1>
                        
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {errorMessage && <div className="text-red-500">{errorMessage}</div>}
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full p-3 border rounded-lg"
                                placeholder="Name"
                                required
                                autoFocus
                            />
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full p-3 border rounded-lg"
                                placeholder="Email"
                                required
                            />
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full p-3 border rounded-lg"
                                placeholder="Password"
                                required
                            />
                            <select
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
                                className="w-full p-3 border rounded-lg"
                                required
                            >
                                <option value="">Select Role</option>
                                <option value="manager">Manager</option>
                                <option value="member">Member</option>
                            </select>
                            <button
                                type="submit"
                                className="bg-blue-500 text-white py-2 px-4 rounded-lg"
                            >
                                Add User
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    };

    export default AddUser;
