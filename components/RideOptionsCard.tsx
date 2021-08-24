import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import tw from "tailwind-react-native-classnames"

const RideOptionsCard = () => {
  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Text style={tw`text-center py-5 text-xl`}>2枚目</Text>
    </SafeAreaView>
  )
}

export default RideOptionsCard

const styles = StyleSheet.create({})
