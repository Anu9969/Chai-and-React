import React from 'react'

function InputBox({
    label,
    amount,
    onAmmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",




     className = ""}) {
 
    return (
    <div className={` bg-white p-3 rounded-lg text-sm  flex ${className}`
        
    }>
        <div 
          className='w-1/2'
        >
            <label className=' text-black/40 mb-3 inline-block'> {label}</label>
            <input 
              type="number" 
              className='outline-none w-full bg-transparent py-2'
              placeholder='Enter amount'
              value={amount}
              onChange={(e) => onAmmountChange &&onAmmountChange(Number(e.target.value))}//number m wrap kiya kyuki string se number me convert karna hai
            />
        </div>
        <div 
          className='w-1/2 flex flex-wrap justify-end text-right'
        >
            <p className=''>
                Currency Type
            </p>
            <select 
              className='text-black/40 bg-transparent outline-none w-full' 
              value={selectCurrency}
              onChange={ (e) => onCurrencyChange && onCurrencyChange(e.target.value)}
            >
                <option value="usd"> usd</option>
            </select>
        </div>

    </div>
  )
}

export default InputBox