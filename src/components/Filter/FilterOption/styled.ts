import styled from 'styled-components'
import Theme from 'styles/theme'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 8px;
`
export const Title = styled.span`
  color: ${Theme.secondary.main};
  font-size: 16px;
  margin-bottom: 12px;
`

export const RangeWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const RangeLines = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: -2px;
  > .line {
    background-color: ${Theme.grayscale.gray};
    height: 6px;
    width: 1px;
  }
`

export const Range = styled.input`
  -webkit-appearance: none;
  width: 227px;
  height: 4px;
  border-radius: 4px;
  background: ${Theme.grayscale.gray};
  outline: none;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    background: ${Theme.secondary.main};
    border: solid 2px ${Theme.primary.main};
    border-radius: 20px;
    cursor: pointer;
    transition: all 0.16s ease-in-out;
    &:hover {
      transform: scale3d(1.2, 1.2, 1.2);
      transition: all 0.16s ease-in-out;
    }
  }

  &::-moz-range-thumb {
    width: 20px;
    height: 20px;
    border-radius: 20px;
    background: ${Theme.secondary.main};
    border: solid 2px ${Theme.primary.main};
    cursor: pointer;
    transition: all 0.16s ease-in-out;
    &:hover {
      transform: scale3d(1.3, 1.3, 1.3);
      transition: all 0.16s ease-in-out;
    }
  }
`
