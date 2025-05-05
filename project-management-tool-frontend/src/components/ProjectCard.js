import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';  // Import toast functions
import 'react-toastify/dist/ReactToastify.css';  // Import toastify styles

const ProjectCard = ({ project, onDelete }) => {
    const navigate = useNavigate();

    // Convert deadline to a Date object if it's a string
    const deadlineDate = new Date(project.deadline);

    // Format deadline as YYYY-MM-DD
    const formattedDeadline = deadlineDate.toISOString().split('T')[0];

    // Handle Delete Button Click
    const handleDelete = () => {
        fetch(`https://project-management-tool-backend-ifbp.onrender.com/projects/deleteProject/${project._id}`, {
            method: 'DELETE',
        })
            .then(response => {
                if (response.ok) {
                    // Call onDelete callback to refresh the project list in parent component
                    onDelete(project._id);
                    toast.success('Project deleted successfully!', {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                } else {
                    return response.json().then(errorData => {
                        throw new Error(errorData.error || 'Failed to delete project');
                    });
                }
            })
            .catch(error => {
                console.error('Error deleting project:', error);
                toast.error(`Error deleting project: ${error.message}`, {
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

    // Truncate title and description if they exceed the max length
    const truncateText = (text, maxLength) => {
        if (text.length > maxLength) {
            return text.substring(0, maxLength) + '...';
        }
        return text;
    };

    // Handle redirection to project details page
    const handleViewDetails = () => {
        navigate(`/projects/${project._id}`);
    };

    return (
        <div className="bg-white p-4 border rounded-lg shadow">

            <h3 className="text-xl font-bold"> {truncateText(project.name, 25)} </h3>
            <p>{truncateText(project.description, 45)}</p>
            <p className="text-gray-600">Deadline: {formattedDeadline}</p>
            
            <div className="mt-4 flex space-x-4">
                {/* Detail Button */}
                {/* <button
                    onClick={handleViewDetails}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
                >
                    View Details
                </button> */}

                {/* Delete Button */}
                <button
                    onClick={handleDelete}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors duration-300"
                >
                    Delete Project
                </button>
            </div>
        </div>
    );
};

export default ProjectCard;
