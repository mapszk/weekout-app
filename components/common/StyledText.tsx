/* eslint-disable camelcase */
import React from "react"
import { StyleSheet, Text, View } from "react-native"
import {
  Poppins_200ExtraLight,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins"
import { useFonts } from "expo-font"
import theme from "../../theme/theme"

interface Props {
  style?: any
  center?: boolean
  button?: boolean
  buttonGhostPrimary?: boolean
  buttonGhostSecondary?: boolean
  heading?: boolean
  subheading?: boolean
  text?: boolean
  primary?: boolean
  secondary?: boolean
  third?: boolean
  light?: boolean
  regular?: boolean
  medium?: boolean
  semibold?: boolean
  bold?: boolean
}

const StyledText: React.FC<Props> = ({
  center,
  button,
  buttonGhostPrimary,
  buttonGhostSecondary,
  heading,
  subheading,
  text,
  primary,
  secondary,
  third,
  light,
  regular,
  medium,
  semibold,
  bold,
  style,
  children,
  ...restofProps
}) => {
  const [fontsLoaded] = useFonts({
    Poppins_200ExtraLight,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  })
  const textStyles = [
    customStyle.default,
    button && customStyle.button,
    buttonGhostPrimary && customStyle.buttonGhostPrimary,
    buttonGhostSecondary && customStyle.buttonGhostSecondary,
    center && customStyle.center,
    heading && customStyle.heading,
    subheading && customStyle.subheading,
    text && customStyle.text,
    primary && customStyle.primary,
    secondary && customStyle.secondary,
    third && customStyle.third,
    light && customStyle.light,
    regular && customStyle.regular,
    medium && customStyle.medium,
    semibold && customStyle.semibold,
    bold && customStyle.bold,
    style,
  ]
  if (!fontsLoaded) return <View></View>
  else
    return (
      <Text style={textStyles} {...restofProps}>
        {children}
      </Text>
    )
}

const customStyle = StyleSheet.create({
  default: {
    fontSize: 16,
    color: "#3d3d3d",
    fontFamily: "Poppins_400Regular",
  },
  button: {
    fontFamily: "Poppins_600SemiBold",
    color: "white",
    textAlign: "center",
  },
  buttonGhostPrimary: {
    fontFamily: "Poppins_600SemiBold",
    color: theme.colors.primary[500],
    textAlign: "center",
  },
  buttonGhostSecondary: {
    fontFamily: "Poppins_600SemiBold",
    color: theme.colors.secondary[500],
    textAlign: "center",
  },
  center: {
    textAlign: "center",
  },
  heading: {
    fontSize: 32,
    fontFamily: "Poppins_700Bold",
  },
  subheading: {
    fontSize: 24,
    fontFamily: "Poppins_600SemiBold",
  },
  text: {
    fontSize: 16,
  },
  primary: {
    color: theme.colors.primary[500],
  },
  secondary: {
    color: theme.colors.secondary[500],
  },
  third: {
    color: theme.colors.third[500],
  },
  light: {
    fontFamily: "Poppins_200ExtraLight",
  },
  regular: {
    fontFamily: "Poppins_400Regular",
  },
  medium: {
    fontFamily: "Poppins_500Medium",
  },
  semibold: {
    fontFamily: "Poppins_600SemiBold",
  },
  bold: {
    fontFamily: "Poppins_700Bold",
  },
})

export default StyledText
