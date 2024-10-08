import React ,{useId} from 'react'

function Select({
    options,
    label,
    className,
    ...props
},ref) {
    const id = useId()
  return (
    <div className='w-full'>
        {label && <label htmlFor={id} className='block text-sm font-medium text-gray-700'>{label}</label>}
        <select
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-300 ${className}`}
        {...props}
        id = {id}
        ref = {ref} >
            {options?.map((option)=>(
                <option key = {option} value ={option} >
                    {option}
                </option>
            ))

          }  </select>
    </div>
  )
  
}

export default React.forwardRef(Select)
//input.jsx jaise bhi forward ref kr skte but here we have used an alterative way to forward ref