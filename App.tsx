import React from "react"
import Main from "./pages/Main"
import { View } from "react-native"
import { NativeRouter } from "react-router-native"

const App: React.FC = () => {
  return (
    <View style={{ paddingHorizontal: 10 }}>
      <NativeRouter>
        <Main />
      </NativeRouter>
    </View>
  )
}

export default App
