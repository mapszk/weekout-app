import { useEffect, useState } from "react"
import { firebaseDb } from "../firebase/firebase"
import { DaysData } from "../types/DaysData"
import { DayData } from "../types/DayData"

export const useGetDay = (uid: string, day: string) => {
  const [data, setData] = useState<DayData | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  useEffect(() => {
    const getData = async () => {
      setLoading(true)
      await firebaseDb
        .collection("users")
        .doc(uid)
        .get()
        .then((doc) => {
          const days = doc.data() as DaysData
          const dayData: DayData = days[day]
          setData(dayData)
        })
        .catch(() => setData(null))
        .finally(() => setLoading(false))
    }
    getData()
  }, [uid, day])
  return { data, loading }
}
