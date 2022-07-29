import type { NextPage } from 'next'
import ProfileTitle from 'components/ProfileTitle'
import Filter from 'components/Filter'
import CrabTokenChart from 'components/CrabTokenChart'
import useBuckets from 'hooks/useBuckets'
import { useEffect, useState } from 'react'

const Home: NextPage = () => {
  const [breedCount, setBreedCount] = useState(1)
  const [legend, setLegend] = useState(1)
  const [purity, setPurity] = useState(1)

  const { renamedBuckets, isLoading, isError, mutate } = useBuckets({
    from: '2022-07-01T00:00:00.000000Z',
    breedCount: [0, breedCount],
    legend: [0, legend],
    purity: [0, purity],
  })

  const handleUpdateBreedCount = (newValue: number) => {
    setBreedCount(newValue)
  }
  const handleUpdateLegend = (newValue: number) => {
    setLegend(newValue)
  }
  const handleUpdatePurity = (newValue: number) => {
    setPurity(newValue)
  }

  useEffect(() => {
    mutate()
  }, [breedCount, legend, purity])

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
      <Filter
        updateBreedCount={handleUpdateBreedCount}
        updateLegend={handleUpdateLegend}
        updatePurity={handleUpdatePurity}
      />
      <CrabTokenChart chartData={renamedBuckets} />
    </>
  )
}

export default Home
