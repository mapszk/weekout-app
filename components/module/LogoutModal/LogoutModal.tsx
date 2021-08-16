import React, { useState } from "react"
import { Modal, StyleSheet, View } from "react-native"
import Toast from "react-native-root-toast"
import { useHistory } from "react-router-native"
import { firebaseAuth } from "../../../firebase/firebase"
import Button from "../../common/Button"
import StyledText from "../../common/StyledText"

interface Props {
  visible: boolean
  setVisible: (value: boolean) => void
}

const LogoutModal: React.FC<Props> = ({ visible, setVisible }) => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const history = useHistory()
  const handleLogOut = async () => {
    return await firebaseAuth
      .signOut()
      .then(() => {
        history.push("/welcome")
        setIsSubmitting(false)
      })
      .catch((err) => {
        // eslint-disable-next-line no-unused-vars
        const toast = Toast.show(err.message, {
          duration: Toast.durations.LONG,
          backgroundColor: "red",
          position: Toast.positions.TOP + 25,
          shadow: false,
          opacity: 1,
        })
        setIsSubmitting(false)
      })
  }
  return (
    <Modal transparent={true} animationType="fade" visible={visible}>
      <View style={customStyles.centeredView}>
        <View style={customStyles.modal}>
          <StyledText center>Are you sure you want to log out?</StyledText>
          <View style={customStyles.buttonContainer}>
            <Button
              isLoading={isSubmitting}
              style={{ flex: 1, marginRight: 5 }}
              onPress={() => setVisible(false)}
              ghostPrimary
            >
              Cancel
            </Button>
            <Button
              isLoading={isSubmitting}
              onPress={handleLogOut}
              style={{ flex: 1 }}
              primary
            >
              Log out
            </Button>
          </View>
        </View>
      </View>
    </Modal>
  )
}

const customStyles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
  },
  modal: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 25 },
    shadowOpacity: 0.25,
    elevation: 15,
    marginHorizontal: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 15,
    paddingHorizontal: 20,
  },
})

export default LogoutModal
