import { createStackNavigator } from "@react-navigation/stack"
import React from "react"
import { StyleSheet, Text, View } from "react-native"
import tw from "tailwind-react-native-classnames"
// import MapView from "react-native-maps"
import Map from "../components/Map"
import NavigateCard from "../components/NavigateCard"
import RideOptionsCard from "../components/RideOptionsCard"

const MapScreen = () => {
  const Stack = createStackNavigator()
  return (
    <View>
      <Text>map</Text>
      <View style={tw`h-1/4`}>
        <Stack.Navigator>
          <Stack.Screen name="NavigateCard" component={NavigateCard} options={{ headerShown: false }} />
          <Stack.Screen name="RideOptionsCard" component={RideOptionsCard} options={{ headerShown: false }} />
        </Stack.Navigator>
      </View>
      <View style={tw`h-3/4 bg-red-100`}>
        <Map />
      </View>
    </View>
  )
}

export default MapScreen

const styles = StyleSheet.create({})
