import React from "react"
import { View } from "react-native"
import StyledText from "../../common/StyledText"

const ExerciseTableEditEmpty: React.FC = () => {
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

export default ExerciseTableEditEmpty
