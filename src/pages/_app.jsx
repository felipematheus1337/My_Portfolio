import Header from '../../components/Header'
import Head from "next/head"
import '../../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
     <title>Felipe | dev</title>
    </Head>
    <Header/>
    <Component {...pageProps} />
    </>
 
  ) 
}

export default MyApp
