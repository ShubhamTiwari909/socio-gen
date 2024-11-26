import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface Auth {
  authDetails: {
    uid: string
    accessToken: string
    displayName: string
    email: string
    photoURL: string
  }
  updateAuthDetails: (auth: Auth) => void
}

export const userAuthDetails = create<Auth>()(
  devtools(
    persist(
      (set) => ({
        authDetails: {
          uid: '',
          accessToken: '',
          displayName: '',
          email: '',
          photoURL: '',
        },
        updateAuthDetails: (auth) => set({ authDetails: auth.authDetails }),
      }),
      {
        name: 'bear-storage',
      },
    ),
  ),
)