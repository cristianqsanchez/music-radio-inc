import { Navigate } from 'react-router-dom'
import { SignUpForm } from '../components'
import { useAuth } from '../hooks'

export function SignUpPage() {
  const { user } = useAuth()

  if (user) {
    return <Navigate to='/' />
  }

  return <SignUpForm />
}
