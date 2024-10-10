import {
  createContext,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from 'react'
import { Album } from '../types/album'

type AlbumsContextType = {
  albums: Album[] | undefined
  setAlbums: React.Dispatch<SetStateAction<Album[] | undefined>>
}

const AlbumsContext = createContext<AlbumsContextType | undefined>(undefined)

export function AlbumsProvider({ children }: { children: React.ReactNode }) {
  const [albums, setAlbums] = useState<Album[]>()

  const value = useMemo(
    () => ({
      albums,
      setAlbums,
    }),
    [albums],
  )

  return (
    <AlbumsContext.Provider value={value}> {children} </AlbumsContext.Provider>
  )
}

export function useAlbums() {
  const context = useContext(AlbumsContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
