import React from "react"
import { StyleSheet, View } from "react-native"
import LoginForm from "../components/module/LoginForm/LoginForm"

const Login: React.FC = () => {
  return (
    <View style={styles.container}>
      <LoginForm />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    justifyContent: "center",
  },
})

export default Login
