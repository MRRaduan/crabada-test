import type { NextPage } from 'next'
import CrabadaTopNavBar from 'components/CrabadaTopNavbar'
import ProfileTitle from 'components/ProfileTitle'

const Home: NextPage = () => {
  return (
    <>
      <CrabadaTopNavBar />
      <ProfileTitle />
    </>
  )
}

export default Home
