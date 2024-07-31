import { useState } from 'react'
import './App.css'

function App() {
  const [color, setcolor] = useState('olive')

  return (
    <div>
      <>
        <div className='w-full h-screen duration-1000 ' style={{ backgroundColor: color }}>
          <div className='fixed flex flex-wrap justify-center bottom-14 px-3 inset-x-0  '>
            <div className='flex flex-wrap justify-center align-middle gap-3 shadow-xl bg-slate-400 px-4 py-2 rounded-full'>

            <button 
      className='w-24 h-12 text-white rounded-full border-solid flex items-center justify-center hover:border-white' 
      style={{ backgroundColor: 'black' }} 
      onClick={() => setcolor("black")}
    >
      black
    </button>
    <button 
      className='w-24 h-12 text-white rounded-full flex items-center justify-center' 
      style={{ backgroundColor: 'red' }} 
      onClick={() => setcolor("red")}
    >
      red
    </button>
    <button 
      className='w-24 h-12 text-white rounded-full flex items-center justify-center' 
      style={{ backgroundColor: 'blue' }} 
      onClick={() => setcolor("blue")}
    >
      blue
    </button>
    <button 
      className='w-24 h-12 text-black rounded-full flex items-center justify-center' 
      style={{ backgroundColor: 'yellow' }} 
      onClick={() => setcolor("yellow")}
    >
      yellow
    </button>
    <button 
      className='w-24 h-12 text-white rounded-full flex items-center justify-center' 
      style={{ backgroundColor: 'pink' }} 
      onClick={() => setcolor("pink")}
    >
      pink
    </button>
    <button 
      className='w-24 h-12 text-white rounded-full flex items-center justify-center' 
      style={{ backgroundColor: 'purple' }} 
      onClick={() => setcolor("purple")}
    >
      purple
    </button>
    <button 
      className='w-24 h-12 text-black rounded-full flex items-center justify-center' 
      style={{ backgroundColor: 'orange' }} 
      onClick={() => setcolor("orange")}
    >
      orange
    </button>
    <button 
      className='w-24 h-12 text-black rounded-full border flex items-center justify-center' 
      style={{ backgroundColor: 'white' }} 
      onClick={() => setcolor("white")}
    >
      white
    </button>
    <button 
      className='w-24 h-12 text-white rounded-full flex items-center justify-center' 
      style={{ backgroundColor: 'gray' }} 
      onClick={() => setcolor("gray")}
    >
      grey
    </button>
            </div>

          </div>
        </div>
      </>
    </div>
  )
}

export default App
