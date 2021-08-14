import { firebaseAuth } from "../../../firebase/firebase"
import { Alert } from "./alertType"

export const logInWithEmail = async (
  email: string,
  password: string,
  setIsSubmitting: (v: boolean) => void
): Promise<Alert> => {
  setIsSubmitting(true)
  return await firebaseAuth
    .signInWithEmailAndPassword(email, password)
    .then((user) => {
      setIsSubmitting(false)
      return {
        msg: "Logged!",
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
