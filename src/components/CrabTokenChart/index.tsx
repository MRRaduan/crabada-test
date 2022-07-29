import { Bucket, CrabTokensName } from 'components/CrabTokenLegend'
import CrabTokenLegendList from 'components/CrabTokenLegendList'
import { allClassesName } from 'hooks/useBuckets'
import dynamic from 'next/dynamic'
import { ApexOptions } from 'apexcharts'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

import * as S from './styled'

interface CrabTokenChartProps {
  chartData: Record<CrabTokensName, Bucket[]>
}

const options: ApexOptions = {
  chart: {
    id: 'basic-bar',
    zoom: {
      enabled: false,
    },
  },
  tooltip: {
    theme: 'dark',
  },
  stroke: {
    curve: 'smooth',
    width: 3,
  },
  colors: [
    '#793024',
    '#108C8C',
    '#C9B22E',
    '#FC252B',
    '#0068EC',
    '#533FB4',
    '#EC2C9E',
    '#34A527',
  ],
  xaxis: {
    type: 'category',
    tickAmount: 20,
    labels: {
      style: {
        colors: '#fff',
      },
    },
  },
  yaxis: {
    forceNiceScale: true,
    labels: {
      style: {
        colors: '#fff',
      },
    },
  },
}

const CrabTokenChart = ({ chartData }: CrabTokenChartProps) => {
  const mountSerie = (bucketName: CrabTokensName) => {
    const values: any[] = []
    chartData[bucketName]?.forEach((item: any) => {
      values.push(item.avgPrice)
    })
    return values
  }

  const series = allClassesName.map((name) => ({
    name,
    data: mountSerie(name),
  }))

  const getTotalSales = () => {
    const bucketData = Object.entries(chartData)
    let allTotalSales = 0
    bucketData.forEach((bucket) => {
      const bucketValues = bucket[1]
      allTotalSales += bucketValues.reduce((accumulator, bucket) => {
        return accumulator + bucket.totalSales
      }, 0)
    })
    return allTotalSales
  }

  const getLastLowestPrice = () => {
    const bucketData = Object.entries(chartData)

    const onlyLastBuckets = bucketData.map((bucket) => {
      const updatedBucket = bucket[1][bucket.length - 2]
      return {
        crabClassName: bucket[0],
        lowerPrice: updatedBucket.lowerPrice,
      }
    })

    const lowestPrice = onlyLastBuckets.reduce((prev, curr) =>
      prev.lowerPrice < curr.lowerPrice ? prev : curr
    )
    return lowestPrice
  }

  const lowestPrice = getLastLowestPrice()
  const totalSales = getTotalSales()

  return (
    <S.Wrapper>
      <S.ChartSpace>
        <S.ChartHeader>
          <S.HeaderTitle>
            <S.TitleText>
              Crabda Count <span className="placeholder">(todays low)</span>
            </S.TitleText>
            <S.TitleValue>
              {Intl.NumberFormat('en-US').format(totalSales)}
              <span className="placeholder">
                ({Intl.NumberFormat('en-US').format(lowestPrice.lowerPrice)})
              </span>
            </S.TitleValue>
          </S.HeaderTitle>
          <S.TimeFilter>
            <S.TimeItem>Today</S.TimeItem>
            <S.TimeItem active>All Crabs</S.TimeItem>
          </S.TimeFilter>
        </S.ChartHeader>
        <S.ChartWrapper>
          <Chart options={options} series={series} type="line" height={350} />
        </S.ChartWrapper>
      </S.ChartSpace>
      <S.ChartLegend>
        <S.ChartLegendTitle>POPULATION BREAKDOWN</S.ChartLegendTitle>
        <CrabTokenLegendList buckets={chartData} />
      </S.ChartLegend>
    </S.Wrapper>
  )
}

export default CrabTokenChart
