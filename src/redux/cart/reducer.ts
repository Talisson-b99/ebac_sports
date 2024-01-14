import { createSlice } from '@reduxjs/toolkit'

interface Product {
  id: number
  nome: string
  imagem: string
  preco: number
}

interface ProductsState {
  products: Product[]
  cart: Product[]
  favoritos: Product[]
}

const initialState: ProductsState = {
  products: [
    {
      id: 1,
      nome: 'Bermuda Adidas Masculina',
      imagem: 'https://fake-api-tau.vercel.app/ebac_sports/bermuda.webp',
      preco: 129.9
    },

    {
      id: 2,
      nome: 'Camisa Corinthians 1 - 22/23',
      imagem: 'https://fake-api-tau.vercel.app/ebac_sports/corinthians.webp',
      preco: 249.9
    },
    {
      id: 3,
      nome: 'Bola de Vôlei Penalty',
      imagem: 'https://fake-api-tau.vercel.app/ebac_sports/bola.webp',
      preco: 139.9
    },
    {
      id: 4,
      nome: 'Camisa Internacional 2 - 22/23',
      imagem: 'https://fake-api-tau.vercel.app/ebac_sports/internacional.webp',
      preco: 249.9
    },
    {
      id: 5,
      nome: 'Patins Preto',
      imagem: 'https://fake-api-tau.vercel.app/ebac_sports/patins.webp',
      preco: 399.9
    },
    {
      id: 6,
      nome: 'Camisa Kansas City Chiefs',
      imagem: 'https://fake-api-tau.vercel.app/ebac_sports/camisa_kansas.webp',
      preco: 379.9
    },
    {
      id: 7,
      nome: 'Camisa Real Madrid 1 - 22/23',
      imagem: 'https://fake-api-tau.vercel.app/ebac_sports/real_madrid.webp',
      preco: 349.9
    },
    {
      id: 8,
      nome: 'Camisa Milan 1 - 22/23',
      imagem: 'https://fake-api-tau.vercel.app/ebac_sports/milan.webp',
      preco: 349.9
    }
  ],
  cart: [],
  favoritos: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action) => {
      const productAlready = state.cart.some(
        (product) => product.id === action.payload.id
      )
      if (!productAlready) {
        state.cart.push(action.payload)
      } else {
        alert('Produto já foi adicionado ao carrinho')
      }
    },
    favoritar: (state, action) => {
      const productAlready = state.favoritos.some(
        (product) => product.id === action.payload.id
      )
      if (!productAlready) {
        state.favoritos.push(action.payload)
      }
    },
    desfavoritar: (state, action) => {
      const newState = state.favoritos.filter(
        (favorito) => favorito.id !== action.payload.id
      )
      state.favoritos = newState
    }
  }
})

export default cartSlice.reducer

export const { add, favoritar, desfavoritar } = cartSlice.actions
