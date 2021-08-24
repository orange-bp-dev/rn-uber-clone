import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import tw from "tailwind-react-native-classnames"
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete"
//@ts-ignore
import { GOOGLE_MAPS_APIKEY } from "@env"
import { useNavigation } from "@react-navigation/native"
import { useRecoilState } from "recoil"
import { destinationState } from "../providers/destinationState"

const NavigateCard = () => {
  const navigation: any = useNavigation()
  const [destination, setDestination] = useRecoilState<any>(destinationState)

  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      {/* <Text style={tw`text-center text-xl`}>1枚目</Text> */}
      <View style={tw`border-t border-gray-200 flex-shrink`}>
        <GooglePlacesAutocomplete
          styles={styles}
          placeholder="Where to?"
          nearbyPlacesAPI="GooglePlacesSearch"
          onPress={(data, details = null) => {
            //location & description
            console.log("-----------------", details)
            setDestination({
              location: details?.geometry.location,
              description: data.description
            })
            // // console.log(data, details)
            navigation.navigate("RideOptionsCard")
          }}
          fetchDetails={true}
          debounce={400}
          query={{ key: GOOGLE_MAPS_APIKEY, language: "ja" }}
        />
      </View>
    </SafeAreaView>
  )
}

export default NavigateCard

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingTop: 20,
    flex: 0
  },
  textInput: {
    backgroundColor: "#DDDDDF",
    borderRadius: 0,
    fontSize: 18
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0
  }
})
