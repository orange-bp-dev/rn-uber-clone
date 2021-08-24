import React, { useEffect } from "react"
import { SafeAreaView, StyleSheet, Image, View } from "react-native"
import tw from "tailwind-react-native-classnames"
import NavOptions from "../components/NavOptions"
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete"
//@ts-ignore
import { GOOGLE_MAPS_APIKEY } from "@env"
import { useDispatch, useSelector } from "react-redux"
// import { selectOrigin, setDestination, setOrigin } from "../slices/navSlice"
import { useRecoilState } from "recoil"
import { geoLocationState } from "../providers/geoLocationState"
import NavFavorites from "../components/NavFavorites"

const HomeScreen = () => {
  // const dispatch = useDispatch()
  // const origin = useSelector(selectOrigin)
  const [geoLocation, setGeoLocation] = useRecoilState(geoLocationState)

  // useEffect(() => {
  //   console.log("location ------------", location)
  // }, [])

  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image style={{ width: 100, height: 100, resizeMode: "contain" }} source={{ uri: "https://links.papareact.com/gzs" }} />
        <GooglePlacesAutocomplete
          // nearbyPlacesAPI="GooglePlacesSearch"
          placeholder="where from ?"
          query={{ key: GOOGLE_MAPS_APIKEY, language: "ja" }}
          onPress={(data, details = null) => {
            // // 'details' is provided when fetchDetails = true
            // console.log(details?.geometry?.location)
            setGeoLocation({
              //@ts-ignore
              location: details?.geometry?.location,
              description: data?.description
            })

            // console.log(geoLocation)

            //   dispatch(
            //     setOrigin({
            //       location: details?.geometry.location,
            //       description: data.description
            //     })
            //   )
            // // dispatch(setDestination(null))
          }}
          fetchDetails={true}
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
        <NavFavorites />
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})

//rnfes -> screenComponentの雛形作成
