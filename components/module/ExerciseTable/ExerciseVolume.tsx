import React from "react"

import { FlatList, View } from "react-native"
import theme from "../../../theme/theme"
import { Exercise } from "../../../types/Exercise"
import { capitalize } from "../../../util/capitalize"
import StyledText from "../../common/StyledText"

interface Props {
  volume: Exercise[]
}
interface ExerciseRowProps {
  exercise: Exercise
}

const sameMuscle = (
  volume: Exercise[],
  exercise: Exercise,
  index: number
): boolean | void => {
  if (index !== 0) {
    const actualMuscle = exercise.muscle
    const musclePrevExercise = volume[index - 1].muscle
    if (actualMuscle === musclePrevExercise) return true
    else return false
  }
}

const EmptyList: React.FC = () => {
  return (
    <View
      style={{
        paddingTop: 150,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <StyledText center>There are no exercises for this volume</StyledText>
    </View>
  )
}

const ExerciseTableRow: React.FC<ExerciseRowProps> = ({ exercise }) => {
  const { name, reps, series } = exercise
  return (
    <View
      style={{
        flexDirection: "row",
        marginBottom: 5,
      }}
    >
      <StyledText style={{ flex: 6 }}>{name}</StyledText>
      <StyledText style={{ flex: 2, textAlign: "right" }}>{reps}</StyledText>
      <StyledText style={{ flex: 2, textAlign: "right" }}>{series}</StyledText>
    </View>
  )
}

const ExerciseVolume: React.FC<Props> = ({ volume }) => {
  return (
    <FlatList
      style={{ flex: 1, paddingRight: 10 }}
      data={volume}
      ListEmptyComponent={EmptyList}
      renderItem={({ item, index }) => (
        <>
          {!sameMuscle(volume, item, index) && (
            <StyledText
              style={{
                fontSize: 18,
                borderBottomWidth: 1,
                borderBottomColor: theme.colors.third[100],
                marginBottom: 5,
              }}
              primary
              semibold
            >
              {capitalize(item.muscle)}
            </StyledText>
          )}
          <ExerciseTableRow key={item.id} exercise={item} />
        </>
      )}
    />
  )
}

export default ExerciseVolume
