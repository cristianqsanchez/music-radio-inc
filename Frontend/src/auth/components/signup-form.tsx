import { Link, useNavigate } from 'react-router-dom'
import { signupService } from '../services'
import { Action } from '@/ui/action'
import { Input } from '@/ui/input'
import { toast } from 'sonner'
import { MusicIcon } from 'lucide-react'

export function SignUpForm() {
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    const username = formData.get('username') as string
    const id = formData.get('id') as string
    const email = formData.get('email') as string
    const password = formData.get('password') as string
    const address = formData.get('address') as string
    const city = formData.get('city') as string
    const phone = formData.get('phone') as string

    signupService({ id, username, email, password, address, city, phone })
      .then((success) => {
        if (success) {
          navigate('/login')
        } else {
          toast('This username is already taken')
        }
      })
      .catch(() => {
        toast('This username is already taken')
      })
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
        <div className='w-full max-w-lg rounded-lg bg-white p-6 shadow-md'>
          <h1 className='mb-6 text-center text-2xl font-bold'>
            Create your Music Radio Inc account
          </h1>
          <div className='mt-6 text-center'>
            <form className='flex flex-col gap-5' onSubmit={handleSubmit}>
              <div className='grid gap-4 [&>div>label]:float-left'>
                <div className='grid grid-cols-2 gap-4 [&>div>label]:float-left'>
                  <div className='space-y-2'>
                    <label htmlFor='id'>ID Number</label>
                    <Input name='id' min={4} max={15} placeholder='9473143' required />
                  </div>

                  <div className='space-y-2'>
                    <label htmlFor='name'>Username</label>
                    <Input
                      id='username'
                      name='username'
                      min={3}
                      max={50}
                      placeholder='John Doe'
                      required
                    />
                  </div>
                </div>

                <div className='space-y-2'>
                  <label htmlFor='email'>Email</label>
                  <Input
                    id='email'
                    name='email'
                    max={50}
                    type='email'
                    placeholder='johndoe@example.com'
                    required
                  />
                </div>

                <div className='space-y-2'>
                  <label htmlFor='password'>Password</label>
                  <Input
                    id='passowrd'
                    name='password'
                    max={20}
                    type='password'
                    placeholder='**********'
                    required
                  />
                </div>

                <div className='space-y-2'>
                  <label htmlFor='address'>Address</label>
                  <Input
                    id='address'
                    name='address'
                    max={300}
                    placeholder='Cra 80 - 45A'
                    required
                  />
                </div>

                <div className='grid grid-cols-2 gap-4 [&>div>label]:float-left'>
                  <div className='space-y-2'>
                    <label htmlFor='city'>City</label>
                    <Input
                      id='city'
                      name='city'
                      max={20}
                      placeholder='Medellín'
                    />
                  </div>

                  <div className='space-y-2'>
                    <label htmlFor='phone'>Phone</label>
                    <Input
                      id='phone'
                      name='phone'
                      max={20}
                      type='tel'
                      placeholder='3025672149'
                    />
                  </div>
                </div>
              </div>
              <Action>Sign in</Action>
            </form>
            <p className='mt-5 text-sm text-gray-600'>
              Already have an account?{' '}
              <Link to='/login' className='text-primary hover:underline'>
                Log in
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
