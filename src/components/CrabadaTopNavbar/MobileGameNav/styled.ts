import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import Theme from 'styles/theme'

const Item = css`
  height: 54px;
  font-size: 16px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 26px;
  background-color: transparent;
  color: ${Theme.secondary.main};
`

export const Dropdown = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(180deg, #001431, #000d1f);
  width: 100%;
  ${media.greaterThan('medium')`
    display: none;
  `}
`

export const SelectedItem = styled.button`
  ${Item};
  border: none;
  border: solid 1px ${Theme.grayscale.white};
  border-radius: 4px;
`

export const MenuList = styled.ul<{ isOpen: boolean }>`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
`

export const MenuItem = styled.li`
  ${Item};
`
