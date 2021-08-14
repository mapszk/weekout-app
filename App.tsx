import React from "react"
import Main from "./pages/Main"
import { View } from "react-native"
import { NativeRouter } from "react-router-native"
import { RootSiblingParent } from "react-native-root-siblings"

const App: React.FC = () => {
  return (
    <RootSiblingParent>
      <View style={{ paddingHorizontal: 10 }}>
        <NativeRouter>
          <Main />
        </NativeRouter>
      </View>
    </RootSiblingParent>
  )
}

export default App
