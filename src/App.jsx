
import Cart from "./Pages/Cart"

import Home from "./Pages/Home"
import {Routes ,Route } from "react-router-dom"
import ProductDetails from "./Pages/ProductDetails"

function App() {


  return (
    <>
  
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/:id" element={<ProductDetails/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>

    </>
  )
}

export default App
