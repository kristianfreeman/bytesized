import * as React from 'react'

class EventHeader extends React.Component {
  render() {
    const { event } = this.props

    return (
      <div className="container mx-auto px-4">
        <div className="flex items-center md:justify-between py-4">
          <div className="flex justify-end text-right">
            <div className="md:flex md:items-center ml-2">
              <a
                className="text-grey-lighter text-sm font-extrabold uppercase mr-1 no-underline"
                href="/"
              >
                Byteconf
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default EventHeader
