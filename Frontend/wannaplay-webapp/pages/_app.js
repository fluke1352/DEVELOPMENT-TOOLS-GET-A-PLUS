import '../styles/globals.css'
import React from 'react';
import Topbar from '../components/topbar';


function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Topbar></Topbar>
      
      <Component {...pageProps} />
    </div>
  )
}


export default MyApp



