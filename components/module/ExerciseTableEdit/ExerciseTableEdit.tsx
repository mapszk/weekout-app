import React, { useEffect, useRef, useState } from "react"
import { View } from "react-native"
import { DayData } from "../../../types/DayData"
import { Exercise } from "../../../types/Exercise"
import StyledText from "../../common/StyledText"
import ExerciseVolumeEdit from "./ExerciseVolumeEdit"
import ViewPager from "react-native-pager-view"

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
  const { noneVolume, minVolume, midVolume, maxVolume } = dayData as DayData
  useEffect(() => {
    setNoneVolumeEdit(noneVolume)
    setMinVolumeEdit(minVolume)
    setmidVolumeEdit(midVolume)
    setMaxVolumeEdit(maxVolume)
  }, [dayData])
  const [noneVolumeEdit, setNoneVolumeEdit] = useState<Exercise[]>(noneVolume)
  const [minVolumeEdit, setMinVolumeEdit] = useState<Exercise[]>(minVolume)
  const [midVolumeEdit, setmidVolumeEdit] = useState<Exercise[]>(midVolume)
  const [maxVolumeEdit, setMaxVolumeEdit] = useState<Exercise[]>(maxVolume)
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
          editVolume={setNoneVolumeEdit}
          volume={noneVolumeEdit.sort((a: Exercise, b: Exercise) =>
            a.muscle.localeCompare(b.muscle)
          )}
        />
        <ExerciseVolumeEdit
          editVolume={setMinVolumeEdit}
          volume={minVolumeEdit.sort((a: Exercise, b: Exercise) =>
            a.muscle.localeCompare(b.muscle)
          )}
        />
        <ExerciseVolumeEdit
          editVolume={setmidVolumeEdit}
          volume={midVolumeEdit.sort((a: Exercise, b: Exercise) =>
            a.muscle.localeCompare(b.muscle)
          )}
        />
        <ExerciseVolumeEdit
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
