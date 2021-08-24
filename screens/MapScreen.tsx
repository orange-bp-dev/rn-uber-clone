import React from "react"
import { StyleSheet, Text, View } from "react-native"
import tw from "tailwind-react-native-classnames"
// import MapView from "react-native-maps"
import Map from "../components/Map"

const MapScreen = () => {
  return (
    <View>
      <Text>map</Text>
      <View style={tw`h-1/2 bg-red-100`}>
        <Map />
      </View>
      <View style={tw`h-1/2`}></View>
    </View>
  )
}

export default MapScreen

const styles = StyleSheet.create({})
