import React from "react"
import { ActivityIndicator, View } from "react-native"
import theme from "../theme/theme"

const Loading: React.FC = () => {
  return (
    <View style={{ flex: 1, height: "100%", justifyContent: "center" }}>
      <ActivityIndicator size="large" color={theme.colors.primary[500]} />
    </View>
  )
}

export default Loading
