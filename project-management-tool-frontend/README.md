# Syncora

# Overview

Syncora is a powerful application designed to streamline project workflows, enhance team collaboration, and track progress efficiently. Built with the MERN stack (MongoDB, Express.js, React, and Node.js), this tool provides a seamless experience for managing projects, tasks, and team communications.

### Why/Problem?

In a dynamic work environment, effective task management is crucial for team success. Traditional methods of task tracking through spreadsheets or manual systems can be cumbersome and prone to errors. Syncora aims to address these challenges by providing a centralized platform for task management, enabling seamless collaboration and improved workflow efficiency.

### How Syncora is better than Traditional methods of project management?

# 1. Enhanced Collaboration

Traditional Methods: Team collaboration can be fragmented, with communication often happening through emails or meetings.

Syncora: Facilitates real-time collaboration with features like task assignments, comments, and file sharing, making it easier for team members to work together.

# 2. Improved Task Tracking

Traditional Methods: Tracking task progress manually can be error-prone and time-consuming.

Syncora: Automates task tracking with visual dashboards, progress bars, and notifications, allowing for better monitoring and management of tasks.

# 3. Increased Efficiency

Traditional Methods: Manual updates and tracking can lead to delays and inefficiencies.

Syncora: Automates many tasks such as reminders, updates, and reporting, saving time and reducing the risk of human error.

### Background:

With the rise of remote work and dispersed teams, there is a growing need for tools that facilitate effective communication and task coordination. Syncora addresses this need by leveraging modern web technologies to create an intuitive and responsive task management solution. The MERN stack ensures scalability, Headless UI, and Animations, Tailwind CSS enhances user experience and performance.

### Technologies Used:

- Frontend:
    - React 
    - React Router
    - Tailwind CSS
    - Animations

- Backend:
    - Node.js-A JavaScript runtime built on Chrome's V8 engine. Node.js enables the execution of JavaScript on the server side and is used to build the backend of the application.
    - Express.js - A fast, unopinionated, minimalist web framework for Node.js.
    - MongoDB - A NoSQL database used for storing data in a flexible, JSON-like format.
    - Mongoose - A MongoDB object modeling tool designed to work in an asynchronous environment.

- Database:
    - MongoDB for efficient and scalable data storage.

- Authentication & Authorization
- Role-Based Rendering
- JWT (JSON Web Tokens) - A compact, URL-safe means of representing claims to be transferred.

- Development Tools
- NPM (Node Package Manager): A package manager for JavaScript that is used to manage project dependencies and scripts.

- Deployment and Hosting
- Vercel-A cloud platform for static sites and serverless functions, enabling fast and seamless deployment with built-in CI/CD workflows.

- Render-A cloud platform for building and running applications and services, offering automated deployments, scaling, and monitoring for both static and dynamic workloads.

- MongoDB Atlas-MongoDB Atlas is a cloud-based, managed database service that simplifies the deployment, management, and scaling of MongoDB  databases

-Testing
- Postman-A powerful API development tool used for testing, debugging, and documenting APIs, with a user-friendly interface for sending requests and analyzing responses.

### Admin Features:

# 1. Permissions:
    Create, update, and delete projects.
    Assign projects to managers.
    View all projects .
    Manage user roles and permissions.

# 2.Capabilities:
    The Admin has full control over the application and can configure settings, manage users, and oversee all projects and tasks. This includes assigning projects to managers, creating new projects, and updating existing ones.

### Manager Features:

# 1. Permissions:
      Create and update tasks within assigned projects
      Assign tasks to team members
      View tasks assigned to team members
      Update project status and task progress

# 2. Capabilities:
     Managers can oversee the progress of projects, assign tasks to team members, and ensure that the project milestones are met.

### Team Member Features:

# 1. Permissions:
     View tasks assigned to them
     Update the status of their tasks

# 2. Capabilities:
     Team members are responsible for completing assigned tasks and updating their status. They can view their tasks and provide progress updates.

### Access Control

    Access to various features of the application is restricted based on the user’s role. The system ensures that users can only access and perform actions permitted by their role. Unauthorized access attempts are logged for security purposes.

### Setup Instructions

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

### npm start

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### npm test

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### npm run build

Builds the app for production to the build folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### npm run eject

*Note: this is a one-way operation. Once you eject, you can't go back!*

If you aren't satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except eject will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use eject. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### npm run build fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)