import { StatusBar } from "expo-status-bar"
import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { Provider } from "react-redux"
import { store } from "./store"
import HomeScreen from "./screens/HomeScreen"

export default function App() {
  return (
    //@ts-ignore
    <Provider store={store}>
      <View style={styles.container}>
        {/* <Text>Lets build UBER!</Text>
        <StatusBar style="auto" /> */}
        <HomeScreen />
      </View>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center"
  }
})
