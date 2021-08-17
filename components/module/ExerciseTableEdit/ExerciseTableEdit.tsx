import React, { useEffect, useRef, useState } from "react"
import { View } from "react-native"
import { DayData } from "../../../types/DayData"
import { Exercise } from "../../../types/Exercise"
import StyledText from "../../common/StyledText"
import ExerciseVolumeEdit from "./ExerciseVolumeEdit"
import ViewPager from "react-native-pager-view"
import { saveDayDb } from "./saveDayDb"
import { useParams } from "react-router-native"
import { useAuthContext } from "../../../hooks/useAuthContext"
import Toast from "react-native-root-toast"

interface Props {
  style?: any
  dayData: DayData
  activeVolume: string
  setActiveVolume: (value: string) => void
}

const ExerciseTableEdit: React.FC<Props> = ({
  setActiveVolume,
  style,
  dayData,
  activeVolume,
}) => {
  const pagerRef = useRef<ViewPager>(null)
  const { user } = useAuthContext()
  const { day } = useParams<{ day: string }>()
  const { noneVolume, minVolume, midVolume, maxVolume, restDay } =
    dayData as DayData
  const [noneVolumeEdit, setNoneVolumeEdit] = useState<Exercise[]>(noneVolume)
  const [minVolumeEdit, setMinVolumeEdit] = useState<Exercise[]>(minVolume)
  const [midVolumeEdit, setmidVolumeEdit] = useState<Exercise[]>(midVolume)
  const [maxVolumeEdit, setMaxVolumeEdit] = useState<Exercise[]>(maxVolume)
  const [restDayEdit, setRestDayEdit] = useState<boolean>(restDay)

  /* actualiza los volumenes cuando se cambia de dia */
  useEffect(() => {
    setNoneVolumeEdit(noneVolume)
    setMinVolumeEdit(minVolume)
    setmidVolumeEdit(midVolume)
    setMaxVolumeEdit(maxVolume)
  }, [dayData])

  /* cambia la posicion de la paginacion cuando se usa el volume picker */
  useEffect(() => {
    switch (activeVolume) {
      case "NONE":
        pagerRef.current?.setPageWithoutAnimation(0)
        break
      case "MIN":
        pagerRef.current?.setPageWithoutAnimation(1)
        break
      case "MID":
        pagerRef.current?.setPageWithoutAnimation(2)
        break
      case "MAX":
        pagerRef.current?.setPageWithoutAnimation(3)
        break
    }
  }, [activeVolume])

  /* setea el volumen activo en el volumen picker cuando se usa el slider */
  const setVolume = (position: number) => {
    switch (position) {
      case 0:
        return setActiveVolume("NONE")
      case 1:
        return setActiveVolume("MIN")
      case 2:
        return setActiveVolume("MID")
      case 3:
        return setActiveVolume("MAX")
    }
  }

  /* guarda en firebase el dia */
  const handleSaveDay = async () => {
    console.log(restDayEdit)
    const { msg, status } = await saveDayDb(
      {
        noneVolume: noneVolumeEdit,
        minVolume: minVolumeEdit,
        midVolume: midVolumeEdit,
        maxVolume: maxVolumeEdit,
        restDay: restDayEdit,
      },
      day,
      user.uid
    )
    // eslint-disable-next-line no-unused-vars
    const toast = Toast.show(msg, {
      duration: Toast.durations.LONG,
      backgroundColor: status === "success" ? "green" : "red",
      position: Toast.positions.TOP + 25,
      shadow: false,
      opacity: 1,
    })
  }

  return (
    <View style={style}>
      <View style={{ flexDirection: "row", paddingRight: 10 }}>
        <StyledText third style={{ flex: 6 }}>
          Exercise
        </StyledText>
        <StyledText third style={{ flex: 2, textAlign: "right" }}>
          Reps
        </StyledText>
        <StyledText third style={{ flex: 2, textAlign: "right" }}>
          Series
        </StyledText>
      </View>
      <ViewPager
        ref={pagerRef}
        onPageSelected={({ nativeEvent }) => setVolume(nativeEvent.position)}
        style={{ flex: 1 }}
      >
        <ExerciseVolumeEdit
          saveDay={handleSaveDay}
          restDay={restDayEdit}
          setRestDay={setRestDayEdit}
          editVolume={setNoneVolumeEdit}
          volume={noneVolumeEdit.sort((a: Exercise, b: Exercise) =>
            a.muscle.localeCompare(b.muscle)
          )}
        />
        <ExerciseVolumeEdit
          saveDay={handleSaveDay}
          restDay={restDayEdit}
          setRestDay={setRestDayEdit}
          editVolume={setMinVolumeEdit}
          volume={minVolumeEdit.sort((a: Exercise, b: Exercise) =>
            a.muscle.localeCompare(b.muscle)
          )}
        />
        <ExerciseVolumeEdit
          saveDay={handleSaveDay}
          restDay={restDayEdit}
          setRestDay={setRestDayEdit}
          editVolume={setmidVolumeEdit}
          volume={midVolumeEdit.sort((a: Exercise, b: Exercise) =>
            a.muscle.localeCompare(b.muscle)
          )}
        />
        <ExerciseVolumeEdit
          saveDay={handleSaveDay}
          restDay={restDayEdit}
          setRestDay={setRestDayEdit}
          editVolume={setMaxVolumeEdit}
          volume={maxVolumeEdit.sort((a: Exercise, b: Exercise) =>
            a.muscle.localeCompare(b.muscle)
          )}
        />
      </ViewPager>
    </View>
  )
}

export default ExerciseTableEdit
