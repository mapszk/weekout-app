import React from "react"
import { NativeRouter, Route, Switch } from "react-router-native"
import Welcome from "./Welcome"

const Main: React.FC = () => {
  return (
    <NativeRouter>
      <Switch>
        <Route path="/">
          <Welcome />
        </Route>
      </Switch>
    </NativeRouter>
  )
}

export default Main
