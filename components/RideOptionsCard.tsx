import { useNavigation } from "@react-navigation/native"
import React, { useState } from "react"
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityBase, View, FlatList, Image } from "react-native"
import { Icon } from "react-native-elements/dist/icons/Icon"
import { SafeAreaView } from "react-native-safe-area-context"
import { useRecoilState } from "recoil"
import tw from "tailwind-react-native-classnames"
import { travelTimeState } from "../providers/travelTimeState"

const data = [
  {
    id: "1",
    title: "Uber A",
    multipulier: 1,
    image: "https://links.papareact.com/3pn"
  },
  {
    id: "2",
    title: "Uber B",
    multipulier: 1.2,
    image: "https://links.papareact.com/5w8"
  },
  {
    id: "3",
    title: "Uber C",
    multipulier: 1.75,
    image: "https://links.papareact.com/7pf"
  }
]

const RideOptionsCard = () => {
  const navigation: any = useNavigation()
  const [selected, setSelected] = useState<any>("")
  const [travelTime, setTravelTime] = useRecoilState<any>(travelTimeState)
  console.log("-------------------travelTime", travelTime?.rows[0]?.elements[0]?.distance?.text)

  const distance = travelTime?.rows[0]?.elements[0]?.distance?.text
  const duration = travelTime?.rows[0]?.elements[0]?.duration?.text
  const durationValue = travelTime?.rows[0]?.elements[0]?.duration?.value

  const SURGE_CHARGE_RATE = 150

  console.log("selected", selected ? true : false)
  console.log("--------------------", duration)
  //navigation.navigate("NavigateCard")

  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
      <TouchableOpacity onPress={() => navigation.navigate("NavigateCard")} style={tw`absolute top-3 left-5 p-3 rounded-full`}>
        <Icon name="chevron-left" type="fontawesome" />
        <Text>{distance}</Text>
      </TouchableOpacity>
      {/* <View>
          <Text style={tw`text-center py-5 ml-5 text-xl`}>Select a Ride</Text>
        </View> */}

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item: { image, id, title, multipulier }, item }) => (
          //@ts-ignore
          <TouchableOpacity onPress={() => setSelected(item)} style={tw`flex-row justify-between items-center px-10 ${selected.id === id && "bg-gray-200"}`}>
            <Image source={{ uri: image }} style={{ width: 100, height: 100, resizeMode: "contain" }} />
            <View>
              <Text style={tw`text-xl font-semibold`}>{title}</Text>
              <Text>{duration}</Text>
            </View>
            <Text style={tw`text-xl`}>¥{(durationValue * SURGE_CHARGE_RATE * multipulier) / 100}</Text>
          </TouchableOpacity>
        )}
      />
      <View>
        {/* @ts-ignore */}
        <TouchableOpacity disabled={true} style={tw`bg-black py-3 m-3 ${!selected && "bg-gray-300"}`}>
          <Text style={tw`text-center text-white text-xl`}>Choose {selected.title}?</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default RideOptionsCard

const styles = StyleSheet.create({})
