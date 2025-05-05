import React from 'react';

const UserCard = ({ user, onDelete }) => {
    return (
        <div className="p-4 bg-white shadow-md rounded-lg flex items-center justify-between">
            <div>
                <h3 className="text-xl font-semibold">{user.name}</h3>
                <p className="text-gray-700">{user.email}</p>
                <p className="text-gray-500">{user.role}</p>
            </div>
            <button
                onClick={onDelete}
                className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg"
            >
                Delete
            </button>
        </div>
    );
};

export default UserCard;
