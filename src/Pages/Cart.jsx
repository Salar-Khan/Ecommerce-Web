import React from "react";
import Header from "../Components/Header";
import { useCart } from "../CartContext/CartContext";
import { FaRegTrashAlt } from "react-icons/fa";
import Footer from "../Components/Footer";
const Cart = () => {
  const { cart, removeItem } = useCart();
  const calculatePrice = () => {
    return cart.reduce((total, product) => total + product.price, 0).toFixed(2);
  };
  const handleRemove = (producId) => {
    removeItem(producId);
  };
  return (
    <>
      <Header />
      <section className="min-h-[70vh] w-[97%] mx-auto">
        <div className="flex flex-col items-center p-3">
          {cart.length === 0 ? (
            <p className="text-xl">Cart is empty</p>
          ) : (
            <div className="w-full">
              {cart.map((product) => (
                <div
                  key={product.id}
                  className="flex w-full justify-between items-center  m-1 p-3 bg-slate-200"
                >
                  <div className="flex items-center">
                    <img src={product.image} className="w-16 h-16" alt="" />
                    <div className="ml-5">
                      <h1 className="font-medium">{product.title}</h1>
                      <p className="text-gray-600">{product.price}</p>
                    </div>
                  </div>
                  <div
                    onClick={() => {
                      handleRemove(product.id);
                    }}
                    className="cursor-pointer "
                  >
                    <h1 className="bg-red-700 text-white p-2 rounded-full">
                      <FaRegTrashAlt size={20} />
                    </h1>
                  </div>
                </div>
              ))}
            </div>
          )}
          <div className="flex items-center justify-between w-full p-3 bg-slate-300">
            <h1>Total Price:</h1>

            <h1>${calculatePrice()}</h1>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Cart;
