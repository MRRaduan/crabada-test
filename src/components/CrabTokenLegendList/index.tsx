import CrabTokenLegend, { CrabTokensName } from 'components/CrabTokenLegend'
import * as S from './styled'

const crabClassColors: Record<CrabTokensName, string> = {
  SURGE: 'rgb(64, 9, 11)',
  SUNKEN: 'rgb(7, 64, 64)',
  PRIME: 'rgb(64, 56, 15)',
  BULK: 'rgb(64, 25, 19)',
  CRABOID: 'rgb(0, 28, 64)',
  RUINED: 'rgb(29, 22, 64)',
  GEM: 'rgb(64, 12, 43)',
  ORGANIC: 'rgb(20, 64, 15)',
}

interface CrabTokenLegendListProps {
  buckets: any
}

const CrabTokenLegendList = ({ buckets }: CrabTokenLegendListProps) => {
  const tokens = Object.entries(buckets)
  return (
    <S.ChartLegendList>
      <S.ChartLegendItem>
        {tokens.map((token) => {
          const crabClassName: string = token[0]
          const crabClassBuckets: any = token[1]
          return (
            <CrabTokenLegend
              key={crabClassName}
              name={crabClassName}
              color={crabClassColors[crabClassName]}
              buckets={crabClassBuckets}
            />
          )
        })}
      </S.ChartLegendItem>
    </S.ChartLegendList>
  )
}

export default CrabTokenLegendList
