import { atom } from "recoil"

export const travelTimeState = atom({
  key: "travelTimeState",
  default: { time: null }
})
