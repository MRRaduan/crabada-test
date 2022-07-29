import CrabTokenLegend, { CrabTokensName } from 'components/CrabTokenLegend'
import CrabTokenLegendList from 'components/CrabTokenLegendList'
import { allClassesName } from 'hooks/useBuckets'
import dynamic from 'next/dynamic'
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

import * as S from './styled'

interface CrabTokenChartProps {
  chartData: any
}

const CrabTokenChart = ({ chartData }: CrabTokenChartProps) => {
  const options = {
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
      type: 'all',
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
  const mountSerie = (bucketName: CrabTokensName) => {
    let values: any[] = []
    chartData[bucketName]?.forEach((item: any) => {
      values.push(item.avgPrice)
    })
    return values
  }

  const series = allClassesName.map((name) => ({
    name,
    data: mountSerie(name),
  }))

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
