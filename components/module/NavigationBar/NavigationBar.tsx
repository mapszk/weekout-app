import React, { useState } from "react"
import { StyleSheet, View } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"
import theme from "../../../theme/theme"
import LogoutModal from "../LogoutModal/LogoutModal"
import Button from "../../common/Button"
import Timer from "../Timer/Timer"
import { useHistory } from "react-router-native"

interface Props {
  day: string
  style?: any
}

const NavigationBar: React.FC<Props> = ({ style, day }) => {
  const history = useHistory()
  const [timerVisible, setTimerVisible] = useState<boolean>(false)
  const [modalVisible, setModalVisible] = useState<boolean>(false)
  return (
    <>
      <View style={[customStyles.navigation, style]}>
        <LogoutModal setVisible={setModalVisible} visible={modalVisible} />
        <Button icon onPress={() => setModalVisible(true)}>
          <MaterialIcons
            name="logout"
            size={30}
            color={theme.colors.primary[500]}
          />
        </Button>
        <Button icon onPress={() => setTimerVisible(!timerVisible)}>
          <MaterialIcons
            name="timer"
            size={30}
            color={theme.colors.primary[500]}
          />
        </Button>
        <Button onPress={() => history.push(`/edit/${day}`)} icon>
          <MaterialIcons
            name="edit"
            size={30}
            color={theme.colors.primary[500]}
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

export default NavigationBar
