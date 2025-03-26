import React from 'react'
import { useNavigate } from 'react-router-dom'

function Navbar() {

    const navigate = useNavigate()
  return (
    <div>
        <button
        onClick={()=>{
            navigate('/')
        }}
        >Home</button>
        <button
        
        onClick={()=>{
            navigate('/product')
        }}
        >Product</button>
        
    </div>
  )
}

export default Navbar
