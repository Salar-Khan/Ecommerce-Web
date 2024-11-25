import React from 'react'
import { useCart } from '../CartContext/CartContext'
import { useNavigate } from 'react-router-dom'
import { TiShoppingCart } from "react-icons/ti";

const CardButton = () => {
const {getTotalItems} = useCart()
const total = getTotalItems()
const navigate = useNavigate()
  return (
    <button onClick={()=>{navigate('/cart')}} className='p-2  flex items-center'> 
<TiShoppingCart size={40}/>
<span className={`bg-red-600 rounded-full text-sm text-white p-2 ${total===0?`invisible`:`visible`}`}>{total}</span>
    </button>
  )
}

export default  CardButton


