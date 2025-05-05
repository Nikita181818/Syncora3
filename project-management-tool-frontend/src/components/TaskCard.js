import React from 'react';

const TaskCard = ({ task, onDelete }) => {
    return (
        <div className="bg-white p-4 border rounded-lg shadow">
            <h3 className="text-xl font-bold">{task.title}</h3>
            <p>{task.description}</p>
            <p className="text-gray-600">Deadline: {task.deadline}</p>
            <p className="text-gray-600">Priority: {task.priority}</p>
            <p className="text-gray-600">Status: {task.status}</p>
            <button
                onClick={onDelete}
                className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
            >
                Delete
            </button>
        </div>
    );
};

export default TaskCard;
