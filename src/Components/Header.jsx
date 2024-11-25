import React from 'react'
import { useNavigate } from 'react-router-dom'
import CartButton from './Button'
const Header = () => {

  const navigate = useNavigate()
  return (
    <>
    <header className='p-3 ' >
        <div className='flex justify-between items-center'>
            <div onClick={()=>{navigate('/')}} ><h1 className='text-4xl font-extrabold cursor-pointer'>My Shop</h1></div>
            <div>
              <CartButton/>
            </div>
        </div>
    </header>
    </>
  )
}

export default React.memo(Header)