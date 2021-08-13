import React from "react"
import { StyleSheet, View } from "react-native"
import { useHistory } from "react-router-native"
import Button from "../components/common/Button"
import Logo from "../components/common/Logo"
import StyledText from "../components/common/StyledText"

const Welcome: React.FC = () => {
  const history = useHistory()
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Logo />
      </View>
      <StyledText third semibold style={styles.desc} center>
        Welcome the Weekout, the best app for your week training
      </StyledText>
      <View style={styles.buttonContainer}>
        <Button onPress={() => history.push("/login")} primary mb={6}>
          Log in
        </Button>
        <Button onPress={() => history.push("/register")} ghostPrimary>
          Register
        </Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    justifyContent: "center",
  },
  logo: {
    marginBottom: 15,
    height: 50,
    paddingHorizontal: 75,
  },
  desc: {
    paddingHorizontal: 25,
  },
  buttonContainer: {
    paddingHorizontal: 85,
    marginTop: 20,
  },
})

export default Welcome
