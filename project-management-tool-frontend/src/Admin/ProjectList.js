import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import ProjectCard from '../components/ProjectCard';
import { ToastContainer } from 'react-toastify';

const ProjectList = () => {
    const url = 'https://project-management-tool-backend-ifbp.onrender.com/projects/getAllProjects';
    const [projects, setProjects] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    // Fetch projects when the component mounts
    useEffect(() => {
        fetch(url)
            .then((response) => {
                if (response.ok) {
                    return response.json(); // Parse the JSON if the response is successful
                } else {
                    throw new Error('Failed to fetch projects');
                }
            })
            .then((data) => {
                setProjects(data); // Set the projects state with the fetched data
            })
            .catch((error) => {
                setErrorMessage(error.message); // Handle any errors
            });
    }, []);

    // Handle project deletion
    const handleDeleteProject = (projectId) => {
        setProjects((prevProjects) => prevProjects.filter((project) => project._id !== projectId));
    };

    return (
        <div className="flex">
            <Sidebar userRole="admin" />
            <div className="flex-1">
                <Navbar userRole="admin" />
                <div className="p-6">
                    <h1 className="text-2xl font-bold mb-6">Project List</h1>
                    {/* Toast Container to display notifications */}
                    <ToastContainer />
                    {errorMessage && <div className="text-red-500 mb-4">{errorMessage}</div>}
                    {projects.length === 0 ? (
                        <div className="text-gray-800 text-2xl font-semibold text-center mt-8 mb-4">
                            No projects available
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {projects.map(project => (
                                <ProjectCard key={project._id} project={project} onDelete={handleDeleteProject} />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectList;
