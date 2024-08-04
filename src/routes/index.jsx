import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import App from '../App'
import HomePage from '../pages/Homepage/HomePage'
import Project from '../pages/Projects/Projects'
// import HomePage from '../pages/OurStoryPage'

const router = createBrowserRouter([{
    path: '/',
    element: <App />, // App as the layout component
    children: [
        { path: '/', element: <HomePage /> },
        { path: 'projects', element: <Project /> },
        { path: 'our-story', element: <Project /> },
    ],
},])

export default router