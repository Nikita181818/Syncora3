import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import UserCard from '../components/UserCard';
import { ToastContainer, toast } from 'react-toastify'; // Import ToastContainer and toast
import 'react-toastify/dist/ReactToastify.css'; // Import toastify CSS

const UserList = () => {
    const url = 'https://project-management-tool-backend-ifbp.onrender.com/members-and-managers';
    const deleteUserUrl = 'https://project-management-tool-backend-ifbp.onrender.com/delete-member'; // Base URL for delete requests
    const [members, setMembers] = useState([]);
    const [managers, setManagers] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    // Fetch users when the component mounts
    useEffect(() => {
        fetch(url)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Failed to fetch Users');
                }
            })
            .then((data) => {
                if (Array.isArray(data.members) && Array.isArray(data.managers)) {
                    setMembers(data.members);
                    setManagers(data.managers);
                } else {
                    setErrorMessage('Unexpected response format');
                }
            })
            .catch((error) => {
                setErrorMessage(error.message);
            });
    }, []);

    // Handle delete user
    const handleDelete = (userId) => {
        fetch(`${deleteUserUrl}/${userId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Failed to delete user');
                }
            })
            .then(() => {
                // Remove the deleted user from state
                setMembers(members.filter(member => member._id !== userId));
                setManagers(managers.filter(manager => manager._id !== userId));
                toast.success('User deleted successfully!', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            })
            .catch((error) => {
                toast.error(`Error deleting user: ${error.message}`, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            });
    };

    return (
        <div className="flex">
            <Sidebar userRole="admin" />
            <div className="flex-1">
                <Navbar userRole="admin" />
                <div className="p-6">
                    <h1 className="text-2xl font-bold mb-6">User List</h1>
                    {errorMessage && <div className="text-red-500 mb-4">{errorMessage}</div>}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Managers column */}
                        <div>
                            <h2 className="text-xl font-bold mb-4">Managers</h2>
                            {managers.length === 0 ? (
                                <div className="text-gray-800 text-xl text-center">No managers available</div>
                            ) : (
                                <div className="space-y-4">
                                    {managers.map(user => (
                                        <UserCard key={user._id} user={user} onDelete={() => handleDelete(user._id)} />
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Members column */}
                        <div>
                            <h2 className="text-xl font-bold mb-4">Members</h2>
                            {members.length === 0 ? (
                                <div className="text-gray-800 text-xl text-center">No members available</div>
                            ) : (
                                <div className="space-y-4">
                                    {members.map(user => (
                                        <UserCard key={user._id} user={user} onDelete={() => handleDelete(user._id)} />
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer /> {/* Add ToastContainer here */}
        </div>
    );
};

export default UserList;
