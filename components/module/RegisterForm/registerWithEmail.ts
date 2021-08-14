import { firebaseAuth, firebaseDb } from "../../../firebase/firebase"
import { Alert } from "../../../types/AlertType"

export const registerWithEmail = async (
  email: string,
  password: string,
  setIsSubmitting: (v: boolean) => void
): Promise<Alert> => {
  setIsSubmitting(true)
  let user: any
  return await firebaseAuth
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      user = userCredential.user
      return firebaseDb.collection("users").doc(user?.uid).get()
    })
    .then((doc) => {
      return firebaseDb
        .collection("users")
        .doc(user?.uid)
        .set({
          sunday: {
            restDay: false,
            noneVolume: [],
            minVolume: [],
            midVolume: [],
            maxVolume: [],
          },
          monday: {
            restDay: false,
            noneVolume: [],
            minVolume: [],
            midVolume: [],
            maxVolume: [],
          },
          tuesday: {
            restDay: false,
            noneVolume: [],
            minVolume: [],
            midVolume: [],
            maxVolume: [],
          },
          wednesday: {
            restDay: false,
            noneVolume: [],
            minVolume: [],
            midVolume: [],
            maxVolume: [],
          },
          thursday: {
            restDay: false,
            noneVolume: [],
            minVolume: [],
            midVolume: [],
            maxVolume: [],
          },
          friday: {
            restDay: false,
            noneVolume: [],
            minVolume: [],
            midVolume: [],
            maxVolume: [],
          },
          saturday: {
            restDay: false,
            noneVolume: [],
            minVolume: [],
            midVolume: [],
            maxVolume: [],
          },
        })
    })
    .then(() => {
      return {
        msg: "Account created",
        status: "success",
      }
    })
    .catch((err) => {
      setIsSubmitting(false)
      return {
        msg: err.message,
        status: "error",
      }
    })
}
