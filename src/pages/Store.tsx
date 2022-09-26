import React, { FC } from 'react'
import { ItemsList } from '../components/store/ItemsList'

export const Store: FC = () => {
  return (
    <>
      <h1>Store</h1> 

      <div>
        Filter by Category / Product search by name
      </div>

      <ItemsList />
    </>
  )
}
