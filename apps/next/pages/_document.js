import * as React from 'react'
import { Html, Head, Main, NextScript } from 'next/document'
import { AppRegistry } from 'react-native-web'
import { flush } from '@gluestack-style/react'

function Document() {
  return (
    <Html className="gs" lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

Document.getInitialProps = async ({ renderPage }) => {
  AppRegistry.registerComponent('Main', () => Main)
  const { getStyleElement } = AppRegistry.getApplication('Main')
  const page = await renderPage()
  const styles = [getStyleElement(), ...flush()]
  return { ...page, styles: React.Children.toArray(styles) }
}

export default Document
