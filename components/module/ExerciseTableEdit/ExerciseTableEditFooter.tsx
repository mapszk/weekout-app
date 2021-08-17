import React, { useState } from "react"
import Button from "../../common/Button"
import BouncyCheckbox from "react-native-bouncy-checkbox"
import theme from "../../../theme/theme"
import CustomModal from "../../common/CustomModal"
import StyledText from "../../common/StyledText"
import { View } from "react-native"
import StyledInput from "../../common/StyledInput"
import NumericInput from "react-native-numeric-input"
import { Picker } from "@react-native-picker/picker"
import { capitalize } from "../../../util/capitalize"
import { Exercise } from "../../../types/Exercise"
import uuid from "react-native-uuid"

const muscleOptions = [
  "quadriceps",
  "hamstrings",
  "buttocks",
  "chest",
  "back",
  "deltoid",
  "biceps",
  "triceps",
  "trapezius",
  "soleus",
  "core",
]

interface Props {
  editVolume: (v: Exercise[]) => void
  volume: Exercise[]
  saveDay: any
  restDay: boolean
  setRestDay: (v: boolean) => void
}

const ExerciseTableEditFooter: React.FC<Props> = ({
  saveDay,
  editVolume,
  volume,
  restDay,
  setRestDay,
}) => {
  const [newExerciseVisible, setNewExerciseVisible] = useState<boolean>(false)
  const [newExerciseName, setNewExerciseName] = useState<string>("")
  const [newExerciseReps, setNewExerciseReps] = useState<number>(0)
  const [newExerciseSeries, setNewExerciseSeries] = useState<number>(0)
  const [newExerciseMuscle, setNewExerciseMuscle] = useState<string>("biceps")
  const handleAddExercise = () => {
    const newVolume = volume
    newVolume.push({
      name: newExerciseName,
      series: newExerciseSeries,
      reps: newExerciseReps,
      muscle: newExerciseMuscle,
      id: uuid.v4().toString(),
    })
    editVolume(newVolume)
    setNewExerciseVisible(false)
  }
  return (
    <>
      <CustomModal visible={newExerciseVisible}>
        <StyledText center>Add new exercise</StyledText>
        <StyledInput
          label="Name"
          value={newExerciseName}
          onChangeText={(v: string) => setNewExerciseName(v)}
        />
        <StyledText style={{ marginTop: 10 }}>Muscle</StyledText>
        <Picker
          style={{ marginBottom: 15 }}
          selectedValue={newExerciseMuscle}
          onValueChange={(value) => setNewExerciseMuscle(value)}
        >
          {muscleOptions.map((muscle, index) => (
            <Picker.Item
              label={capitalize(muscle)}
              value={muscle}
              key={index}
            />
          ))}
        </Picker>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 15,
          }}
        >
          <View>
            <StyledText>Reps</StyledText>
            <NumericInput
              minValue={0}
              maxValue={99}
              value={newExerciseReps}
              onChange={(v) => setNewExerciseReps(v)}
            />
          </View>
          <View>
            <StyledText>Series</StyledText>
            <NumericInput
              minValue={0}
              maxValue={99}
              value={newExerciseSeries}
              onChange={(v) => setNewExerciseSeries(v)}
            />
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Button
            style={{ flex: 1, marginRight: 6 }}
            ghostSecondary
            onPress={() => setNewExerciseVisible(false)}
          >
            Cancel
          </Button>
          <Button onPress={handleAddExercise} style={{ flex: 1 }} secondary>
            Add
          </Button>
        </View>
      </CustomModal>
      <BouncyCheckbox
        onPress={(value: boolean | undefined) => setRestDay(value as boolean)}
        isChecked={restDay}
        size={24}
        style={{ justifyContent: "center", marginVertical: 10 }}
        fillColor={theme.colors.secondary[500]}
        iconStyle={{ borderColor: theme.colors.secondary[500] }}
        text="Is rest day?"
      />
      <Button onPress={() => setNewExerciseVisible(true)} ghostSecondary>
        Add exercise
      </Button>
      <Button my={5} onPress={saveDay} full secondary>
        Save
      </Button>
    </>
  )
}

export default ExerciseTableEditFooter
