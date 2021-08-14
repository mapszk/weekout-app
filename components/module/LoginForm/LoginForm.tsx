import React, { useState } from "react"
import { StyleSheet, TouchableOpacity, View } from "react-native"
import Toast from "react-native-root-toast"
import { useHistory } from "react-router-native"
import Button from "../../common/Button"
import StyledInput from "../../common/StyledInput"
import StyledText from "../../common/StyledText"
import { logInWithEmail } from "./logInWithEmail"

const LoginForm: React.FC = () => {
  const history = useHistory()
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const handleLogin = async () => {
    const { msg, status } = await logInWithEmail(
      email,
      password,
      setIsSubmitting
    )
    // eslint-disable-next-line no-unused-vars
    const toast = Toast.show(msg, {
      duration: Toast.durations.LONG,
      backgroundColor: status === "success" ? "green" : "red",
      position: Toast.positions.TOP + 25,
      shadow: false,
      opacity: 1,
    })
    if (status === "success") history.push("/")
  }

  return (
    <>
      <Toast></Toast>
      <StyledText heading center primary>
        Log in
      </StyledText>
      <StyledInput
        value={email}
        onChangeText={setEmail}
        label="Email"
        mb={10}
      />
      <StyledInput
        value={password}
        onChangeText={setPassword}
        label="Password"
        password
      />
      <View style={styles.buttonContainer}>
        <Button
          isLoading={isSubmitting}
          onPress={() => history.push("/register")}
          ghostPrimary
          style={{ flex: 1, marginRight: 5 }}
        >
          With Google
        </Button>
        <Button
          isLoading={isSubmitting}
          onPress={handleLogin}
          primary
          style={{ flex: 1 }}
        >
          Log in
        </Button>
      </View>
      <TouchableOpacity
        style={styles.registerLink}
        onPress={() => history.push("/register")}
      >
        <StyledText center>{"I don't have an account"}</StyledText>
      </TouchableOpacity>
    </>
  )
}

const styles = StyleSheet.create({
  registerLink: {
    marginTop: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 15,
  },
})

export default LoginForm
