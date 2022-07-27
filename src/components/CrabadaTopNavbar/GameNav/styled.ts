import styled from 'styled-components'
import media from 'styled-media-query'
import Theme from 'styles/theme'

export const Nav = styled.nav`
  width: 100%;
`

export const MenuList = styled.ul`
  width: 100%;
  display: flex;
  border-radius: 2px;
  background-color: ${Theme.primary.placeholder};
`

export const MenuItem = styled.li`
  background: transparent;
  width: 100%;
  font-size: 20px;
  display: flex;
  justify-content: center;
  padding: 8px 0;
  font-weight: bold;
  border-radius: 2px;

  &.active {
    background-color: ${Theme.primary.main};
  }
`
