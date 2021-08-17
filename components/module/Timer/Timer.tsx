import AsyncStorage from "@react-native-async-storage/async-storage"
import React, { useEffect, useRef, useState } from "react"
import { Animated, Easing, StyleSheet, View } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"
import theme from "../../../theme/theme"
import Button from "../../common/Button"
import StyledText from "../../common/StyledText"
import CustomModal from "../../common/CustomModal"
import NumericInput from "react-native-numeric-input"
import Toast from "react-native-root-toast"

interface Props {
  visible: boolean
}

const Timer: React.FC<Props> = ({ visible }) => {
  const [settingsVisible, setSettingsVisible] = useState<boolean>(false)
  const slideAnim = useRef(new Animated.Value(300)).current
  useEffect(() => {
    if (visible) {
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 500,
        easing: Easing.inOut(Easing.ease),
        useNativeDriver: true,
      }).start()
    } else {
      Animated.timing(slideAnim, {
        toValue: 300,
        duration: 500,
        useNativeDriver: true,
      }).start()
    }
  }, [visible])

  // timer logic
  const [minutesEdit, setMinutesEdit] = useState<number>(1)
  const [secondsEdit, setSecondsEdit] = useState<number>(0)
  const [minutes, setMinutes] = useState<number>(1)
  const [seconds, setSeconds] = useState<number>(0)
  const [isActive, setIsActive] = useState<boolean>(false)
  const saveTimer = async () => {
    try {
      await AsyncStorage.setItem("minutes", minutesEdit.toString())
      await AsyncStorage.setItem("seconds", secondsEdit.toString())
      setMinutes(minutesEdit)
      setSeconds(secondsEdit)
      setSettingsVisible(false)
    } catch (err) {
      // eslint-disable-next-line no-unused-vars
      const toast = Toast.show(err, {
        duration: Toast.durations.LONG,
        backgroundColor: "red",
        position: Toast.positions.TOP + 25,
        shadow: false,
        opacity: 1,
      })
    }
  }
  const handleStopTimer = async () => {
    setIsActive(false)
    try {
      const minutes = await AsyncStorage.getItem("minutes")
      const seconds = await AsyncStorage.getItem("seconds")
      if (minutes !== null && seconds !== null) {
        setMinutes(Number(minutes))
        setSeconds(Number(seconds))
      } else {
        setMinutes(1)
        setSeconds(0)
      }
    } catch (err) {
      setMinutes(1)
      setSeconds(0)
    }
  }
  useEffect(() => {
    let interval: any
    if (isActive) {
      interval = setInterval(() => {
        if (seconds === 0 && minutes === 0) {
          clearInterval(interval)
          setIsActive(false)
          // alarmRef.current.play()
          const getTimerData = async () => {
            try {
              const minutes = await AsyncStorage.getItem("minutes")
              const seconds = await AsyncStorage.getItem("seconds")
              if (minutes !== null && seconds !== null) {
                setMinutes(Number(minutes))
                setSeconds(Number(seconds))
              } else {
                setMinutes(1)
                setSeconds(0)
              }
            } catch (err) {
              setMinutes(1)
              setSeconds(0)
            }
          }
          getTimerData()
        }
        if (seconds === 0 && minutes > 0) {
          setMinutes(minutes - 1)
          setSeconds(59)
        }
        if (seconds > 0) setSeconds(seconds - 1)
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [isActive, seconds, minutes])
  useEffect(() => {
    const getTimerData = async () => {
      try {
        const minutes = await AsyncStorage.getItem("minutes")
        const seconds = await AsyncStorage.getItem("seconds")
        if (minutes !== null && seconds !== null) {
          setMinutes(Number(minutes))
          setSeconds(Number(seconds))
        }
      } catch (err) {
        setMinutes(1)
        setSeconds(0)
      }
    }
    getTimerData()
  }, [])

  return (
    <>
      <CustomModal visible={settingsVisible}>
        <StyledText center>Timer settings</StyledText>
        <View style={customStyles.modalLabelsContainer}>
          <StyledText>Minutes</StyledText>
          <StyledText>Seconds</StyledText>
        </View>
        <View style={customStyles.modalInputsContainer}>
          <NumericInput
            rounded
            maxValue={59}
            minValue={0}
            value={minutesEdit}
            onChange={(v) => setMinutesEdit(v)}
          />
          <NumericInput
            rounded
            maxValue={59}
            minValue={0}
            value={secondsEdit}
            onChange={(v) => setSecondsEdit(v)}
          />
        </View>
        <View style={{ flexDirection: "row" }}>
          <Button
            onPress={() => setSettingsVisible(false)}
            style={{ flex: 1, marginRight: 6 }}
            ghostPrimary
          >
            Cancel
          </Button>
          <Button onPress={saveTimer} style={{ flex: 1 }} primary>
            Save
          </Button>
        </View>
      </CustomModal>
      <Animated.View
        style={[
          customStyles.timer,
          {
            backgroundColor: isActive
              ? theme.colors.secondary[500]
              : theme.colors.primary[500],
            transform: [{ translateY: slideAnim }],
          },
        ]}
      >
        <StyledText white center>
          Timer
        </StyledText>
        <StyledText white center heading>
          {`${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`}
        </StyledText>
        <Button
          onPress={() => setSettingsVisible(true)}
          primary={!isActive}
          ghostSecondary={isActive}
          style={customStyles.buttonSettings}
          icon
        >
          <MaterialIcons name="settings" size={24} color="white" />
        </Button>
        <View style={{ flexDirection: "row" }}>
          <Button
            disabled={isActive}
            onPress={() => setIsActive(true)}
            ghostPrimary={!isActive}
            secondary={isActive}
          >
            Start
          </Button>
          <Button
            ghostSecondary={isActive}
            primary={!isActive}
            disabled={!isActive}
            onPress={() => setIsActive(false)}
          >
            Pause
          </Button>
          <Button
            ghostSecondary={isActive}
            primary={!isActive}
            disabled={!isActive}
            onPress={handleStopTimer}
          >
            Stop
          </Button>
        </View>
      </Animated.View>
    </>
  )
}

const customStyles = StyleSheet.create({
  timer: {
    flex: 1,
    borderRadius: 10,
    position: "absolute",
    alignItems: "center",
    bottom: 50,
    left: 0,
    right: 0,
    padding: 10,
    zIndex: 1,
  },
  buttonSettings: {
    position: "absolute",
    top: 10,
    right: 0,
  },
  modalInputsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  modalLabelsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 5,
    marginTop: 10,
  },
})

export default Timer
