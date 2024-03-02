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

function App() {
  const [count, setCount] = useState(0)
  const router = createBrowserRouter([
    
        {
          path:'/',
          element:<Layout/>,
          children:[
            {
              path:'/',
              element:<Home2/>,
            },
            {
              path:'/about',
              element:<About/>,
            }
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
