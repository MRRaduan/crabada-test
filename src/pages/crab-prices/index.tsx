import type { NextPage } from 'next'
import ProfileTitle from 'components/ProfileTitle'
import Filter from 'components/Filter'
import CrabTokenChart from 'components/CrabTokenChart'
import useBuckets from 'hooks/useBuckets'

const Home: NextPage = () => {
  const { renamedBuckets, isLoading, isError } = useBuckets({
    from: '2022-07-01T00:00:00.000000Z',
    breedCount: [0, 3],
    legend: [0, 6],
    purity: [0, 6],
  })

  if (isLoading) {
    return (
      <>
        <h1>Loading..</h1>
      </>
    )
  }

  if (isError) {
    return (
      <>
        <h1>Error</h1>
      </>
    )
  }

  return (
    <>
      <ProfileTitle />
      <Filter />
      <CrabTokenChart chartData={renamedBuckets} />
    </>
  )
}

export default Home
