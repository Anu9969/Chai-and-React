import React, { useEffect, useState } from 'react'

function Github() {
    const [data ,setData] =useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/Anu9969')
        .then(res => res.json())
        .then(data => {console.log(data);
            setData(data)
        })      
    })
  return (
    <div>Github:{data.followers}</div>
  )
}

export default Github