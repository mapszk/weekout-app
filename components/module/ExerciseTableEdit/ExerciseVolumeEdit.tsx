import React from "react"
import { FlatList } from "react-native"
import theme from "../../../theme/theme"
import { Exercise } from "../../../types/Exercise"
import { capitalize } from "../../../util/capitalize"
import StyledText from "../../common/StyledText"
import ExerciseTableRowEdit from "./ExerciseTableRowEdit"
import ExerciseTableEditEmpty from "./ExerciseTableEditEmpty"
import ExerciseTableEditFooter from "./ExerciseTableEditFooter"

interface Props {
  saveDay: any
  restDay: boolean
  setRestDay: (v: boolean) => void
  volume: Exercise[]
  editVolume: (volume: Exercise[]) => void
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

const ExerciseVolumeEdit: React.FC<Props> = ({
  saveDay,
  restDay,
  setRestDay,
  volume,
  editVolume,
}) => {
  return (
    <FlatList
      style={{ flex: 1, paddingRight: 10 }}
      data={volume}
      ListFooterComponent={
        <ExerciseTableEditFooter
          editVolume={editVolume}
          volume={volume}
          setRestDay={setRestDay}
          restDay={restDay}
          saveDay={saveDay}
        />
      }
      ListEmptyComponent={ExerciseTableEditEmpty}
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
              secondary
              semibold
            >
              {capitalize(item.muscle)}
            </StyledText>
          )}
          <ExerciseTableRowEdit
            volume={volume}
            editVolume={editVolume}
            key={item.id}
            exercise={item}
          />
        </>
      )}
    />
  )
}

export default ExerciseVolumeEdit
