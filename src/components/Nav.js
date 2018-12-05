import React from 'react'
import styled from '@emotion/styled'

const Container = styled('div')`
  ${tw`bg-white w-full px-4 border-b`};
`

const NavRow = styled('div')`
  ${tw`flex flex-wrap md:justify-between py-4 container mx-auto`};
`

const NavLeft = styled('div')`
  ${tw`flex-1 flex items-center`};
`

const Brand = styled('a')`
  ${tw`text-black text-sm font-extrabold uppercase mr-1 no-underline`};
`

const NavRight = styled('div')`
  ${tw`hidden md:flex items-center justify-center`};
`

const NavLink = styled('a')`
  ${tw`text-black text-sm font-bold uppercase mr-4 no-underline`};
`

const Nav = () => (
  <Container>
    <NavRow>
      <NavLeft>
        <Brand href="/">Byteconf</Brand>
      </NavLeft>
      <NavRight>
        <NavLink href="/sponsor">🙌 Sponsor</NavLink>
        <NavLink href="/patrons">😍 Support Us</NavLink>
        <NavLink href="https://www.byteconf.com/s/blog">📰 Blog</NavLink>
        <NavLink href="/discord">💬 Chat</NavLink>
      </NavRight>
    </NavRow>
  </Container>
)

export default Nav
