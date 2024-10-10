import { User } from "../types"

interface LoginDto {
  username: string
  password: string
}

export async function loginService(user: LoginDto) {
  try {
    const res = await fetch('http://localhost:5243/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })

    if (!res.ok) {
      return null
    }

    const data = await res.json()

    if (!data) {
      return null
    }

    return data
  } catch (error) {
    throw new Error('Error during login')
  }
}


export async function signupService(user: User) {
  try {
    const res = await fetch('http://localhost:5243/user/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })

    return res.ok
  } catch {
    throw new Error('An error occurred during signup')
  }
}
