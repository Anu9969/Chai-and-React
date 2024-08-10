import './App.css'
import Login from './Components/Login'
import Profile from './Components/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {
  

  return (
    <UserContextProvider>
     <h1>You can do it ! U are capable ,dont underestimate urself u r batman</h1>
   
      <Login/>
      <Profile/>

    </UserContextProvider>
  )
}

export default App
