import { Link } from 'react-router-dom'
import { Cart } from './cart'
import { MusicIcon } from 'lucide-react'

export function Header() {
  return (
    <header className='sticky top-0 z-50 flex h-16 items-center justify-between bg-background px-4 lg:px-6'>
      <Link className='flex items-center justify-center' to='#'>
        <MusicIcon className='mr-2 h-6 w-6' />
        <span className='font-bold'>Music Radio Inc</span>
      </Link>
      <Cart />
    </header>
  )
}
