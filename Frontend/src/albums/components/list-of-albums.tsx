import { useEffect } from 'react'
import { Album } from '../types'
import { useAuth } from '@/auth/hooks'
import { useAlbums } from '../hooks'
import { AlbumCard } from './album'

export function ListOfAlbums() {
  const { user, logout } = useAuth()
  const { albums, setAlbums } = useAlbums()

  useEffect(() => {
    fetch('http://localhost:5243/api/albums', {
      headers: {
        Authorization: `Bearer ${user!.token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const albums = data.map((album: Album) => ({
          ...album,
          isInCart: false,
        }))

        setAlbums(albums)
      })
      .catch(() => logout())
  }, [])

  const handleAddToCart = (album) => {
    setAlbums((prevAlbums) =>
      prevAlbums.map((a) =>
        a.id === album.id ? { ...a, isInCart: !a.isInCart } : a,
      ),
    )
  }

  return (
    <div className='mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
      {albums?.map((album) => (
        <AlbumCard key={album.id} album={album} handler={handleAddToCart} />
      ))}
    </div>
  )
}
