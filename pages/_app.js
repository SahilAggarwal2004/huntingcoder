// This file executes on every valid url and is responsible for rendering different components. SO to make our navbar appear on every page, we will add the navbar here
import Navbar from '../components/Navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <>
    <Navbar />
    <Component {...pageProps} />
  </>
}

export default MyApp
