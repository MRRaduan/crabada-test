import * as S from './styled'
import Image from 'next/Image'

export type CrabTokensName =
  | 'SURGE'
  | 'SUNKEN'
  | 'PRIME'
  | 'BULK'
  | 'CRABOID'
  | 'RUINED'
  | 'GEM'
  | 'ORGANIC'

export interface TokenChartLegend {
  name: CrabTokensName
  value: number
  percentage: number
  color: string
  status: 'up' | 'down'
}

type CrabTokenLegendProps = TokenChartLegend

const CrabTokenLegend = (props: CrabTokenLegendProps) => {
  return (
    <S.Wrapper color={props.color}>
      <S.IconWrapper>
        <Image
          src={`/images/tokens-class/${props.name}.png`}
          width={24}
          height={26}
        />
      </S.IconWrapper>
      <S.TokenValue>{props.value}</S.TokenValue>
      <S.TokenPercentage status={props.status}>
        {props.status === 'up' && '+'}
        {props.status === 'down' && '-'}
        {props.percentage}%
      </S.TokenPercentage>
    </S.Wrapper>
  )
}

export default CrabTokenLegend
