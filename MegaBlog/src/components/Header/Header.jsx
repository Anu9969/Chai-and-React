import React from 'react'
import {Container , Logo , LogoutBtn} from '../index'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux' //tabhi to pta chalega ki user logged in h ki nhi
import { useNavigate } from 'react-router-dom'



function Header() {
  //sabse pehle state m se nikaalna padega ki authenticated h ya nhi
  const authStatus = useSelector((state) => state.auth.status) //authslice waale status ko access kr rhe h
  
  const navigate = useNavigate()  //is tarah ki nav bar jb bnti h to ek array bna ke usme loop kiya jaata h
  const navItems =[
    {
      name: "Home",
      slug: "/",
      active: true
    },
    {
      name:"Login",
      slug: "/login",
      active: !authStatus
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active:authStatus,

    },
    {
      name: "Create Post",
      slug: "/create-post",
      active:authStatus
    }
  ]
  
  return (
    <div>Header</div>
  )
}

export default Header