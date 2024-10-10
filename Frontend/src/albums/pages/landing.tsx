import { Link } from 'react-router-dom'
import { AlbumsProvider } from '../hooks'
import { CartProvider } from '../hooks'
import { ListOfAlbums } from '../components'
import { Header } from '../components'
import { Action } from '@/ui/action'

export function LandingPage() {
  return (
    <AlbumsProvider>
      <CartProvider>
        <div className='flex min-h-screen flex-col'>
          <Header />
          <main className='flex-1'>
            <section className='w-full bg-black py-12 text-white md:py-24 lg:py-32 xl:py-48'>
              <div className='m-auto px-4 md:px-6'>
                <div className='flex flex-col items-center space-y-4 text-center'>
                  <div className='space-y-2'>
                    <h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none'>
                      Discover Your Next Favorite Album
                    </h1>
                    <p className='mx-auto max-w-[700px] text-gray-300 md:text-xl'>
                      Explore, purchase, and enjoy the best music from around
                      the world. Your musical journey starts here.
                    </p>
                  </div>
                  <div className='space-x-4'>
                    <Action>Start Exploring</Action>
                    <Action variant='secondary'>Learn More</Action>
                  </div>
                </div>
              </div>
            </section>
            <section className='w-full bg-gray-100 py-12 md:py-24 lg:py-32'>
              <div className='mx-auto px-4 md:px-6'>
                <h2 className='mb-8 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
                  Featured Albums
                </h2>
                <ListOfAlbums />
              </div>
            </section>
          </main>
          <footer className='flex w-full shrink-0 flex-col items-center gap-2 border-t px-4 py-6 sm:flex-row md:px-6'>
            <p className='text-xs text-gray-500'>
              © 2024 Music Radio Inc. All rights reserved.
            </p>
            <nav className='flex gap-4 sm:ml-auto sm:gap-6'>
              <Link
                className='text-xs underline-offset-4 hover:underline'
                to='#'
              >
                Terms of Service
              </Link>
              <Link
                className='text-xs underline-offset-4 hover:underline'
                to='#'
              >
                Privacy
              </Link>
            </nav>
          </footer>
        </div>
      </CartProvider>
    </AlbumsProvider>
  )
}
