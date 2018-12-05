import React from 'react'

import styled from '@emotion/styled'

const Container = styled('div')`
  ${tw`font-sans flex flex-col min-h-screen bg-white`};
`

const Layout = ({ children }) => <Container>{children}</Container>

export default Layout
