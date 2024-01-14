import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface Product {
  id: number
  nome: string
  imagem: string
  preco: number
}

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/'
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<Array<Product>, void>({
      query: () => 'ebac_sports'
    })
  })
})

export const { useGetProductsQuery } = api
