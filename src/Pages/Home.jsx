import React from "react";
import Header from "../Components/Header";
import hero from "../assets/Images/Hero.jpg";
import Products from "./Products";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <section
        className="min-h-[80vh] bg-cover flex  items-center bg-center "
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="text-left p-3 md:w-[600px] text-white ">
          <h1 className="md:text-6xl text-4xl mb-3 font-extrabold">
            Winter Stock
          </h1>
          <p className="font-light leading-7">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
            molestias fugit beatae quibusdam. Ut veritatis corrupti officiis ab
            dolorum blanditiis temporibus obcaecati perferendis! Natus ex iure
            quos quaerat dolores incidunt.
          </p>
        </div>
      </section>
      <Products />
      <Footer />
    </>
  );
};

export default Home;
