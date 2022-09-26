import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { StoreContextProvider } from '../../context/StoreContext'

export const StoreWrapper: FC = () => {
  
  return (
    <>
    <StoreContextProvider>
      <Outlet />
    </StoreContextProvider>
    </>
  )
}
