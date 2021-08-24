import React from "react"
import { StyleSheet, Text, View } from "react-native"
import tw from "tailwind-react-native-classnames"
import MapView, { Marker } from "react-native-maps"
import { useSelector } from "react-redux"
import { selectOrigin } from "../slices/navSlice"
import { RecoilState, useRecoilState } from "recoil"
import { geoLocationState } from "../providers/geoLocationState"
import { destinationState } from "../providers/destinationState"
import MapViewDirections from "react-native-maps-directions"
//@ts-ignore
import { GOOGLE_MAPS_APIKEY } from "@env"

const Map = () => {
  const origin = useSelector(selectOrigin)

  interface Geolocation {
    description: string
    location: { lat: number; lng: number }
  }

  const [geoLocation, setGeoLocation] = useRecoilState<any>(geoLocationState)
  const [destination, setDestination] = useRecoilState<any>(destinationState)
  //出力できる
  console.log("geoLocation =====", geoLocation)
  console.log("destination =====", destination)
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
    >
      {geoLocation && destination && <MapViewDirections origin={geoLocation.description} destination={destination.description} apikey={GOOGLE_MAPS_APIKEY} strokeColor="black" strokeWidth={3} />}
      {geoLocation?.location && <Marker coordinate={{ latitude: geoLocation.location.lat, longitude: geoLocation.location.lng }} title="Origin" description={geoLocation.description} identifier="origin" />}
    </MapView>
  )
}

export default Map

const styles = StyleSheet.create({})
