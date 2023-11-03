import 'raf/polyfill'

import { Provider } from 'app/provider'
import Head from 'next/head'
import React from 'react'
import type { SolitoAppProps } from 'solito'

export const metadata = {
  title: 'Next.js head starter kit with gluestack-ui',
  description:
    'A comprehensive starter kit to kick-start your next.js application using gluestack-ui - your one-stop solution for faster, smoother, and better web development.',
}

function MyApp({ Component, pageProps }: SolitoAppProps) {
  return (
    <>
      <Head>
        <title>Solito Example App</title>
        <meta
          name="description"
          content="Expo + Next.js with Solito. By Fernando Rojo."
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Provider>
          <Component {...pageProps} />
        </Provider>
      </body>
    </>
  )
}

export default MyApp
