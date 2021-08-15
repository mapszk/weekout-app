/* eslint-disable camelcase */
import React from "react"
import Main from "./pages/Main"
import { NativeRouter } from "react-router-native"
import { RootSiblingParent } from "react-native-root-siblings"
import AuthContextProvider from "./contexts/AuthContext"
import {
  Poppins_200ExtraLight,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins"
import { useFonts } from "expo-font"
import AppLoading from "expo-app-loading"
import { View } from "react-native"

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    Poppins_200ExtraLight,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  })
  if (!fontsLoaded) return <AppLoading />
  return (
    <AuthContextProvider>
      <RootSiblingParent>
        <NativeRouter>
          <View style={{ marginHorizontal: 10 }}>
            <Main />
          </View>
        </NativeRouter>
      </RootSiblingParent>
    </AuthContextProvider>
  )
}

export default App
