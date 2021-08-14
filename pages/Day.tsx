import React, { useState } from "react"
import { View } from "react-native"
import { useParams } from "react-router-native"
import StyledText from "../components/common/StyledText"
import VolumePicker from "../components/module/VolumePicker/VolumePicker"
import { useAuthContext } from "../hooks/useAuthContext"
import { capitalize } from "../util/capitalize"
import Loading from "./Loading"
import Constants from "expo-constants"
import ExerciseTable from "../components/module/ExerciseTable/ExerciseTable"
import { DayData } from "../types/DayData"
import { useGetDay } from "../hooks/useGetDay"

interface ParamsTypes {
  day: string
}

const Day = () => {
  const [activeVolume, setActiveVolume] = useState("NONE")
  const { day } = useParams<ParamsTypes>()
  const { user } = useAuthContext()
  const { data, loading } = useGetDay(user.uid, day)

  if (loading) return <Loading />
  else
    return (
      <View style={{ paddingTop: Constants.statusBarHeight }}>
        <StyledText style={{ fontSize: 46, marginBottom: -10 }} heading primary>
          {capitalize(day)}
        </StyledText>
        <VolumePicker
          activeVolume={activeVolume}
          setActiveVolume={setActiveVolume}
        />
        <ExerciseTable activeVolume={activeVolume} dayData={data as DayData} />
      </View>
    )
}

export default Day
