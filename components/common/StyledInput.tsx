import React, { useState } from "react"
import { StyleSheet, TextInput, View } from "react-native"
import theme from "../../theme/theme"
import StyledText from "./StyledText"

interface Props {
  label?: string
  password?: boolean
  style?: any
  mt?: number
  mb?: number
  my?: number
}
const StyledInput: React.FC<Props> = ({
  label,
  password,
  style,
  mt,
  mb,
  my,
}) => {
  const [isFocus, setIsFocus] = useState<boolean>(false)
  const styles = [
    customStyles.default,
    {
      borderColor: isFocus ? theme.colors.third[500] : "#CBD5E0",
      borderWidth: isFocus ? 2 : 1,
      marginBottom: mb || 0,
      marginTop: mt || 0,
      marginVertical: my || 0,
    },
    style,
  ]
  if (label) {
    return (
      <View>
        <StyledText>{label}</StyledText>
        <TextInput
          secureTextEntry={password}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          style={styles}
        />
      </View>
    )
  } else
    return (
      <TextInput
        secureTextEntry={password}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        style={styles}
      />
    )
}

const customStyles = StyleSheet.create({
  default: {
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 6,
    fontSize: 16,
  },
})

export default StyledInput
