import React from 'react'

const Organizers = ({ event: { organizers } }) => (
  <div className="my-16">
    <div className="bg-white w-full container mx-auto md:mb-0 p-8 flex flex-col items-center text-center">
      <h2 className="text-3xl font-bold mb-16">Organizers</h2>

      <div className="max-w-md md:max-w-screen-xl mx-auto">
        <div className="flex items-center">
          {!!organizers &&
            organizers.map(({ image, name, twitter, url }) => (
              <div className="mx-6">
                <div className="flex items-center justify-center w-full h-auto shadow-md">
                  <img
                    className="grayscale-1 hover:grayscale-0 transition-all"
                    srcSet={image.asset.fixed.srcSet}
                    src={image.asset.fixed.src}
                  />
                </div>

                <div className="p-4">
                  <div className="font-bold text-2xl mb-2">{name}</div>
                  <div className="mt-4">
                    {twitter && (
                      <a
                        href={twitter}
                        className="no-underline mr-4"
                        title="Twitter"
                      >
                        <i className="fab fa-twitter text-gray-600 hover:text-blue-800 transition-all fa-2x" />
                      </a>
                    )}
                    {url && (
                      <a href={url} className="no-underline" title="Website">
                        <i className="fas fa-link text-gray-600 hover:text-green-900 transition-all fa-2x" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  </div>
)

export default Organizers
