import React, { useEffect, useState } from "react"
import { firebaseAuth } from "../firebase/firebase"
import Loading from "../pages/Loading"

export const AuthContext = React.createContext<any>(null)

const AuthContextProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState<boolean>(true)
  useEffect((): any => {
    const unsubscribe = firebaseAuth.onAuthStateChanged((user) => {
      if (user) {
        setLoading(false)
        setUser(user)
      } else {
        setUser(null)
        setLoading(false)
      }
    })
    return () => unsubscribe
  }, [])
  return (
    <AuthContext.Provider value={{ user }}>
      {loading ? <Loading /> : children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
