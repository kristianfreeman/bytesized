import * as React from 'react'

import S3Url from '../../utils/s3Url'

const Sponsors = () => (
  <div className="bg-white text-black text-center pt-16">
    <h3 className="text-3xl text-bold uppercase">Sponsors</h3>

    <div className="mx-auto max-w-lg overflow-hidden mt-8 mb-16">
      <div className="px-6 py-4 md:py-0">
        <div className="flex flex-wrap mb-4">
          <div className="sm:w-full md:block w-full h-24 md:h-32">
            <a href="https://frontside.io">
              <img src={S3Url('sponsors/frontside.png')} className="h-full" />
            </a>
          </div>
        </div>
      </div>
    </div>

    <h3 className="text-3xl text-bold uppercase">Community Partners</h3>

    <div className="mx-auto max-w-lg overflow-hidden py-8">
      <div className="px-6 py-4">
        <div className="flex flex-wrap mb-4">
          <div className="w-full h-16 mt-8">
            <a href="https://egghead.io/s/byteconf-2018">
              <img src={S3Url('sponsors/egghead.png')} className="h-full" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Sponsors
