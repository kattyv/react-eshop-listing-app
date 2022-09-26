import React, { ReactNode, createContext, useContext, useState  } from 'react'
import { Product } from '../models/Product'
import useSWR from 'swr'
import axios from 'axios'

// type definitions
type StoreContextProviderProps = { children: ReactNode }

type StoreContext = {
  getItems: () => { products: Product[], isLoading: boolean, isError: boolean }
  getItem: (id: number) => { product: Product, isLoading: boolean, isError: boolean }
}
// create ontext
const StoreContext = createContext({} as StoreContext);

// custom hook for using context
export const useStoreContext = () => {
  return useContext(StoreContext);
}
// context provider
export const StoreContextProvider = ({ children }: StoreContextProviderProps) => {
  //const [product, setProduct] = useState({} as Product);
  //const [products, setProducts] = useState<Product[]>([]);
  
  // fetcher function for SWR
  const fetcher = async (api_url: string) => {
    return await axios.get(api_url).then(result => result.data)
  }
  // fetch all product from the API
  const getItems = () => {
    const {data, error} = useSWR('https://fakestoreapi.com/products', fetcher)

    return {
      products: data,
      isLoading: !error && !data,
      isError: error
    }
  }
  // fetch single product from the API
  const getItem = (id: number) => {
    const {data, error} = useSWR(`https://fakestoreapi.com/products/${+id}`, fetcher)

    return {
      product: data,
      isLoading: !error && !data,
      isError: error
    }
  }

  return (
    <StoreContext.Provider value={{
      getItems,
      getItem
    }}>
      { children }
    </StoreContext.Provider>
  )
}
