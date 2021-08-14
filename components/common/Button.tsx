import React from "react"
import { ActivityIndicator, StyleSheet, TouchableOpacity } from "react-native"
import theme from "../../theme/theme"
import StyledText from "./StyledText"

interface Props {
  onPress?: () => void
  isLoading?: boolean
  disabled?: boolean
  style?: any
  full?: boolean
  mb?: number
  mt?: number
  my?: number
  ghostPrimary?: boolean
  ghostSecondary?: boolean
  primary?: boolean
  secondary?: boolean
}
const Button: React.FC<Props> = ({
  onPress,
  isLoading,
  disabled,
  mb,
  mt,
  my,
  style,
  full,
  ghostPrimary,
  ghostSecondary,
  primary,
  secondary,
  children,
}) => {
  const styles = [
    customStyles.default,
    full && customStyles.full,
    primary && customStyles.primary,
    secondary && customStyles.secondary,
    ghostPrimary && customStyles.ghostPrimary,
    ghostSecondary && customStyles.ghostSecondary,
    { marginBottom: mb, marginTop: mt, marginVertical: my },
    style,
  ]
  return (
    <TouchableOpacity
      disabled={disabled || isLoading}
      style={styles}
      onPress={onPress}
    >
      <StyledText
        buttonGhostPrimary={ghostPrimary}
        buttonGhostSecondary={ghostSecondary}
        button
      >
        {isLoading ? (
          <ActivityIndicator
            color={
              ghostPrimary
                ? theme.colors.primary[500]
                : ghostSecondary
                ? theme.colors.secondary[500]
                : "white"
            }
          />
        ) : (
          children
        )}
      </StyledText>
    </TouchableOpacity>
  )
}

const customStyles = StyleSheet.create({
  default: {
    paddingHorizontal: 15,
    justifyContent: "center",
    height: 40,
    borderRadius: 6,
    backgroundColor: theme.colors.primary[500],
  },
  full: {
    width: "100%",
  },
  primary: {
    backgroundColor: theme.colors.primary[500],
  },
  secondary: {
    backgroundColor: theme.colors.secondary[500],
  },
  ghostPrimary: {
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: theme.colors.primary[500],
  },
  ghostSecondary: {
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: theme.colors.secondary[500],
  },
})

export default Button
