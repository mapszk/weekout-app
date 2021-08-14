import React from "react"

import { StyleSheet, TouchableOpacity, View } from "react-native"
import StyledText from "../../common/StyledText"

interface Props {
  activeVolume: string
  setActiveVolume: (value: string) => void
}
const VolumePicker: React.FC<Props> = ({ activeVolume, setActiveVolume }) => {
  return (
    <View>
      <StyledText semibold third>
        Training volume:
      </StyledText>
      <View style={styles.tagContainer}>
        <TouchableOpacity
          onPress={() => setActiveVolume("NONE")}
          style={styles.tags}
        >
          <StyledText
            style={[
              styles.volumePick,
              {
                backgroundColor:
                  activeVolume === "NONE" ? "#b6b6b6" : "#e0e0e0",
                color: activeVolume === "NONE" ? "black" : "white",
              },
            ]}
          >
            NONE
          </StyledText>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setActiveVolume("MIN")}
          style={styles.tags}
        >
          <StyledText
            style={[
              styles.volumePick,
              {
                backgroundColor: activeVolume === "MIN" ? "#bcfdaf" : "#e0e0e0",
                color: activeVolume === "MIN" ? "black" : "white",
              },
            ]}
          >
            MIN
          </StyledText>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setActiveVolume("MID")}
          style={styles.tags}
        >
          <StyledText
            style={[
              styles.volumePick,
              {
                backgroundColor: activeVolume === "MID" ? "#fdf5af" : "#e0e0e0",
                color: activeVolume === "MID" ? "black" : "white",
              },
            ]}
          >
            MID
          </StyledText>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveVolume("MAX")}>
          <StyledText
            style={[
              styles.volumePick,
              {
                backgroundColor: activeVolume === "MAX" ? "#fdafaf" : "#e0e0e0",
                color: activeVolume === "MAX" ? "black" : "white",
              },
            ]}
          >
            MAX
          </StyledText>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  volumePick: {
    fontSize: 12,
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingTop: 4,
  },
  tagContainer: {
    flexDirection: "row",
    marginBottom: 15,
  },
  tags: {
    marginRight: 6,
  },
})

export default VolumePicker
