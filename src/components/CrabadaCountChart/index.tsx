import * as S from './styled'

const CrabadaCountChart = () => {
  return (
    <S.ChartWrapper>
      <S.ChartHeader>
        <S.ChartTitle>
          Crabda Count <span>(todays low)</span>
        </S.ChartTitle>
        <S.ChartValue>
          256,003 <span>($1,543)</span>
        </S.ChartValue>
      </S.ChartHeader>
    </S.ChartWrapper>
  )
}

export default CrabadaCountChart
