import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from '@/styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>React Boilerplate</title>
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content="Sample of headless app" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
