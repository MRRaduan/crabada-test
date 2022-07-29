import styled from 'styled-components'
import media from 'styled-media-query'

export const ChartLegendList = styled.ul`
  ${media.greaterThan('medium')`
  margin: 74px 48px;
  `}
`
export const ChartLegendItem = styled.li`
  width: 256px;
`
