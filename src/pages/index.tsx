import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import SideNavBar from 'components/SideNavBar'
import CrabadaTopNavBar from 'components/CrabadaTopNavbar'

const Home: NextPage = () => {
  return (
    <>
      <CrabadaTopNavBar />
    </>
  )
}

export default Home
