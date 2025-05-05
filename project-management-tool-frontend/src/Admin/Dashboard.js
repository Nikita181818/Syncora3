import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Dashboard = () => {
    const [date, setDate] = useState(new Date());
    const [projectDeadlines, setProjectDeadlines] = useState([]); // Store deadlines
    const [totalProjects, setTotalProjects] = useState(0); // Store total projects count
    const [totalManagers, setTotalManagers] = useState(0);
    const [totalMembers, setTotalMembers] = useState(0);
    const navigate = useNavigate();

    // Fetch total users and projects count
    useEffect(() => {
        // Fetch total projects count
        fetch('https://project-management-tool-backend-ifbp.onrender.com/projects/count')
            .then(response => response.json())
            .then(data => {
                setTotalProjects(data.totalProjects); // Assuming the response contains a totalProjects field
            })
            .catch(error => console.error('Error fetching projects count:', error));


        // Fetch total managers
        fetch('https://project-management-tool-backend-ifbp.onrender.com/auth/manager-count', {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        })
            .then(response => response.json())
            .then(data => setTotalManagers(data.count))
            .catch(error => console.error('Error fetching total managers:', error));

        // Fetch total members
        fetch('https://project-management-tool-backend-ifbp.onrender.com/auth/member-count', {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        })
            .then(response => response.json())
            .then(data => setTotalMembers(data.count))
            .catch(error => console.error('Error fetching total members:', error));

        // Fetch project deadlines
        fetch('https://project-management-tool-backend-ifbp.onrender.com/projects/getAllProjects')
            .then(response => response.json())
            .then(data => {
                const deadlines = data.map(project => new Date(project.deadline));
                setProjectDeadlines(deadlines);
            })
            .catch(error => console.error('Error fetching projects:', error));
    }, []);

    // Handle date selection and redirect to Add Project page
    const handleDateChange = (selectedDate) => {
        setDate(selectedDate);
        navigate(`/admin/add-project`, {
            state: { deadline: selectedDate }, // Pass the selected date as state
        });
    };

    // Custom tile content for Calendar - Highlight deadline dates in red
    const tileClassName = ({ date, view }) => {
        if (view === 'month') {
            const isDeadline = projectDeadlines.some(
                deadline => deadline.toDateString() === date.toDateString()
            );
            return isDeadline ? 'bg-gray-500 text-white' : '';
        }
        return '';
    };

    // Navigate to Project List page
    const navigateProjectList = () => {
        navigate('/admin/project-list');
    };

    // Navigate to User List page
    const navigateUserList = () => {
        navigate('/admin/user-list');
    };

    return (
        <div className="flex bg-gray-100 min-h-screen">
            <Sidebar userRole="admin" />
            <div className="flex-1">
                <Navbar userRole="admin" />
                <div className="p-6">
                    <h1 className="text-4xl font-bold text-gray-800 mb-8">Admin Dashboard</h1>

                    {/* Dashboard Content */}
                    <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* Cards Column */}
                        <div className="space-y-6">
                            <div onClick={navigateProjectList} className="cursor-pointer p-6 bg-white shadow-lg rounded-lg flex flex-col items-center justify-center transition-transform transform hover:scale-105">
                                <h2 className="text-xl font-semibold text-gray-700 mb-4">Total Projects</h2>
                                <p className="text-5xl font-bold text-green-500">{totalProjects}</p>
                            </div>

                            <div onClick={navigateUserList} className="cursor-pointer p-6 bg-white shadow-lg rounded-lg flex flex-col items-center justify-center transition-transform transform hover:scale-105">
                                <h2 className="text-xl font-semibold text-gray-700 mb-4">Total Manager</h2>
                                <p className="text-5xl font-bold text-blue-500">{totalManagers}</p>
                            </div>

                            <div onClick={navigateUserList} className=" cursor-pointer p-6 bg-white shadow-lg rounded-lg flex flex-col items-center justify-center transition-transform transform hover:scale-105">
                                <h2 className="text-xl font-semibold text-gray-700 mb-4">Total Member</h2>
                                <p className="text-5xl font-bold text-blue-500">{totalMembers}</p>
                            </div>
                        </div>

                        {/* Calendar Column */}
                        <div className="p-6 bg-white shadow-lg rounded-lg">
                            <h3 className="text-2xl font-semibold text-gray-700 mb-4">Project Calendar</h3>
                            <Calendar
                                onChange={handleDateChange}
                                value={date}
                                className="w-full m-auto border border-gray-500 rounded-lg"
                                tileClassName={tileClassName}
                            />
                            <p className="text-gray-600 mt-4 text-center">
                                Date: <span className="font-bold">{date.toDateString()}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
