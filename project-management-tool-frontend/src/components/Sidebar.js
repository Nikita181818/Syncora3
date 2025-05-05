import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = ({ userRole }) => {
    const location = useLocation(); // Get the current route
    const [activeLink, setActiveLink] = useState(location.pathname); // Set the active link to the current route
    const handleLinkClick = (path) => {
        setActiveLink(path); // Update the active link when clicked
    };
    const linkClassNames = (path) =>
        `block px-4 py-2 rounded-lg transition-colors duration-300 hover:bg-gray-700 
         ${activeLink === path ? 'bg-gray-700' : ''}`; // Apply the active class if the path matches

    return (
        <div className="sticky top-0 left-0 w-64 h-screen bg-gray-900 text-white p-6 shadow-lg">
            <div className="flex flex-col items-center mb-8">
                <h1 className="text-3xl font-bold mb-2 text-white">Dashboard</h1>
                <span className="text-sm font-light text-gray-400">Welcome, {userRole}</span>
            </div>
            <ul className="space-y-4">
                {userRole === 'admin' && (
                    <>
                        <li>
                            <Link
                                to="/admin/dashboard"
                                className={linkClassNames("/admin/dashboard")}
                                // onClick={() => handleLinkClick("/admin/dashboard")}
                            >
                                Admin Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/admin/add-project"
                                className={linkClassNames("/admin/add-project")}
                                // onClick={() => handleLinkClick("/admin/add-project")}
                            >
                                Add Project
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/admin/add-user"
                                className={linkClassNames("/admin/add-user")}
                                // onClick={() => handleLinkClick("/admin/add-user")}
                            >
                                Add User
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/admin/project-list"
                                className={linkClassNames("/admin/project-list")}
                                // onClick={() => handleLinkClick("/admin/project-list")}
                            >
                                Project List
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/admin/user-list"
                                className={linkClassNames("/admin/user-list")}
                                // onClick={() => handleLinkClick("/admin/user-list")}
                            >
                                User List
                            </Link>
                        </li>
                    </>
                )}
                {userRole === 'manager' && (
                    <>
                        <li>
                            <Link
                                to="/manager/dashboard"
                                className={linkClassNames("/manager/dashboard")}
                                // onClick={() => handleLinkClick("/manager/dashboard")}
                            >
                                Manager Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/manager/add-task"
                                className={linkClassNames("/manager/add-task")}
                                // onClick={() => handleLinkClick("/manager/add-task")}
                            >
                                Add Task
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/manager/task-list"
                                className={linkClassNames("/manager/task-list")}
                                // onClick={() => handleLinkClick("/manager/task-list")}
                            >
                                Task List
                            </Link>
                        </li>
                    </>
                )}
                {userRole === 'member' && (
                    <>
                        <li>
                            <Link
                                to="/member/dashboard"
                                className={linkClassNames("/member/dashboard")}
                                // onClick={() => handleLinkClick("/member/dashboard")}
                            >
                                Member Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/member/task-list"
                                className={linkClassNames("/member/task-list")}
                                // onClick={() => handleLinkClick("/member/task-list")}
                            >
                                Task List
                            </Link>
                        </li>
                    </>
                )}
            </ul>
        </div>
    );
};

export default Sidebar;
