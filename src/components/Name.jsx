import React, { useState } from "react"

const Name = () => {

    const[name,setName]=useState('')
  return (
    <div>
        <h1>Enter your Name</h1>
        <input type="text" onChange={(e)=>{
            setName(e.target.value)
        }} />
        <p>{name}</p>

    </div>
  )
}

export default Name