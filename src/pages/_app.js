import React from 'react'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../styles/global'

function App({ Component, pageProps }) {
  return <ThemeProvider>
    <Component {...pageProps} />
    <GlobalStyle />
  </ThemeProvider>
}

export default App
