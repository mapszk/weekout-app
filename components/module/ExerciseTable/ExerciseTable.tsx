import React, { useEffect, useRef } from "react"
import { View } from "react-native"
import { DayData } from "../../../types/DayData"
import { Exercise } from "../../../types/Exercise"
import StyledText from "../../common/StyledText"
import ExerciseVolume from "./ExerciseVolume"
import ViewPager from "react-native-pager-view"

interface Props {
  style?: any
  dayData: DayData
  activeVolume: string
  setActiveVolume: (value: string) => void
}

const ExerciseTable: React.FC<Props> = ({
  setActiveVolume,
  style,
  dayData,
  activeVolume,
}) => {
  const pagerRef = useRef<ViewPager>(null)
  const { noneVolume, minVolume, midVolume, maxVolume } = dayData as DayData
  const setVolume = (position: number) => {
    switch (position) {
      case 0:
        setActiveVolume("NONE")
        break
      case 1:
        setActiveVolume("MIN")
        break
      case 2:
        setActiveVolume("MID")
        break
      case 3:
        setActiveVolume("MAX")
        break
    }
  }
  useEffect(() => {
    switch (activeVolume) {
      case "NONE":
        pagerRef.current?.setPage(0)
        break
      case "MIN":
        pagerRef.current?.setPage(1)
        break
      case "MID":
        pagerRef.current?.setPage(2)
        break
      case "MAX":
        pagerRef.current?.setPage(3)
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
        <ExerciseVolume
          volume={noneVolume.sort((a: Exercise, b: Exercise) =>
            a.muscle.localeCompare(b.muscle)
          )}
        />
        <ExerciseVolume
          volume={minVolume.sort((a: Exercise, b: Exercise) =>
            a.muscle.localeCompare(b.muscle)
          )}
        />
        <ExerciseVolume
          volume={midVolume.sort((a: Exercise, b: Exercise) =>
            a.muscle.localeCompare(b.muscle)
          )}
        />
        <ExerciseVolume
          volume={maxVolume.sort((a: Exercise, b: Exercise) =>
            a.muscle.localeCompare(b.muscle)
          )}
        />
      </ViewPager>
    </View>
  )
}

export default ExerciseTable
