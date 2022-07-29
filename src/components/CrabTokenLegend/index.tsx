import * as S from './styled'
import Image from 'next/image'
import formatter from 'utils/formatter'

export type CrabTokensName =
  | 'SURGE'
  | 'SUNKEN'
  | 'PRIME'
  | 'BULK'
  | 'CRABOID'
  | 'RUINED'
  | 'GEM'
  | 'ORGANIC'
  | string

export type Bucket = {
  avgPrice: number
  bucketDate: number
  higherPrice: number
  lowerPrice: number
  totalPrice: number
  totalSales: number
}

export interface TokenChartLegend {
  name: CrabTokensName
  color: string
  buckets: Bucket[]
}

type CrabTokenLegendProps = TokenChartLegend

const CrabTokenLegend = (props: CrabTokenLegendProps) => {
  const buckets = props.buckets
  const updatedBucket = buckets[buckets.length - 1]
  const beforeLastBucket = buckets[buckets.length - 2]

  const getPercentageDifference = () => {
    const sub = updatedBucket?.avgPrice - beforeLastBucket?.avgPrice
    const sum = updatedBucket?.avgPrice + beforeLastBucket?.avgPrice

    const diff = (sub / (sum / 2)) * 100
    return diff
  }

  const percentage = getPercentageDifference()

  return (
    <S.Wrapper color={props.color}>
      <S.IconWrapper>
        <Image
          src={`/images/tokens-class/${props.name}.png`}
          width={24}
          height={26}
        />
      </S.IconWrapper>
      <S.TokenValue>{formatter.format(updatedBucket.avgPrice)}</S.TokenValue>
      <S.TokenPercentage status={percentage > 0 ? 'up' : 'down'}>
        {percentage > 0 && '+'}
        {Math.round(percentage)}%
      </S.TokenPercentage>
    </S.Wrapper>
  )
}

export default CrabTokenLegend
