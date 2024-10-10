import { createContext, useContext, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { loginService } from '../services'
import { useLocalStorage } from './useLocalStorage'
import { toast } from 'sonner'

interface User {
  id: string
  token: string
  username: string
  email: string
  address: string
  city: string
  phone: string
}

interface AuthContextType {
  user: User | null
  login: (username: string, password: string) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useLocalStorage('user', null)
  const navigate = useNavigate()

const login = async (username: string, password: string) => {
  try {
    const data = await loginService({ username, password })

    if (!data) {
      toast.error('Username or password are wrong')
      return
    }

    setUser(data)

  } catch (error) {
    toast.error('An error occurred during login')
  }
}


  const logout = () => {
    setUser(null)
    navigate('/login', { replace: true })
  }

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
    }),
    [user],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
