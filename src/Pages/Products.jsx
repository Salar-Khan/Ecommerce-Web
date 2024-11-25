import React, { useEffect, useState } from "react";
import { useCart } from "../CartContext/CartContext";
import { IoCheckmarkSharp } from "react-icons/io5";
const ProductCards = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [addedToCart, setAdded] = useState(null);
  const { addItem } = useCart();

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return <div className="text-3xl text-center font-bold">Loading......</div>;
  }

  const addToCart = (product, productId) => {
    setAdded(productId);
    addItem(product);
    setTimeout(() => {
      setAdded(null);
    }, 3000);
  };
  return (
    <section className="min-h-[80vh] w-11/12 mx-auto">
      <h1 className="text-2xl font-bold text-center m-5">Products</h1>
      <div className="p-3 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {products.map((product) => {
          return (
            <div
              key={product.id}
              className="relative overflow-hidden w-full flex flex-col h-full border border-gray-100 bg-white"
            >
              <img
                src={product.image}
                alt={product.title}
                className="h-48 w-full p-5 object-cover transition duration-500 group-hover:scale-105 sm:h-60"
              />

              <div className="p-4 flex flex-col justify-between flex-grow">
                <span className="whitespace-nowrap bg-blue-400 text-white px-2 py-1 text-xs font-medium">
                  New
                </span>
                <h3 className="mt-3 text-base font-medium text-gray-900">
                  {product.title}
                </h3>

                <button
                  className="mt-3 block w-full rounded text-white bg-blue-800 py-2 text-xs font-medium transition hover:scale-105"
                  onClick={() => {
                    addToCart(product, product.id);
                  }}
                >
                  {addedToCart === product.id ? (
                    <>
                      <IoCheckmarkSharp className="inline mr-2" />
                      Added to Cart
                    </>
                  ) : (
                    "Add to Cart"
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProductCards;
