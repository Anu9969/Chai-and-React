// import { useState , useCallback ,useEffect} from 'react'

// import './App.css'

// function App() {
//   const [length, setLength] = useState(20)
//   const [numberAllowed, setNumberAllowed] = useState(false)
//   const [charAllowed, setCharAllowed] = useState(false)
//   const [password ,setPassword] = useState('')

//   const passwordGenerator = useCallback(() =>{
//     let pass = ''
//     let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
//     let num = '0123456789'
//     let symbols = '!@#$%^&*()_+'
//     if (numberAllowed){
//       str +=num
//     }
//     if (charAllowed){
//       str += symbols
//     }

//     for (let i = 1; i<= length; i++){
//       char = Math.floor(Math.random()*str.length +1)

//       pass += str.charAt(char)
//     }

//     setPassword(pass)
     
//   } ,[length ,numberAllowed ,charAllowed, setPassword])

//   useEffect(() => {
//     passwordGenerator()
//   }, [length ,numberAllowed , charAllowed ,passwordGenerator])
  
  

//   return (
//     <>
//    <div className='w-full  max-w-md mx-auto my-10 shadow-md p-7 rounded-lg text-black bg-slate-300'>
//     Password Generator
//     <div className='flex w-full mx-2 my-1 overflow-hidden bg-slate-100 rounded-md'>
//       <input 
//       type="text" 
//        value={password}
//         className='w-full px-3 py-2 outline-none  bg-white rounded-lg'
//          placeholder='Password'
//          readOnly
//          />
//       <button 
//       className='outline-none px-3 py-1 shrink-0 bg-blue-500 '>Copy</button>
//     </div>
//     <div className='fixed flex text-sm gap-x-3 '>
//       <div className=' flex text-sm gap-x-3'>
//       <input 
//       type="range"
//       min={8}
//       max={120}
//       value={length}
//         className='cursor-pointer'
//         onChange={(e) => setLength(e.target.value)}
       
//         />
//         <label>Length:{length}</label>
//       </div>
//       <div className='flex gap-x-3'>
//         <input
//          type="checkbox"
//          defaultChecked ={numberAllowed}
//          onChange={()=>{
//             setNumberAllowed((prev) => !prev);
//          }}
//          />
//          <label>Numbers</label>
//       </div>
//       <div className='flex gap-x-3 '>
//         <input 
//         type="checkbox"
//         defaultChecked ={ charAllowed}
//         onClick={()=> {
//            setCharAllowed((prev) =>!prev)}} />
//            <label>Characters</label>
//       </div>
//     </div>
//    </div>
//     </>
//   )
// }

// export default App



////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import { useState, useCallback, useEffect ,useRef } from 'react';
import './App.css';

function App() {
  const [length, setLength] = useState(20);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');
  const [clicked, setClicked] = useState(false); // State for button click effect


  // useRef Hook
  const passwordRef = useRef(null);


  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const num = '0123456789';
    const symbols = '!@#$%^&*()_+';

    if (numberAllowed) {
      str += num;
    }
    if (charAllowed) {
      str += symbols;
    }

    for (let i = 0; i < length; i++) { // Line 25
      const charIndex = Math.floor(Math.random() * str.length); // Line 25
      pass += str.charAt(charIndex); // Line 27
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  const copyToClipboard = () => { 
    navigator.clipboard.writeText(password);
    setClicked(true);
    alert('Password copied to clipboard');
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className=" w-full h-auto max-w-md mx-auto my-12 shadow-md p-7 rounded-lg text-white object-center bg-slate-800">
        Password Generator
        <div className="flex w-full mx-1 my-2 overflow-hidden text-black bg-slate-100 rounded-md">
          <input
            type="text"
            value={password}
            className="w-full px-3 py-2 outline-none bg-white rounded-lg"
            placeholder="Password"
            readOnly
            
          />
          <button
            className='outline-none bg-blue-500 px-3 py-1 shrink-0'
            
            onClick={copyToClipboard}
          >
            Copy
          </button>

        </div>


        <div className="fixed flex text-sm gap-x-3 py-1">
          <div className="flex text-sm gap-x-3">
            <input
              type="range"
              min={8}
              max={30}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setLength(Number(e.target.value))}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex gap-x-3">
            <input
              type="checkbox"
              checked={numberAllowed}
              onChange={() => setNumberAllowed((prev) => !prev)}
            />
            <label>Numbers</label>
          </div>
          <div className="flex gap-x-3">
            <input
              type="checkbox"
              checked={charAllowed}
              onChange={() => setCharAllowed((prev) => !prev)}
            />
            <label>Characters</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
