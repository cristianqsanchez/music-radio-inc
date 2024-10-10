import { Navigate, Route, Routes } from 'react-router-dom'
import { LandingPage } from './albums/pages'
import { useAuth } from './auth/hooks/useAuth'
import { LoginPage, SignUpPage } from './auth/pages'

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user } = useAuth()

  if (!user) {
    return <Navigate to='/login' />
  }

  return children
}

function App() {
  return (
    <Routes>
      <Route
        path='/'
        element={
          <ProtectedRoute>
            <LandingPage />
          </ProtectedRoute>
        }
      />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/signup' element={<SignUpPage />} />
    </Routes>
  )
}

export default App
