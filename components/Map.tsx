import React, { useEffect, useRef } from "react"
import { StyleSheet, Text, View } from "react-native"
import tw from "tailwind-react-native-classnames"
import MapView, { Marker } from "react-native-maps"
import { useSelector } from "react-redux"
// import { selectOrigin } from "../slices/navSlice"
import { RecoilState, useRecoilState } from "recoil"
import { geoLocationState } from "../providers/geoLocationState"
import { destinationState } from "../providers/destinationState"
import MapViewDirections from "react-native-maps-directions"
//@ts-ignore
import { GOOGLE_MAPS_APIKEY } from "@env"
import { travelTimeState } from "../providers/travelTimeState"

const Map = () => {
  // const origin = useSelector(selectOrigin)

  interface Geolocation {
    description: string
    location: { lat: number; lng: number }
  }

  const [geoLocation, setGeoLocation] = useRecoilState<any>(geoLocationState)
  const [destination, setDestination] = useRecoilState<any>(destinationState)
  const [travelTime, setTravelTime] = useRecoilState<any>(travelTimeState)

  const mapRef: any = useRef(null)

  //出力できる
  console.log("geoLocation =====", geoLocation)
  console.log("destination =====", destination)

  useEffect(() => {
    if (!geoLocation || !destination) return

    mapRef.current.fitToSuppliedMarkers(["origin", "destination"], {
      edgePadding: { top: 50, right: 50, bottom: 50, left: 50 }
    })
  }, [geoLocation, destination])

  useEffect(() => {
    if (!geoLocation || !destination) return

    const getTravelTime = async () => {
      fetch(`https://maps.googleapis.com/maps/api/distancematrix/json?utils=imperial
      &origins=${geoLocation.description}
      &destinations=${destination.description}
      &key=${GOOGLE_MAPS_APIKEY}`)
        .then((res) => res.json())
        .then((data) => {
          setTravelTime(data)
          console.log("距離ド内", data)
        })
    }
    getTravelTime()
  }, [geoLocation, destination, GOOGLE_MAPS_APIKEY])

  return (
    <MapView
      ref={mapRef}
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
      {geoLocation?.location && <Marker coordinate={{ latitude: geoLocation.location.lat, longitude: geoLocation.location.lng }} title="出発地" description={geoLocation.description} identifier="origin" />}
      {destination?.location && <Marker coordinate={{ latitude: destination.location.lat, longitude: destination.location.lng }} title="目的地" description={destination.description} identifier="destination" />}
    </MapView>
  )
}

export default Map

const styles = StyleSheet.create({})
