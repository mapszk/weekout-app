import { firebaseDb } from "../../../firebase/firebase"
import { Alert } from "../../../types/AlertType"
import { DayData } from "../../../types/DayData"

export const saveDayDb = async (
  dayData: DayData,
  dayName: string,
  uid: string
): Promise<Alert> => {
  return await firebaseDb
    .collection("users")
    .doc(uid)
    .update({ [dayName as string]: dayData })
    .then(() => {
      return {
        msg: "Day saved!",
        status: "success",
      }
    })
    .catch((err) => {
      return {
        msg: err.message,
        status: "error",
      }
    })
}
