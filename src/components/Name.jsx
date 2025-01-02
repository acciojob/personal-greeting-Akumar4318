import React, { useState } from "react"

const Name = () => {

    const[name,setName]=useState('')
    const[hello,setHello]=useState('')
  return (
    <div>
        <h1>Enter your Name</h1>
        <input type="text" onChange={(e)=>{
            setName(e.target.value)
        }} />
        <p>{
            name.length==0 ? (''):(`Hello ${name}!`)
            }</p>

    </div>
  )
}

export default Name