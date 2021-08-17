import React, { useState } from "react"
import { StyleSheet, View, ActivityIndicator } from "react-native"
import { useParams } from "react-router-native"
import DayHeader from "../components/module/DayHeader/DayHeader"
import NavigationBarEdit from "../components/module/NavigationBar/NavigationBarEdit"
import VolumePicker from "../components/module/VolumePicker/VolumePicker"
import Constants from "expo-constants"
import theme from "../theme/theme"
import { DayData } from "../types/DayData"
import { useGetDay } from "../hooks/useGetDay"
import { useAuthContext } from "../hooks/useAuthContext"
import ExerciseTableEdit from "../components/module/ExerciseTableEdit/ExerciseTableEdit"

const DayEdit: React.FC = () => {
  const [activeVolume, setActiveVolume] = useState("NONE")
  const { user } = useAuthContext()
  const { day } = useParams<{ day: string }>()
  const { data, loading } = useGetDay(user.uid, day)

  return (
    <View style={customStyles.container}>
      <DayHeader day={day} edit />
      <VolumePicker
        activeVolume={activeVolume}
        setActiveVolume={setActiveVolume}
        style={customStyles.volumePicker}
      />
      {loading ? (
        <View style={customStyles.loader}>
          <ActivityIndicator color={theme.colors.secondary[500]} size="large" />
        </View>
      ) : (
        <ExerciseTableEdit
          style={{ flex: 10 }}
          setActiveVolume={setActiveVolume}
          activeVolume={activeVolume}
          dayData={data as DayData}
        />
      )}
      <NavigationBarEdit day={day} />
    </View>
  )
}

const customStyles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
  loader: {
    flex: 10,
    paddingTop: 150,
  },
  volumePicker: {
    alignItems: "center",
    flex: 1,
    marginBottom: 15,
    marginTop: 10,
  },
})

export default DayEdit
