
import './App.css'

function App() {
  // console.log(process.env.REACT_APP__APPWRITE_URL); //har ek library ya framework ke liye alag tarika hota h to acces env 
  //env file bsek baar load hoti hai
  console.log(import.meta.env.VITE_APPWRITE_URL);
  return (
    <>
      <h1>MegaBlog</h1>

    </>
  )
}

export default App
