import * as React from 'react'

import Social from './Social'

const Footer = () => (
  <React.Fragment>
    <div className="p-8 bg-orange-200 text-center">
      <Social />

      <div className="flex flex-grow flex-col mx-auto text-black text-center">
        <p className="block leading-normal text-sm sm:mx-6 md:mx-24 py-8">
          © Copyright Bytesized, LLC 2018-2019. All Rights Reserved.
        </p>
      </div>
    </div>
  </React.Fragment>
)

export default Footer
