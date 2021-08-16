import React from "react"
import { View, StyleSheet, Modal } from "react-native"

interface Props {
  visible: boolean
}

const CustomModal: React.FC<Props> = ({ children, visible }) => {
  return (
    <Modal transparent={true} animationType="fade" visible={visible}>
      <View style={customStyles.centeredView}>
        <View style={customStyles.modal}>{children}</View>
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
})

export default CustomModal
