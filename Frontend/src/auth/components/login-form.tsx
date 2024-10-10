import { Link } from 'react-router-dom'
import { useAuth } from '../hooks'
import { Action } from '@/ui/action'
import { Input } from '@/ui/input'
import { MusicIcon } from 'lucide-react'

export function LoginForm() {
  const { login } = useAuth()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    const username = formData.get('username') as string
    const password = formData.get('password') as string

    login(username, password)
  }
  return (
    <div className='flex min-h-screen flex-col bg-gray-100'>
      <header className='flex h-16 items-center px-4 lg:px-6'>
        <Link className='flex items-center justify-center' to='/'>
          <MusicIcon className='mr-2 h-6 w-6' />
          <span className='font-bold'>Music Radio Inc</span>
        </Link>
      </header>
      <main className='flex flex-1 items-center justify-center'>
        <div className='w-full max-w-md rounded-lg bg-white p-6 shadow-md'>
          <h1 className='mb-6 text-center text-2xl font-bold'>
            Log in to Music Radio Inc
          </h1>
          <form
            onSubmit={handleSubmit}
            className='space-y-4 [&>div>Input]:block'
          >
            <div className='space-y-2'>
              <label htmlFor='email'>Email</label>
              <Input name='username' placeholder='john doe' required />
            </div>
            <div className='space-y-2'>
              <label htmlFor='password'>Password</label>
              <Input
                name='password'
                type='password'
                placeholder='**********'
                required
              />
            </div>
            <Action type='submit' className='w-full'>
              Log in
            </Action>
          </form>
          <div className='mt-4 text-center'>
            <Link
              to='/forgot-password'
              className='text-sm text-primary hover:underline'
            >
              Forgot password?
            </Link>
          </div>
          <div className='mt-6 text-center'>
            <p className='text-sm text-gray-600'>
              Dont have an account?{' '}
              <Link to='/signup' className='text-primary hover:underline'>
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </main>
      <footer className='py-6 text-center text-sm text-gray-500'>
        © 2024 Music Radio Inc. All rights reserved.
      </footer>
    </div>
  )
}
