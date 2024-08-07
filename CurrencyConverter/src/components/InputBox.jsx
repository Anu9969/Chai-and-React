import React from 'react'

function InputBox({label,

    amount,
    onAmmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",




     className = ""}) {
 
    return (
    <div className=''>
        <div 
          className=''
        >
            <label className=''> {label}</label>
            <input 
              type="number" 
              className=''
              placeholder='Enter amount'
              value={amount}
              onChange={(e) => onAmmountChange &&onAmmountChange(Number(e.target.value))}//number m wrap kiya kyuki string se number me convert karna hai
            />
        </div>
        <div 
          className=''
        >
            <p className=''>
                Currency Type
            </p>
            <select 
              className=''
            >
                <option value="usd"> usd</option>
            </select>
        </div>

    </div>
  )
}

export default InputBox