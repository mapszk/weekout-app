import React from "react"
import { StyleSheet, View } from "react-native"
import { capitalize } from "../../../util/capitalize"
import Button from "../../common/Button"
import StyledText from "../../common/StyledText"
import { Entypo } from "@expo/vector-icons"
import theme from "../../../theme/theme"
import { useHistory } from "react-router-native"

interface Props {
  day: string
  edit?: boolean
  style?: any
}

const DayHeader: React.FC<Props> = ({ edit, style, day }) => {
  const history = useHistory()
  const getDayLink = (day: string, next: boolean) => {
    if (next) {
      switch (day) {
        case "sunday":
          return "monday"
        case "monday":
          return "tuesday"
        case "tuesday":
          return "wednesday"
        case "wednesday":
          return "thursday"
        case "thursday":
          return "friday"
        case "friday":
          return "saturday"
        case "saturday":
          return "sunday"
      }
    } else {
      switch (day) {
        case "sunday":
          return "saturday"
        case "monday":
          return "sunday"
        case "tuesday":
          return "monday"
        case "wednesday":
          return "tuesday"
        case "thursday":
          return "wednesday"
        case "friday":
          return "thursday"
        case "saturday":
          return "friday"
      }
    }
  }
  return (
    <View style={[customStyles.container, style]}>
      <Button
        icon
        onPress={() => {
          edit
            ? history.push(`/edit/${getDayLink(day, false)}`)
            : history.push(`/day/${getDayLink(day, false)}`)
        }}
      >
        <Entypo
          name="chevron-left"
          size={24}
          color={
            !edit ? theme.colors.primary[500] : theme.colors.secondary[500]
          }
        />
      </Button>
      <StyledText
        center
        style={customStyles.day}
        heading
        primary={!edit && true}
        secondary={edit && true}
      >
        {capitalize(day)}
      </StyledText>
      <Button
        icon
        onPress={() => {
          edit
            ? history.push(`/edit/${getDayLink(day, true)}`)
            : history.push(`/day/${getDayLink(day, true)}`)
        }}
      >
        <Entypo
          name="chevron-right"
          size={24}
          color={
            !edit ? theme.colors.primary[500] : theme.colors.secondary[500]
          }
        />
      </Button>
    </View>
  )
}

const customStyles = StyleSheet.create({
  container: {
    marginTop: 5,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  day: {
    fontSize: 42,
    marginBottom: -10,
  },
})

export default DayHeader
