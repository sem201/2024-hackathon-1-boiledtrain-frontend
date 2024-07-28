// router.jsx
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import MainHome1 from './pages/MainHome1';
import NotFound from './pages/NotFound';
import Course from './pages/Course';
import Train from "./pages/train"
import Kakaologin from './components/Common/Kakaologin';
import CourseMake from './pages/CourseMake';

const router = createBrowserRouter([
  {
    path: "/", 
    element: <App />,
    children: [
      { path: "/main", element: <MainHome1 /> },
      { path: "/course" , element: <Course/>},
      { path:"/coursemake",element:<CourseMake/>},
      { path:"/train",element:<Train/>},
      { path:"/kakao",element:<Kakaologin/>},
    ],
    errorElement: <NotFound />,
  },
]);

export default router;