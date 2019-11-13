import React from 'react'

const Social = ({ alignment = 'center', size = '2x' }) => (
  <div className={`text-${alignment}`}>
    <p className="mb-4">
      <a
        href="/s/newsletter"
        className="no-underline p-4"
        title="Join our newsletter"
      >
        <i
          className={`fa-${size} fas fa-envelope text-gray-600 hover:text-green-800 transition-all no-underline border-white`}
        />
      </a>
      <a
        href="/s/twitter"
        className="no-underline p-4"
        title="Byteconf on Twitter"
      >
        <i
          className={`fa-${size} fab fa-twitter text-gray-600 hover:text-blue-800 transition-all no-underline border-white`}
        />
      </a>
      <a
        href="/s/youtube"
        className="no-underline p-4"
        title="Byteconf on YouTube"
      >
        <i
          className={`fa-${size} fab fa-youtube text-gray-600 hover:text-red-800 transition-all no-underline border-white`}
        />
      </a>
    </p>
  </div>
)

export default Social
