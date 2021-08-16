import React from "react"
import { View } from "react-native"
import { Route, Switch } from "react-router-native"
import Day from "./Day"
import DayEdit from "./DayEdit"
import Index from "./Index"
import Login from "./Login"
import Register from "./Register"
import Welcome from "./Welcome"

const Main: React.FC = () => {
  return (
    <View style={{ height: "100%" }}>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route path="/welcome" component={Welcome} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/day/:day" component={Day} />
        <Route path="/edit/:day" component={DayEdit} />
      </Switch>
    </View>
  )
}

export default Main
