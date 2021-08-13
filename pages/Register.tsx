import React from "react"
import { StyleSheet, TouchableOpacity, View } from "react-native"
import { useHistory } from "react-router-native"
import Button from "../components/common/Button"
import StyledInput from "../components/common/StyledInput"
import StyledText from "../components/common/StyledText"

const Register: React.FC = () => {
  const history = useHistory()
  return (
    <View style={styles.container}>
      <StyledText heading center primary>
        Register
      </StyledText>
      <StyledInput label="Email" mb={10} />
      <StyledInput label="Password" password />
      <View style={styles.buttonContainer}>
        <Button
          onPress={() => history.push("/register")}
          ghostPrimary
          style={{ flex: 1, marginRight: 5 }}
        >
          With Google
        </Button>
        <Button primary style={{ flex: 1 }}>
          Create account
        </Button>
      </View>
      <TouchableOpacity
        style={styles.registerLink}
        onPress={() => history.push("/login")}
      >
        <StyledText center>I have an account</StyledText>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  registerLink: {
    marginTop: 20,
  },
  container: {
    height: "100%",
    justifyContent: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 15,
  },
})

export default Register
