import { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);

  const addValue = () => {
    console.log("clicked", counter);
    if(counter <20){
      setCounter(counter + 1);
    }
    
  };

  const removeValue = () => {
    console.log("clicked", counter);
    if(counter >=1)
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>My Buddy, let's make it happen!</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue} className='bg-yellow-100 text-black'>Add value</button>
      <br />
      <button onClick={removeValue}>Remove value</button>
    </>
  );
}

export default App;
