import React from 'react'
import { Logo } from './components/Logo'
import { ListOfCategories } from './components/ListOfCategories'
import { ListOfPhotoCards } from './container/ListOfPhotoCards'
import { GlobalStyle } from './styles/GlobalStyles'
import { PhotoCardWithQuery } from './container/PhotoCardWithQuery'

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
          : <>
            <ListOfCategories />
            <ListOfPhotoCards categoryId={2} />
            </>
      }
    </>
  )
}
