import { atom } from "recoil"

export const destinationState = atom({
  key: "destinationState",
  default: { location: null, description: "" }
})
