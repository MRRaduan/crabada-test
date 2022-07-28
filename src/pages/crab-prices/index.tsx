import type { NextPage } from 'next'
import ProfileTitle from 'components/ProfileTitle'
import Filter from 'components/Filter'
import CrabTokenChart from 'components/CrabTokenChart'

const Home: NextPage = () => {
  return (
    <>
      <ProfileTitle />
      <Filter />
      <CrabTokenChart />
    </>
  )
}

export default Home
