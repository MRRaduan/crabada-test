import styled from 'styled-components'
import media from 'styled-media-query'
import Theme from 'styles/theme'

export const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  background: linear-gradient(180deg, #001431, #000d1f);
  width: 100%;
  align-items: center;
`

export const MenuItem = styled.li`
  background-color: transparent;
  color: ${Theme.secondary.main};
  font-size: 16px;
  height: 54px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  &:first-child {
    border: solid 1px ${Theme.grayscale.white};
    border-radius: 4px;
  }
`
