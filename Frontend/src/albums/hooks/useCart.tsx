import { createContext, useContext, useMemo } from 'react'
import { Album } from '../types'
import { useAlbums } from './useAlbums'

type CartContextType = {
  cart: Album[] | undefined
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const { albums } = useAlbums()

  const cart = useMemo(() => {
    if (albums) return albums.filter((album) => album.isInCart)
  }, [albums])

  const value = useMemo(
    () => ({
      cart,
    }),
    [cart],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
