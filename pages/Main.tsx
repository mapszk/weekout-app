import React, { useEffect } from "react"
import { BackHandler } from "react-native"
import { Route, Switch, useHistory } from "react-router-native"
import Day from "./Day"
import DayEdit from "./DayEdit"
import Login from "./Login"
import Register from "./Register"
import Welcome from "./Welcome"

const Main: React.FC = () => {
  const history = useHistory()
  useEffect(() => {
    const handleBack = () => {
      history.go(-1)
      return true
    }
    BackHandler.addEventListener("hardwareBackPress", handleBack)
    return () =>
      BackHandler.removeEventListener("hardwareBackPress", handleBack)
  }, [])
  return (
    <Switch>
      <Route exact path="/" component={Welcome} />
      <Route path="/welcome" component={Welcome} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/day/:day" component={Day} />
      <Route path="/day/:day/edit" component={DayEdit} />
    </Switch>
  )
}

export default Main
