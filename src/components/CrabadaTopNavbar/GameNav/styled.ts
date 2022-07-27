import styled from 'styled-components'
import media from 'styled-media-query'
import Theme from 'styles/theme'

export const Nav = styled.nav`
  width: 100%;

  ${media.lessThan('medium')`
    display: none;
  `}
`

export const MenuList = styled.ul`
  width: 100%;
  display: flex;
  border-radius: 2px;
  background: transparent;
`

export const MenuItem = styled.li`
  width: 100%;
`

export const MenuItemButton = styled.button`
  width: 100%;
  font-size: 20px;
  display: flex;
  justify-content: center;
  padding: 8px 0;
  font-weight: bold;
  border-radius: 2px;

  background-color: ${Theme.primary.light};
  border: none;
  overflow: hidden;
  position: relative;
  cursor: pointer;

  &.active {
    background-color: ${Theme.primary.main};
    &::before {
      transform: translate3d(0, -100%, 0);
    }
  }

  &::before,
  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  &::before {
    content: '';
    background-color: ${Theme.primary.placeholder};
    transition: transform 0.22s cubic-bezier(0.7, 0, 0.2, 1);
  }

  > span {
    position: relative;
  }

  &:hover {
    &::before {
      transform: translate3d(0, -100%, 0);
    }
  }
`
