import Theme from '../../styles/theme'
import styled from 'styled-components'

export const ChartWrapper = styled.section`
  background: linear-gradient(180deg, #001431 0%, #000d1f 100%);
`

export const ChartHeader = styled.header``

export const ChartTitle = styled.h1`
  color: ${Theme.grayscale.white};
  font-size: 14px;
  > span {
    color: ${Theme.grayscale.gray};
  }
`
export const ChartValue = styled.p`
  color: ${Theme.grayscale.white};
  font-size: 24px;
  > span {
    color: ${Theme.grayscale.gray};
  }
`
