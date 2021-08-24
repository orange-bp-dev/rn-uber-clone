import { atom } from "recoil"

export const geoLocationState = atom({
  key: "getLocationiState",
  default: { location: null, description: "" }
})
