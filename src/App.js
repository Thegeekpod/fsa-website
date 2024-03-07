import { useState } from 'react'
// import reactLogo from './/src/assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home2 from './pages/Home2';
import Layout from './component/Layout';
import About from './pages/About';
import TermsCondition from './pages/TermsCondition';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RefundPolicy from './pages/RefundPolicy';
import Faq from './pages/Faq';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import CareerResearchPapers from './pages/CareerResearchPapers';
import CareerSuccessStories from './pages/CareerSuccessStories';
import CareerReserchDetails from './pages/CareerReserchDetails';
import HighSchoolCourse from './pages/HighSchoolCourse';
import IntermediateCourse from './pages/IntermediateCourse';
import GraduationCourse from './pages/GraduationCourse';
import PostGrduationCourse from './pages/PostGraduationCourse';
import PhdCourse from './pages/PhdCourse';
import CouseDetails from './pages/CouseDetails';
import CareerAwarenessSessions from './pages/CareerAwarenessSessions';
import CareerAwarenessDetails from './pages/CareerAwarenessDetails';
import Vfsl from './pages/Vfsl';

function App() {
  const [count, setCount] = useState(0)
  const router = createBrowserRouter([

    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home2 />,
        },
        {
          path: '/terms-condition',
          element: <TermsCondition />
        },
        {
          path: '/privacy-policy',
          element: <PrivacyPolicy />
        },
        {
          path: '/refund-policy',
          element: <RefundPolicy />
        },
        {
          path: '/faq',
          element: <Faq />
        },
        {
          path: '/sign-in',
          element: < SignIn />
        },
        {
          path: '/sign-up',
          element: < SignUp />
        },
        {
          path: '/career-research-papers',
          element: < CareerResearchPapers />
        },
        {
          path: '/career-success-stories',
          element: < CareerSuccessStories />
        },
        {
          path: '/career-reserch-details',
          element: < CareerReserchDetails />
        },
        {
          path: '/high-school-course',
          element: < HighSchoolCourse />
        },
        {
          path: '/intermediate-course',
          element: < IntermediateCourse />
        },
        {
          path: '/graduation-course',
          element: < GraduationCourse />
        },
        {
          path: '/post-graduation-course',
          element: < PostGrduationCourse />
        },
        {
          path: '/phd-course',
          element: < PhdCourse />
        },
        {
          path: '/course-details',
          element: < CouseDetails />
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/career-awareness-sessions',
          element: <CareerAwarenessSessions />
        },
        {
          path: '/career-awareness-details',
          element: <CareerAwarenessDetails />
        },
        {
          path: '/vfsl',
          element: <Vfsl />
        },

      ]
    },


  ]);
  return (
    <>
      {/* <Layout> */}
      <RouterProvider router={router} />

      {/* </Layout> */}

    </>



  )
}

export default App
