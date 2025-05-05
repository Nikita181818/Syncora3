import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import LandingPage from './landingPage/LandingPage';

import Login from './pages/Login';
import AdminDashboard from './Admin/Dashboard';
import AddProject from './Admin/AddProject';
import AddUser from './Admin/AddUser';
import ProjectList from './Admin/ProjectList';
import UserList from './Admin/UserList';
import ManagerDashboard from './Manager/Dashboard';
import AddTask from './Manager/AddTask';
import ManagerTaskList from './Manager/TaskList';
import MemberDashboard from './Member/Dashboard';
import MemberTaskList from './Member/TaskList';
import ProjectDetail from './Admin/ProjectDetail';

const App = () => {
  return (
      <Router>
        <Routes>
          {/* Landing Route */}
          <Route path="/" element={<LandingPage />} />

          {/* Login Route */}
          <Route path="/login" element={<Login />} />

          {/* Admin Routes */}
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/add-project" element={<AddProject />} />
          <Route path="/admin/add-user" element={<AddUser />} />
          <Route path="/admin/project-list" element={<ProjectList />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/admin/user-list" element={<UserList />} />

          {/* Manager Routes */}
          <Route path="/manager/dashboard" element={<ManagerDashboard />} />
          <Route path="/manager/add-task" element={<AddTask />} />
          <Route path="/manager/task-list" element={<ManagerTaskList />} />

          {/* Member Routes */}
          <Route path="/member/dashboard" element={<MemberDashboard />} />
          <Route path="/member/task-list" element={<MemberTaskList />} />
        </Routes>
      </Router>
  );
};

export default App;