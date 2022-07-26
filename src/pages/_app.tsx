import '../styles/globals.css'
import type { AppProps } from 'next/app'
import GlobalStyles from 'styles/global'
import Head from 'next/head'
import SideNavBar from 'components/SideNavBar'
import * as S from '../styles/styled'
import CrabadaTopNavBar from 'components/CrabadaTopNavbar'
import Footer from 'components/Footer'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Crabada - Crab Prices</title>
        <link rel="shortcut icon" href="favicon.png" />
        <link rel="apple-touch-icon" href="favicon.png" />
        <meta
          name="description"
          content="Your GameFi hub. Providing web3 gamers with all the necessary tools, insights, analytics, and information to make better decisions in web3 gaming."
        />
      </Head>
      <GlobalStyles />
      <SideNavBar />
      <S.Content>
        <CrabadaTopNavBar />
        <Component {...pageProps} />
      </S.Content>
      <Footer />
    </>
  )
}

export default App
