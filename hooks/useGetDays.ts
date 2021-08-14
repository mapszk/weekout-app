import { useEffect, useState } from "react"
import { firebaseDb } from "../firebase/firebase"
import { DaysData } from "../types/DaysData"

export const useGetDays = (uid: string) => {
  const [data, setData] = useState<DaysData | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  useEffect(() => {
    const getData = async () => {
      setLoading(true)
      return await firebaseDb
        .collection("users")
        .doc(uid)
        .get()
        .then((doc) => {
          setData(doc.data() as DaysData)
        })
        .catch(() => setData(null))
        .finally(() => setLoading(false))
    }
    getData()
  }, [uid])
  return { data, loading }
}
