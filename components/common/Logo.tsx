import React from "react"
import { Image, StyleSheet } from "react-native"

const Logo: React.FC = () => {
  return (
    <Image
      style={styles.image}
      resizeMode="contain"
      source={require("../../assets/logo.png")}
    />
  )
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
  },
})

export default Logo
