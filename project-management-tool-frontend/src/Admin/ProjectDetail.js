import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetail = () => {
    const { id } = useParams(); // Get the project ID from the URL
    const [project, setProject] = useState(null); // State to store the project details
    const [error, setError] = useState(null); // State for error handling

    useEffect(() => {
        // Fetch the project details by ID when the component mounts
        fetch(`https://project-management-tool-backend-ifbp.onrender.com/projects/${id}`)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("Failed to fetch project details");
                }
            })
            .then((data) => {
                setProject(data);
                
            })
            .catch((error) => {
                setError(error.message);
            });
    }, [id]);

    if (error) {
        return <p className="text-red-500">Error: {error}</p>; // Display error message if there's an error
    }

    if (!project) {
        return <p>No project found.</p>; // Handle case where no project is found
    }

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">{project.name}</h1>
            <p className="mb-4">{project.description}</p>
            <p className="text-gray-600">Deadline: {new Date(project.deadline).toISOString().split('T')[0]}</p>
            <p className="text-gray-600">Manager: {project.manager}</p>

            {/* Render more project details if available */}
            {/* {project.details && <p className="text-gray-600">Details: {project.details}</p>}
            {project.team && <p className="text-gray-600">Team: {project.team.join(", ")}</p>} */}
        </div>
    );
};

export default ProjectDetail;
