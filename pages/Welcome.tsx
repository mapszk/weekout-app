import React from "react"
import { View } from "react-native"
import StyledText from "../components/common/StyledText"

const Welcome: React.FC = () => {
  return (
    <View
      style={{
        paddingHorizontal: 5,
      }}
    >
      <StyledText>Weekout</StyledText>
      <StyledText primary heading>
        Monday
      </StyledText>
      <StyledText third subheading>
        subheading
      </StyledText>
      <StyledText secondary text medium>
        secondary
      </StyledText>
      <StyledText text>
        esto es un texto de muestra, para ver que tal anda esta poronga.
      </StyledText>
    </View>
  )
}

export default Welcome
