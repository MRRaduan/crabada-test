import useSWR from 'swr'
import api from 'api'
import { CrabTokensName } from 'components/CrabTokenLegend'
import axios, { AxiosResponse } from 'axios'

interface Response {
  avgPrice: number
  bucketDate: number
  higherPrice: number
  lowerPrice: number
  totalPrice: number
  totalSales: number
}

interface BucketsParams {
  from: string
  breedCount: number[] | undefined
  legend: number[] | undefined
  purity: number[] | undefined
  crabClass: CrabTokensName[]
}

export const allClassesName: CrabTokensName[] = [
  'SURGE',
  'SUNKEN',
  'PRIME',
  'BULK',
  'CRABOID',
  'RUINED',
  'GEM',
  'ORGANIC',
]

const mountRequests = (params: BucketsParams) => {
  const url = '/marketplace/game/crabada/prices'
  let allRequests: any = []
  allClassesName.forEach((crabClass) => {
    allRequests.push(
      api.post(url, {
        ...params,
        crabClass: [crabClass],
      })
    )
  })
  return allRequests
}

function useBuckets(params: BucketsParams) {
  const allRequests = mountRequests(params)

  const fetcher = () =>
    axios.all(allRequests).then(
      axios.spread((...responses) => {
        const allResponses: { [x: number]: any }[] = []
        responses.forEach((responseItem: any) => {
          allResponses.push(responseItem)
        })
        return allResponses
      })
    )

  const { data, error } = useSWR('/marketplace/game/crabada/prices', fetcher)

  const response = data?.map((crabClass) =>
    crabClass.data.sort((a, b) => a.bucketDate - b.bucketDate)
  )

  let renamedBuckets: { [x: number]: any }[] = []
  data?.forEach((responseItem: any) => {
    renamedBuckets.push({
      [JSON.parse(responseItem.config.data).crabClass]: responseItem.data,
    })
  })

  return {
    buckets: response,
    renamedBuckets: Object.assign({}, ...renamedBuckets),
    isLoading: !error && !data,
    isError: error,
  }
}

export default useBuckets
