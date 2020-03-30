import React from 'react'
import { Logo } from './components/Logo'
import { GlobalStyle } from './styles/GlobalStyles'
import { PhotoCardWithQuery } from './container/PhotoCardWithQuery'
import { Home } from './pages/Home'

import { Router } from '@reach/router'

export const App = () => {
  const urlParms = new window.URLSearchParams(window.location.search)
  const detailId = urlParms.get('detail')

  return (
    <>
      <GlobalStyle />
      <Logo />
      {
        detailId
          ? <PhotoCardWithQuery id={detailId} />
          : <Router>
            <Home path='/' />
            <Home path='/pet/:categoryId' />
          </Router>
      }
    </>
  )
}
