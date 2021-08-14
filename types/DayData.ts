import { Exercise } from "./Exercise"

export interface DayData {
  restDay: boolean
  noneVolume: Exercise[]
  minVolume: Exercise[]
  midVolume: Exercise[]
  maxVolume: Exercise[]
}
