import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider , Route, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'

import {Layout,Home,About,Contact,User,Github} from './components'

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
      <Route path='github' element = {<Github/>} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider  router={router}/>
  </StrictMode>,
)
