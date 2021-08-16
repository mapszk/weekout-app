import React, { useState } from "react"
import { StyleSheet, View } from "react-native"
import { useParams } from "react-router-native"
import VolumePicker from "../components/module/VolumePicker/VolumePicker"
import { useAuthContext } from "../hooks/useAuthContext"
import Loading from "./Loading"
import Constants from "expo-constants"
import ExerciseTable from "../components/module/ExerciseTable/ExerciseTable"
import { DayData } from "../types/DayData"
import { useGetDay } from "../hooks/useGetDay"
import NavigationBar from "../components/module/NavigationBar/NavigationBar"
import DayHeader from "../components/module/DayHeader/DayHeader"

interface ParamsTypes {
  day: string
}

const Day: React.FC = () => {
  const [activeVolume, setActiveVolume] = useState("NONE")
  const { day } = useParams<ParamsTypes>()
  const { user } = useAuthContext()
  const { data, loading } = useGetDay(user.uid, day)
  if (loading) return <Loading />
  else
    return (
      <View style={customStyles.container}>
        <DayHeader day={day} style={{ flex: 1 }} />
        <VolumePicker
          activeVolume={activeVolume}
          setActiveVolume={setActiveVolume}
          style={{ flex: 1, marginBottom: 5, marginTop: 10 }}
        />
        <ExerciseTable
          style={{ flex: 8 }}
          setActiveVolume={setActiveVolume}
          activeVolume={activeVolume}
          dayData={data as DayData}
        />
        <NavigationBar />
      </View>
    )
}

const customStyles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
})

export default Day
