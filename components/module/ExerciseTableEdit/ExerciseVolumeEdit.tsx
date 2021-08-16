import React, { useState } from "react"
import { MaterialIcons } from "@expo/vector-icons"
import { FlatList, View } from "react-native"
import theme from "../../../theme/theme"
import { Exercise } from "../../../types/Exercise"
import { capitalize } from "../../../util/capitalize"
import StyledText from "../../common/StyledText"
import Button from "../../common/Button"
import { firebaseDb } from "../../../firebase/firebase"
import { useAuthContext } from "../../../hooks/useAuthContext"
import { DayData } from "../../../types/DayData"

interface Props {
  volume: Exercise[]
  editVolume: (volume: Exercise[]) => void
}
interface ExerciseRowProps {
  exercise: Exercise
  editVolume: (volume: Exercise[]) => void
  volume: Exercise[]
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

const Footer: React.FC<{ saveDay: any }> = ({ saveDay }) => {
  return (
    <Button mt={10} onPress={saveDay} full secondary>
      Save
    </Button>
  )
}
const EmptyList: React.FC = () => {
  return (
    <View
      style={{
        paddingVertical: 95,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <StyledText center>There are no exercises for this volume</StyledText>
    </View>
  )
}

const ExerciseTableRow: React.FC<ExerciseRowProps> = ({
  exercise,
  editVolume,
  volume,
}) => {
  const { name, reps, series, id } = exercise
  const handleDeleteExercise = () => {
    const newVolume = volume.filter((ex) => ex.id !== id)
    editVolume(newVolume)
  }
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "flex-start",
        marginBottom: 5,
      }}
    >
      <MaterialIcons
        onPress={handleDeleteExercise}
        style={{ marginTop: -2 }}
        name="cancel"
        size={28}
        color={theme.colors.secondary[500]}
      />
      <StyledText style={{ flex: 6, marginLeft: 5 }}>{name}</StyledText>
      <StyledText style={{ flex: 2, textAlign: "right" }}>{reps}</StyledText>
      <StyledText style={{ flex: 2, textAlign: "right" }}>{series}</StyledText>
    </View>
  )
}

const ExerciseVolumeEdit: React.FC<Props> = ({ volume, editVolume }) => {
  return (
    <FlatList
      style={{ flex: 1, paddingRight: 10 }}
      data={volume}
      ListFooterComponent={Footer}
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
              secondary
              semibold
            >
              {capitalize(item.muscle)}
            </StyledText>
          )}
          <ExerciseTableRow
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
