import React from "react"
import { StyleSheet, View } from "react-native"
import { capitalize } from "../../../util/capitalize"
import StyledText from "../../common/StyledText"

interface Props {
  day: string
  style?: any
}

const DayHeader: React.FC<Props> = ({ style, day }) => {
  return (
    <View style={style}>
      <StyledText style={customStyles.day} heading primary>
        {capitalize(day)}
      </StyledText>
    </View>
  )
}

const customStyles = StyleSheet.create({
  day: {
    fontSize: 46,
    marginBottom: -10,
  },
})

export default DayHeader
