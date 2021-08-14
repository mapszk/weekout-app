import React from "react"
import { StyleSheet, View } from "react-native"
import RegisterForm from "../components/module/RegisterForm/RegisterForm"

const Register: React.FC = () => {
  return (
    <View style={styles.container}>
      <RegisterForm />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    justifyContent: "center",
  },
})

export default Register
