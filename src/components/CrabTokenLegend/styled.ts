import styled from 'styled-components'
import media from 'styled-media-query'
import Theme from 'styles/theme'

export const Wrapper = styled.div<{ color: string }>`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.color};
  padding: 8px 16px;
  border-radius: 4px;
  margin: 8px 0;
`
export const IconWrapper = styled.div``

export const TokenValue = styled.span`
  font-size: 24px;
  color: ${Theme.secondary.main};
  padding: 0 8px;
  ${media.greaterThan('medium')`
    font-size: 18px;
  `}
`

export const TokenPercentage = styled.span<{ status: 'up' | 'down' }>`
  font-size: 18px;
  color: ${(props) => props.status == 'up' && `${Theme.green.main}`};
  color: ${(props) => props.status == 'down' && `${Theme.red.main}`};
  font-weight: 300;
  ${media.greaterThan('medium')`
    font-size: 12px;
  `}
`
