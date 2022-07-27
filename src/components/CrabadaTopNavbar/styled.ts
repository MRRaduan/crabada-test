import styled from 'styled-components'
import media from 'styled-media-query'

export const CrabadaBanner = styled.div`
  background-image: url('./images/Crabada-Banner.png');
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
  margin-top: -20px;
  width: 100%;
  height: 106px;
  ${media.greaterThan('medium')`
    display: none;
  `}
`

export const Header = styled.header``
