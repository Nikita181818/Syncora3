import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import MemberTaskCard from '../components/MemberTaskCard';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    // Fetch tasks when the component mounts
    useEffect(() => {
        fetch('https://project-management-tool-backend-ifbp.onrender.com/tasks/getAllTasks', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}` // If JWT is required
            }
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to fetch tasks');
                }
                return response.json();
            })
            .then((data) => {
                setTasks(data); // Set the tasks in the state
            })
            .catch((error) => {
                console.error('Error fetching tasks:', error);
                setErrorMessage(error.message);
            });
    }, []); // Empty array ensures the effect runs only once after the initial render

    return (
        <div className="flex">
            <Sidebar userRole="member" />
            <div className="flex-1">
                <Navbar userRole="member" />
                <div className="p-6">
                    <h1 className="text-2xl font-bold mb-6">Task List</h1>
                    {errorMessage && <div className="text-red-500">{errorMessage}</div>}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {tasks.length === 0 ? (
                            <p>No tasks available.</p>
                        ) : (
                            tasks.map(task => (
                                <MemberTaskCard
                                    key={task._id}
                                    task={task}
                                />
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TaskList;
