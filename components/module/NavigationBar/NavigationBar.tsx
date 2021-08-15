import React, { useState } from "react"
import { View } from "react-native"
import { useLocation } from "react-router-native"
import { MaterialIcons } from "@expo/vector-icons"
import theme from "../../../theme/theme"
import LogoutModal from "../LogoutModal/LogoutModal"

interface Props {
  style?: any
}

const NavigationBar: React.FC<Props> = ({ style }) => {
  const [modalVisible, setModalVisible] = useState<boolean>(false)
  const { pathname } = useLocation()
  return (
    <View
      style={[
        {
          height: 40,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 35,
        },
        style,
      ]}
    >
      <LogoutModal setVisible={setModalVisible} visible={modalVisible} />
      <MaterialIcons
        name="logout"
        size={30}
        color={theme.colors.primary[500]}
        onPress={() => setModalVisible(true)}
      />
      <MaterialIcons name="timer" size={30} color={theme.colors.primary[500]} />
      <MaterialIcons
        name={pathname.includes("edit") ? "edit-off" : "edit"}
        size={30}
        color={theme.colors.primary[500]}
      />
    </View>
  )
}

export default NavigationBar
