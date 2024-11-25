import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../CartContext/CartContext";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import {IoCheckmarkSharp} from "react-icons/io5";
const ProductDetail = () => {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [addedToCart, setAdded] = useState(null);
  const { addItem } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product:", error);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <div className="text-3xl text-center font-bold">Loading.....</div>;
  }
  const addToCart = (product, productId) => {
    setAdded(productId);
    addItem(product);
    setTimeout(() => {
      setAdded(null);
    }, 3000);
  };

  return (
    <>
      <Header />
      <section className="min-h-[75vh] w-11/12 mx-auto items-center py-8 flex flex-col md:flex-row">
        <div className=" w-[300px]  md:w-[400px] p-8 flex justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="w-full max-w-sm h-auto object-contain p-4 shadow-xl  rounded-lg"
          />
        </div>

        <div className="w-full md:w-2/3 p-5">
          <h2 className="text-3xl font-bold text-gray-900">{product.title}</h2>
          <p className="mt-4 text-lg text-gray-700">{product.description}</p>

          <div className="flex mt-6 items-center">
            <p className="text-3xl font-semibold text-gray-800">
              ${product.price}
            </p>
            <span className="ml-4 text-sm text-gray-500">In Stock</span>
          </div>

          <button
            className="mt-6 inline-block w-full py-3 bg-blue-800 text-white text-lg font-semibold rounded-md shadow-md hover:bg-blue-700 transition-all"
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

          <div className="mt-8 p-6 bg-gray-50 rounded-lg shadow-lg">
            <h3 className="text-xl font-medium text-gray-800">
              Product Details
            </h3>
            <ul className="mt-4 text-sm text-gray-600">
              <li>
                <strong>Category:</strong> {product.category}
              </li>
              <li>
                <strong>Rating:</strong> {product.rating.rate} / 5 (
                {product.rating.count} reviews)
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ProductDetail;
