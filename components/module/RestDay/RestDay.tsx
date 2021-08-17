import React from "react"
import { StyleSheet, View } from "react-native"

import StyledText from "../../common/StyledText"

const RestDay: React.FC<{ style: any }> = ({ style }) => {
  return (
    <View style={[customStyles.container, style]}>
      <StyledText style={{ marginBottom: -10 }} heading primary center>
        Rest day!
      </StyledText>
      <StyledText third semibold center>
        Enjoy it :)
      </StyledText>
    </View>
  )
}

const customStyles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingTop: 150,
  },
})

export default RestDay
