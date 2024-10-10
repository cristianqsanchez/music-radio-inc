import { Navigate } from 'react-router-dom'
import { LoginForm } from '../components'
import { useAuth } from '../hooks'

export function LoginPage() {
  const { user } = useAuth()

  if (user) {
    return <Navigate to='/' />
  }

  return <LoginForm />
}
