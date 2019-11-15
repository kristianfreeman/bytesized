import React, { Component } from 'react'
import bg from './bg.jpg'

const CTA = () => (
  <div
    className="shadow-inner w-full my-16 flex items-center justify-center h-vh-60 md:h-vh-40"
    style={{
      backgroundImage: `url(${bg})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
    }}
  >
    <div className="container lg:mx-auto mx-4 md:mx-0 flex items-center justify-center flex-col my-16">
      <h3 className="text-white text-3xl font-bold shadow">
        Join our weekly newsletter
      </h3>
      <p className="text-gray-300 measure-wide my-8 text-xl shadow">
        Every Tuesday you'll get <strong>Bytesized Weekly</strong> in your
        inbox, with the latest and greatest in the web development world. No
        spam, and you can unsubscribe at any time.
      </p>
      <p>
        <a
          className="hover:bg-orange-700 bg-orange-800 text-white transition-all font-bold p-4 text-lg rounded"
          href="https://www.bytesized.xyz/newsletter"
        >
          Join now
        </a>
      </p>
    </div>
  </div>
)

export default CTA
