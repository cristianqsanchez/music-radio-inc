import { Album } from '../types'
import { Action } from '@/ui/action'
import { PlusIcon, ShoppingCart } from 'lucide-react'

type Props = {
  album: Album
  handler?: (album: Album) => void
}

export function AlbumCard({ album, handler }: Props) {
  return (
    <div
      key={album.id}
      className='group relative overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-105'
    >
      <img
        src={album.cover}
        alt={`Album ${album.name}`}
        width={400}
        height={400}
        className='h-64 w-full object-cover'
      />
      <div
        className={`absolute inset-0 flex flex-col justify-between bg-black bg-opacity-50 p-4 opacity-0 transition-opacity group-hover:opacity-100`}
      >
        {handler && (
          <Action
            variant='outline'
            size='icon'
            className='place-self-end'
            onClick={() => handler(album)}
          >
            {album.isInCart ? <ShoppingCart /> : <PlusIcon />}
          </Action>
        )}

        <div>
          <h3 className='text-lg font-semibold text-white'>{album.name}</h3>
          <p className='text-gray-300'>{album.artist}</p>
        </div>
      </div>
    </div>
  )
}
