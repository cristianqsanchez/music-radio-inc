import { Album } from '../types'
import { useCart } from '../hooks'
import { AlbumCard } from './album'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/ui/sheet'
import { ShoppingCartIcon } from 'lucide-react'

export function Cart() {
  const { cart } = useCart()

  return (
    <Sheet>
      <SheetTrigger className='relative'>
        <span className='absolute -right-1/2 -top-1/2 size-4 rounded-full bg-red-600 text-xs text-background'>
          {cart?.length}
        </span>
        <ShoppingCartIcon className='h-5 w-5' />
        <span className='sr-only'>Shopping Cart</span>
      </SheetTrigger>
      {cart?.length ? <CardWithItems cart={cart} /> : <EmptyCart />}
    </Sheet>
  )
}

function CardWithItems({ cart }: { cart: Album[] }) {
  return (
    <SheetContent className='overflow-auto'>
      <SheetHeader>
        <SheetTitle>Your cart is packed with great music! Ready to complete your purchase?</SheetTitle>
      </SheetHeader>
      <ul className='mt-5 grid grid-cols-2 gap-4'>
        {cart.map((item) => (
          <li key={item.id}>
            <AlbumCard album={item} />
          </li>
        ))}
      </ul>
    </SheetContent>
  )
}

function EmptyCart() {
  return (
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Your cart is empty...</SheetTitle>
        <SheetDescription>
          but not your love for music! Browse our exclusive album collection and fill your cart with sounds that move you.
        </SheetDescription>
      </SheetHeader>
    </SheetContent>
  )
}
