import styled from 'styled-components'
import media from 'styled-media-query'
import Theme from 'styles/theme'

export const Background = styled.div`
  background-color: #001a41;
  border: 1px solid #6ea9ff;
  border-radius: 4px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 56px;
  margin-top: 24px;
  ${media.lessThan('medium')`
    display: none;
  `}
`

export const FilterGroup = styled.div`
  display: flex;
  width: 100%;
  max-width: 890px;
`

export const FilterOption = styled.div`
  width: 100%;
  max-width: 227px;
  margin: 0 32px;
  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }
`

export const FilterActions = styled.div`
  display: flex;
`

export const FilterButton = styled.button`
  padding: 8px 38px;
  color: ${Theme.secondary.main};
  background-color: ${Theme.primary.main};
  border: none;
  font-size: 16px;
  border-radius: 20px;
  height: 32px;
  transition: all 0.16s ease-in-out;
  cursor: pointer;
  width: max-content;
  margin-left: 32px;
  &:hover {
    opacity: 0.9;
    transition: all 0.16s ease-in-out;
  }
`
