import React, { useState } from "react"
import { ActivityIndicator, StyleSheet, View } from "react-native"
import { useParams } from "react-router-native"
import VolumePicker from "../components/module/VolumePicker/VolumePicker"
import { useAuthContext } from "../hooks/useAuthContext"
import Constants from "expo-constants"
import ExerciseTable from "../components/module/ExerciseTable/ExerciseTable"
import { useGetDay } from "../hooks/useGetDay"
import NavigationBar from "../components/module/NavigationBar/NavigationBar"
import DayHeader from "../components/module/DayHeader/DayHeader"
import { DayData } from "../types/DayData"
import theme from "../theme/theme"

interface ParamsTypes {
  day: string
}

const Day: React.FC = () => {
  const [activeVolume, setActiveVolume] = useState("NONE")
  const { day } = useParams<ParamsTypes>()
  const { user } = useAuthContext()
  const { data, loading } = useGetDay(user.uid, day)

  return (
    <View style={customStyles.container}>
      <DayHeader day={day} style={{ flex: 1 }} />
      <VolumePicker
        activeVolume={activeVolume}
        setActiveVolume={setActiveVolume}
        style={customStyles.volumePicker}
      />
      {loading ? (
        <View style={customStyles.loader}>
          <ActivityIndicator color={theme.colors.primary[500]} size="large" />
        </View>
      ) : (
        <ExerciseTable
          style={{ flex: 10 }}
          setActiveVolume={setActiveVolume}
          activeVolume={activeVolume}
          dayData={data as DayData}
        />
      )}
      <NavigationBar day={day} />
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

export default Day
