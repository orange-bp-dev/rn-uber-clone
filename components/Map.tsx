import React from "react"
import { StyleSheet, Text, View } from "react-native"
import tw from "tailwind-react-native-classnames"
import MapView from "react-native-maps"
import { useSelector } from "react-redux"
import { selectOrigin } from "../slices/navSlice"
import { RecoilState, useRecoilState } from "recoil"
import { geoLocationState } from "../providers/geoLocationState"
import internal from "stream"

const Map = () => {
  const origin = useSelector(selectOrigin)

  interface Geolocation {
    description: string
    location: { lat: number; lng: number }
  }

  const [geoLocation, setGeoLocation] = useRecoilState<any>(geoLocationState)
  // console.log("========================MapView コンポーネント", geoLocation?.location?.lat)
  return (
    <MapView
      style={tw`flex-1`}
      mapType="mutedStandard"
      initialRegion={{
        latitude: geoLocation?.location?.lat,
        longitude: geoLocation?.location?.lng,
        // latitude: origin.location.lat,
        // longitude: origin.location.lng,
        // latitude: 37.78825,
        // longitude: -122.4324,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005
      }}
    />
  )
}

export default Map

const styles = StyleSheet.create({})
