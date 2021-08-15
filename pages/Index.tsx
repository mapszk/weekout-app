import React from "react"
import { Redirect } from "react-router-native"
import { useAuthContext } from "../hooks/useAuthContext"

const Index = () => {
  const getDestination = (): string => {
    const date = new Date(Date.now())
    switch (date.getDay()) {
      case 0:
        return "sunday"
      case 1:
        return "monday"
      case 2:
        return "tuesday"
      case 3:
        return "wednesday"
      case 4:
        return "thursday"
      case 5:
        return "friday"
      case 6:
        return "saturday"
      default:
        return "monday"
    }
  }
  const { user } = useAuthContext()
  if (!user) return <Redirect to="/welcome" />
  else return <Redirect to={`/day/saturday`} />
}

export default Index
