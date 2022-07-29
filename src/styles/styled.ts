import styled from 'styled-components'
import media from 'styled-media-query'

export const Content = styled.div`
  ${media.greaterThan('medium')`
    margin-left: 98px;
    padding: 36px 24px;
  `}
`
