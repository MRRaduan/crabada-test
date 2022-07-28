import type { NextPage } from 'next'
import ProfileTitle from 'components/ProfileTitle'
import Filter from 'components/Filter'

const Home: NextPage = () => {
  return (
    <>
      <ProfileTitle />
      <Filter />
    </>
  )
}

export default Home
