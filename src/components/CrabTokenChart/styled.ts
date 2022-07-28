import styled from 'styled-components'
import media from 'styled-media-query'
import Theme from 'styles/theme'

export const Wrapper = styled.section`
  margin: 30px auto 0 auto;
  width: calc(100% - 24px);
  background: linear-gradient(180deg, #001431 0%, #000d1f 100%);
  border-radius: 4px;
  margin: 30px 12px 0 12px;
  ${media.greaterThan('medium')`
    width: 100%;
    margin: 140px 0 0 0;
    border: 1px solid #1370F6;
  `}
`
export const ChartLegendList = styled.ul``
export const ChartLegendItem = styled.li``

export const ChartHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 16px 48px;
`

export const HeaderTitle = styled.div``

export const TitleText = styled.h1`
  font-size: 14px;
  > span.placeholder {
    color: ${Theme.grayscale.gray};
  }
`

export const TitleValue = styled.h2`
  margin-top: 12px;
  color: ${Theme.secondary.main};
  font-size: 24px;
  ${media.greaterThan('medium')`
    font-size: 28px;
  `}
  > span.placeholder {
    color: ${Theme.grayscale.gray};
  }
`

export const TimeFilter = styled.div`
  ${media.lessThan('medium')`
    display: none;
  `}
`

export const ChartSpace = styled.div``

export const TimeItem = styled.button<{ active?: boolean }>`
  font-size: 14px;
  color: ${Theme.secondary.main};
  border-radius: 4px;
  border: none;
  text-align: center;
  padding: 10px 0;
  width: 192px;
  background: transparent;

  ${(props) =>
    props.active &&
    `
  background-color: ${Theme.primary.main};
  `}

  &:hover {
    opacity: 0.7;
    transition: all 0.16s ease-in-out;
  }
`

export const ChartWrapper = styled.div``

export const ChartLegend = styled.div`
  background-color: #001a41;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 16px;
  ${media.greaterThan('medium')`
    background-color: transparent;
  `}
`

export const ChartLegendTitle = styled.h3`
  padding: 16px;
  text-transform: uppercase;
  color: ${Theme.secondary.main};
  font-size: 12px;
  ${media.greaterThan('medium')`
   display: none 
  `}
`
