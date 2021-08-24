import { useNavigation } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import React, { useEffect, useState } from "react"
import { Keyboard, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { Icon } from "react-native-elements/dist/icons/Icon"
import tw from "tailwind-react-native-classnames"
// import MapView from "react-native-maps"
import Map from "../components/Map"
import NavigateCard from "../components/NavigateCard"
import RideOptionsCard from "../components/RideOptionsCard"

const MapScreen = () => {
  const Stack = createStackNavigator()
  const navigation = useNavigation()

  return (
    <View>
      {/* @ts-ignore */}
      <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")} style={tw`absolute bg-gray-100 top-16 left-8 z-50 p-3 rounded-full shadow-lg`}>
        <Icon name="menu" />
      </TouchableOpacity>
      <View style={tw`h-1/2 bg-red-100`}>
        <Map />
      </View>
      <View style={tw`h-1/2`}>
        <Stack.Navigator>
          <Stack.Screen name="NavigateCard" component={NavigateCard} options={{ headerShown: false }} />
          <Stack.Screen name="RideOptionsCard" component={RideOptionsCard} options={{ headerShown: false }} />
        </Stack.Navigator>
      </View>
    </View>
  )
}

export default MapScreen

const styles = StyleSheet.create({})
