import React from 'react';

const Footer = () => {
  const d = new Date();

  return (
    <footer className='bg-blue-800 text-white py-8'>
      <div className='max-w-7xl mx-auto px-6'>
       
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          <div>
            <h3 className='font-semibold text-lg mb-4'>Ecommerce</h3>
            <ul>
              <li><a className="hover:text-gray-200">Shop</a></li>
              <li><a className="hover:text-gray-200">Product</a></li>
              <li><a className="hover:text-gray-200">New</a></li>
            </ul>
          </div>


          <div>
            <h3 className='font-semibold text-lg mb-4'>Contact Us</h3>
            <div className='flex flex-col md:flex-row items-center'>
              <input
                type="text"
                className='p-3 mb-4 md:mb-0 w-full sm:w-72 text-black rounded-md'
                placeholder='Enter your email'
              />
              <button className='bg-gray-800 text-white p-3 rounded-md ml-0 md:ml-4 hover:bg-gray-700'>
                Submit
              </button>
            </div>
          </div>

          <div className='col-span-1 lg:col-span-2'>
            <h3 className='text-center text-lg font-semibold'>
              &#169; {d.getFullYear()} Ecommerce Store | 
              <a href="#" className='ml-2 hover:text-gray-200'>Terms of Service</a>
            </h3>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default React.memo(Footer) ;
          