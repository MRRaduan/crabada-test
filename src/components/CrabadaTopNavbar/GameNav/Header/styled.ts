import styled from 'styled-components'
import media from 'styled-media-query'
import Theme from 'styles/theme'

export const Wrapper = styled.header`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 16px;
`

export const CrabadaLogo = styled.div``

export const CrabadaTokens = styled.ul`
  display: flex;
  margin-top: 12px;

  @media (min-width: 1078px) {
    margin-top: 0;
  }
`

export const CrabadaToken = styled.li`
  display: flex;
  align-items: center;
  font-size: 14px;
  margin: 0 16px;
`

export const Name = styled.span`
  margin: 0 10px;
`

export const TokenStatusTag = styled.span<{ status: string }>`
  padding: 4px;
  border-radius: 2px;
  ${(props) =>
    props.status === 'up' &&
    `
    background-color: ${Theme.green.dark};
    color: ${Theme.green.main};
  `}
  ${(props) =>
    props.status === 'down' &&
    `
    background-color: ${Theme.red.dark};
    color: ${Theme.red.main};
  `}
`
