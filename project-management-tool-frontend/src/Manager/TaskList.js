import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import TaskCard from '../components/TaskCard';

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

    const handleDelete = (taskId) => {
        fetch(`https://project-management-tool-backend-ifbp.onrender.com/tasks/deleteTask/${taskId}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}` // If JWT is required
            }
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to delete task');
                }
                return response.json();
            })
            .then(() => {
                // Remove the deleted task from the state
                setTasks(tasks.filter(task => task._id !== taskId));
            })
            .catch((error) => {
                console.error('Error deleting task:', error);
                setErrorMessage(error.message);
            });
    };

    return (
        <div className="flex">
            <Sidebar userRole="manager" />
            <div className="flex-1">
                <Navbar userRole="manager" />
                <div className="p-6">
                    <h1 className="text-2xl font-bold mb-6">Task List</h1>
                    {errorMessage && <div className="text-red-500">{errorMessage}</div>}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {tasks.length === 0 ? (
                            <p>No tasks available.</p>
                        ) : (
                            tasks.map(task => (
                                <TaskCard
                                    key={task._id}
                                    task={task}
                                    onDelete={() => handleDelete(task._id)}
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
