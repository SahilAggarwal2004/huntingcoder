// This file executes on every valid url and is responsible for rendering different components. SO to make our navbar appear on every page, we will add the navbar here
import { useRouter } from 'next/router'
import Navbar from '../components/Navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  // router pathname is "/_error" in case of any error or 404 in nextjs
  return (<>
    {router.pathname !== "/_error" && <Navbar />}
    <Component {...pageProps} />
  </>)
}

export default MyApp
