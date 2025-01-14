import Link from 'next/link';
import React from 'react';

export default function Hero() {
  return (
    <section className="relative bg-white">
      <div className="px-24 py-10 mx-auto ">
        <div className="max-w-lg xl:max-w-xl mx-auto lg:mx-0 pt-12 pb-28 lg:py-20">
          <h1 className="font-semibold text-5xl xs:text-7xl xl:text-7xl tracking-tighter mb-8 ">
          Grow your business
          on
          {" "}
          <span className='text-green-500 font-semibold'>WhatsApp</span>
          </h1>
          <p className="max-w-md xl:max-w-none text-lg text-gray-700 mb-10">
          Personalize communication and sell more with the
WhatsApp Business API platform that automates
marketing, sales, service and support.
          </p>
          <div className="flex flex-col sm:flex-row">
            <Link
              href="register"
              className="inline-flex py-4 px-6 mb-3 sm:mb-0 sm:mr-4 items-center justify-center text-lg font-bold text-black hover:text-green-900 border border-green-900 hover:border-green-500 bg-green-500 hover:bg-green-500 rounded-full transition duration-200"
            >
            Register for free
            </Link>
            <Link
              href="book-demo"
              className="inline-flex py-4 px-6 items-center justify-center text-lg font-bold text-black hover:text-black border border-green-900 hover:bg-green-500 rounded-full transition duration-200"
            >
              Book Demo
            </Link>
          </div>
        </div>
      </div>
      {/* Image Section */}
      <div className="hidden lg:flex items-center justify-center absolute top-10 right-0 h-full max-w-lg xl:max-w-none xl:w-2/5 p-3 ml-auto bg-transparent">
        <img
          className="absolute bottom-0 left-0 -ml-16"
          src="/hero-2.png"
          alt="Hero 2"
        />
        <img
          className="block xl:h-full mx-auto"
          src="/hero-1.png"
          alt="Hero"
        />
      </div>
      <div className="relative flex lg:hidden p-3 bg-transparent items-center justify-center">
        <img
          className="absolute top-0 right-0 -mt-16"
          src="/hero-2.png"
          alt="hero 2"
        />
        <img
          className="block w-full max-w-2xl h-auto"
          src="/hero-1.png"
          alt="Hero"
        />
      </div>
    </section>
  );
}
