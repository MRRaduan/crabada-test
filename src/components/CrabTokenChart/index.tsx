import CrabTokenLegend, { TokenChartLegend } from 'components/CrabTokenLegend'
import * as S from './styled'

const TokensLegends: TokenChartLegend[] = [
  {
    name: 'SURGE',
    color: 'rgb(64, 9, 11)',
    value: 2742,
    status: 'up',
    percentage: 29,
  },
  {
    name: 'SUNKEN',
    color: 'rgb(7, 64, 64)',
    value: 4747,
    status: 'up',
    percentage: 29,
  },
  {
    name: 'PRIME',
    color: 'rgb(64, 56, 15)',
    value: 2742,
    status: 'down',
    percentage: 29,
  },
  {
    name: 'BULK',
    color: 'rgb(64, 25, 19)',
    value: 2742,
    status: 'up',
    percentage: 29,
  },
  {
    name: 'CRABOID',
    color: 'rgb(0, 28, 64)',
    value: 2742,
    status: 'up',
    percentage: 29,
  },

  {
    name: 'RUINED',
    color: 'rgb(29, 22, 64)',
    value: 2742,
    status: 'up',
    percentage: 29,
  },
  {
    name: 'GEM',
    color: 'rgb(64, 12, 43)',
    value: 2742,
    status: 'up',
    percentage: 29,
  },
  {
    name: 'ORGANIC',
    color: 'rgb(20, 64, 15)',
    value: 2742,
    status: 'up',
    percentage: 29,
  },
]

const CrabTokenChart = () => {
  return (
    <S.Wrapper>
      <S.ChartSpace>
        <S.ChartHeader>
          <S.HeaderTitle>
            <S.TitleText>
              Crabda Count <span className="placeholder">(todays low)</span>
            </S.TitleText>
            <S.TitleValue>
              256,003 <span className="placeholder"> ($1,543)</span>
            </S.TitleValue>
          </S.HeaderTitle>
          <S.TimeFilter>
            <S.TimeItem>Today</S.TimeItem>
            <S.TimeItem active>All Crabs</S.TimeItem>
          </S.TimeFilter>
        </S.ChartHeader>
        <S.ChartWrapper></S.ChartWrapper>
      </S.ChartSpace>
      <S.ChartLegend>
        <S.ChartLegendTitle>POPULATION BREAKDOWN</S.ChartLegendTitle>
        <S.ChartLegendList>
          <S.ChartLegendItem>
            {TokensLegends.map((token) => (
              <CrabTokenLegend key={token.name} {...token} />
            ))}
          </S.ChartLegendItem>
        </S.ChartLegendList>
      </S.ChartLegend>
    </S.Wrapper>
  )
}

export default CrabTokenChart
