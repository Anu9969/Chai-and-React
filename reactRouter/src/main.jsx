import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider , Route, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact-us/Contact.jsx'
import User from './components/Users/User.jsx'

// const router = createBrowserRouter(
//   [
//     {
//       path: '/',
//       element: <Layout/>,
//       children:[
//         {
//           path: '',
//           element: <Home />
//         },
//         {
//           path: 'about',
//           element: <About />
//         },
//         {
//           path: 'contact',
//           element: <Contact />
//         }
//       ]
//     },
   

//   ]
// )

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user/:id" element={<User />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider  router={router}/>
  </StrictMode>,
)
