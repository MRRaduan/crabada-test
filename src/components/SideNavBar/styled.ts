import styled from 'styled-components'
import media from 'styled-media-query'
import Theme from 'styles/theme'

export const Wrapper = styled.nav`
  background-color: ${Theme.grayscale.black};
  position: relative;
  z-index: 99;
  ${media.greaterThan('medium')`
    width: 98px;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
  `}
`

export const NavHeader = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const P2ELogo = styled.div``

export const Menu = styled.ul`
  ${media.lessThan('medium')`
    display: none;
  `}
`

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
`

export const SocialItem = styled.li`
  padding: 8px 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`
