import React from 'react'
import { Link } from 'gatsby'

const s3Url = path => `https://byteconf-production.s3.amazonaws.com/${path}`

const Container = ({ children, image, recent, url }) => {
  const imageStyle = {
    backgroundImage: `url(${image ? image.asset.fluid.src : url})`,
  }
  return (
    <div
      className={`rounded-lg h-full shadow hover:shadow-2xl transition-all hover:lighten ${
        recent ? 'w-full' : ''
      }`}
      style={Object.assign({}, imageStyle, {
        backgroundSize: `cover`,
        paddingLeft: recent ? '' : '10px',
        paddingRight: recent ? '' : '10px',
      })}
    >
      {children}
    </div>
  )
}

const Event = ({ event, recent }) => {
  return (
    <Link
      className={recent ? 'w-full' : 'w-full md:w-1/2 h-64'}
      style={{
        marginBottom: '10px',
        paddingLeft: recent ? '' : '10px',
        paddingRight: recent ? '' : '10px',
      }}
      to={event.slug}
    >
      <Container
        recent={recent}
        image={event.cover ? event.cover : null}
        url={s3Url(event.cover_path)}
      >
        <div className={`flex items-center justify-center h-full p-4 md:p-0`}>
          <div className="py-2 px-4 shadow hover:shadow-2xl transition-all bg-white rounded text-center">
            <h1
              className={`text-black text-2xl md:text-base ${
                recent ? 'md:text-4xl' : ''
              } font-bold`}
            >
              {event.name}
            </h1>
          </div>
        </div>
      </Container>
    </Link>
  )
}

export default Event
