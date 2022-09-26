import React, { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Store } from '../pages/Store'
import { StoreWrapper } from '../components/store/StoreWrapper'
import { ItemsList } from '../components/store/ItemsList'
import { ItemDetails } from '../components/store/ItemDetails'

export const AppRoutes: FC = () => {
  return (
    <Routes>
      <Route path='/' element={  <Home /> } />
      <Route path='/store' element={ <StoreWrapper /> }>
        <Route index element={ <ItemsList /> } />
        <Route path=':id' element={ <ItemDetails /> } />
      </Route>
      <Route path='*' element={ <h1>404: Page not found</h1> } />
    </Routes>
  )
}
