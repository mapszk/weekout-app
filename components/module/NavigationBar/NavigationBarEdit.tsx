import React, { useState } from "react"
import { View, StyleSheet } from "react-native"
import Button from "../../common/Button"
import LogoutModal from "../LogoutModal/LogoutModal"
import { MaterialIcons } from "@expo/vector-icons"

import { useHistory } from "react-router-native"
import theme from "../../../theme/theme"
import CustomModal from "../../common/CustomModal"
import StyledText from "../../common/StyledText"
import Timer from "../Timer/Timer"

interface Props {
  day: string
  style?: any
}

const NavigationBarEdit: React.FC<Props> = ({ day, style }) => {
  const history = useHistory()
  const [modalExit, setModalExit] = useState<boolean>(false)
  const [timerVisible, setTimerVisible] = useState<boolean>(false)
  const [modalVisible, setModalVisible] = useState<boolean>(false)
  return (
    <>
      <View style={[customStyles.navigation, style]}>
        <CustomModal visible={modalExit}>
          <StyledText center>
            Are you sure you want to exit edit mode?
          </StyledText>
          <View style={{ flexDirection: "row", marginTop: 10 }}>
            <Button
              onPress={() => setModalExit(false)}
              ghostSecondary
              style={{ flex: 1, marginRight: 6 }}
            >
              Cancel
            </Button>
            <Button
              onPress={() => {
                setModalExit(false)
                history.push(`/day/${day}`)
              }}
              secondary
              style={{ flex: 1 }}
            >
              Exit
            </Button>
          </View>
        </CustomModal>
        <LogoutModal edit setVisible={setModalVisible} visible={modalVisible} />
        <Button icon onPress={() => setModalVisible(true)}>
          <MaterialIcons
            name="logout"
            size={30}
            color={theme.colors.secondary[500]}
          />
        </Button>
        <Button icon onPress={() => setTimerVisible(!timerVisible)}>
          <MaterialIcons
            name="timer"
            size={30}
            color={theme.colors.secondary[500]}
          />
        </Button>
        <Button onPress={() => setModalExit(true)} icon>
          <MaterialIcons
            name="edit-off"
            size={30}
            color={theme.colors.secondary[500]}
          />
        </Button>
      </View>
      <Timer visible={timerVisible} />
    </>
  )
}

const customStyles = StyleSheet.create({
  navigation: {
    backgroundColor: "white",
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 35,
  },
})

export default NavigationBarEdit
