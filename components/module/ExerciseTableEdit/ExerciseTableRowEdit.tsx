import React from "react"
import { View } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"
import theme from "../../../theme/theme"
import StyledText from "../../common/StyledText"
import { Exercise } from "../../../types/Exercise"

interface Props {
  exercise: Exercise
  editVolume: (volume: Exercise[]) => void
  volume: Exercise[]
}

const ExerciseTableRowEdit: React.FC<Props> = ({
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

export default ExerciseTableRowEdit
