import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

const AddTask = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [deadline, setDeadline] = useState('');
    const [priority, setPriority] = useState('Medium');
    const [members, setMembers] = useState([]);
    const [assignedMember, setAssignedMember] = useState('');
    const [status, setStatus] = useState('Pending'); // Default status
    const [statusOptions] = useState(['Pending', 'In Progress', 'Completed']); // Static status options
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    useEffect(() => {
        fetch('https://project-management-tool-backend-ifbp.onrender.com/members-and-managers', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}` // if JWT token is needed
            }
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to fetch members and managers');
                }
                return response.json();
            })
            .then((data) => {
                if (Array.isArray(data.members)) {
                    setMembers(data.members); // Set members list
                } else {
                    throw new Error('Unexpected response format');
                }
            })
            .catch((error) => setErrorMessage(error.message));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Prepare the task data
        const data = { 
            title, 
            description, 
            deadline, 
            priority, 
            members: assignedMember, // Pass the selected member's ID
            status // Use the status from the select
        };

        // Send POST request to the backend to add the task
        fetch('https://project-management-tool-backend-ifbp.onrender.com/tasks/addTask', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}` // JWT token if needed
            },
            body: JSON.stringify(data),
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Error adding task');
                }
            })
            .then(() => {
                setSuccessMessage('Task added successfully!');
                setTitle('');
                setDescription('');
                setDeadline('');
                setPriority('Medium');
                setAssignedMember('');
                setStatus('Pending'); // Reset the status to default
            })
            .catch((error) => setErrorMessage(error.message));
    };

    return (
        <div className="flex">
            <Sidebar userRole="manager" />
            <div className="flex-1">
                <Navbar userRole="manager" />
                <div className="p-6">
                    <h1 className="text-2xl font-bold mb-6">Add Task</h1>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {errorMessage && <div className="text-red-500">{errorMessage}</div>}
                        {successMessage && <div className="text-green-500">{successMessage}</div>}
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full p-3 border rounded-lg"
                            placeholder="Task Title"
                            required
                            autoFocus
                        />
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="w-full p-3 border rounded-lg"
                            placeholder="Description"
                            rows="4"
                            required
                        />
                        <input
                            type="date"
                            value={deadline}
                            onChange={(e) => setDeadline(e.target.value)}
                            className="p-3 border rounded-lg"
                            required
                        />
                        <select
                            value={priority}
                            onChange={(e) => setPriority(e.target.value)}
                            className="w-full p-3 border rounded-lg"
                            required
                        >
                            <option value="Low">Low</option>
                            <option value="Medium">Medium</option>
                            <option value="High">High</option>
                        </select>
                        <select
                            value={assignedMember}
                            onChange={(e) => setAssignedMember(e.target.value)}
                            className="w-full p-3 border rounded-lg"
                            required
                        >
                            <option value="">Select Member</option>
                            {members.map((member) => (
                                <option key={member._id} value={member._id}>{member.name}</option>
                            ))}
                        </select>
                        <select
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                            className="w-full p-3 border rounded-lg"
                            required
                        >
                            {statusOptions.map((statusOption) => (
                                <option key={statusOption} value={statusOption}>{statusOption}</option>
                            ))}
                        </select>
                        <button
                            type="submit"
                            className="bg-blue-500 text-white py-2 px-4 rounded-lg"
                        >
                            Add Task
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddTask;
