import React from "react"
import { View } from "react-native"
import { DayData } from "../../../types/DayData"
import { Exercise } from "../../../types/Exercise"
import StyledText from "../../common/StyledText"
import ExerciseVolume from "./ExerciseVolume"

interface Props {
  dayData: DayData
  activeVolume: string
}

const ExerciseTable: React.FC<Props> = ({ dayData, activeVolume }) => {
  const { noneVolume, minVolume, midVolume, maxVolume } = dayData as DayData
  return (
    <View>
      <View style={{ flexDirection: "row" }}>
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
      {activeVolume === "NONE" && (
        <ExerciseVolume
          volume={noneVolume.sort((a: Exercise, b: Exercise) =>
            a.muscle.localeCompare(b.muscle)
          )}
        />
      )}
      {activeVolume === "MIN" && (
        <ExerciseVolume
          volume={minVolume.sort((a: Exercise, b: Exercise) =>
            a.muscle.localeCompare(b.muscle)
          )}
        />
      )}
      {activeVolume === "MID" && (
        <ExerciseVolume
          volume={midVolume.sort((a: Exercise, b: Exercise) =>
            a.muscle.localeCompare(b.muscle)
          )}
        />
      )}
      {activeVolume === "MAX" && (
        <ExerciseVolume
          volume={maxVolume.sort((a: Exercise, b: Exercise) =>
            a.muscle.localeCompare(b.muscle)
          )}
        />
      )}
    </View>
  )
}

export default ExerciseTable
