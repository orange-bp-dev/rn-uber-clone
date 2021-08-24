import React from "react"
import { SafeAreaView, StyleSheet, Image, View } from "react-native"
import tw from "tailwind-react-native-classnames"
import NavOptions from "../components/NavOptions"
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete"
//@ts-ignore
import { GOOGLE_MAPS_APIKEY } from "@env"
console.log("key------------------", GOOGLE_MAPS_APIKEY)

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image style={{ width: 100, height: 100, resizeMode: "contain" }} source={{ uri: "https://links.papareact.com/gzs" }} />
        <GooglePlacesAutocomplete
          nearbyPlacesAPI="GooglePlacesSearch"
          placeholder="where from ?"
          debounce={10}
          query={{ key: GOOGLE_MAPS_APIKEY, language: "en" }}
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(data, details)
          }}
          styles={{
            container: {
              flex: 0
            },
            textInput: {
              fontSize: 18
            }
          }}
        />
        <NavOptions />
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})

//rnfes -> screenComponentの雛形作成
