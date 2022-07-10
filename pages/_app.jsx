import Head from 'next/head'

import '../src/styles.css'

function App ({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Mario Jump</title>

      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App