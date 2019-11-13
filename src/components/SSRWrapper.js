import React from 'react'

class SSRWrapper extends React.Component {
  constructor() {
    super()
    this.state = {
      display: false,
    }
  }

  componentDidMount() {
    this.setState({ display: true })
  }

  render() {
    const Component = this.props.component
    return this.state.display ? <Component /> : null
  }
}

const createWrappedComponent = component => <SSRWrapper component={component} />
export default createWrappedComponent
