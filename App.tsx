import React from "react"
import { StyleSheet, KeyboardAvoidingView, Platform } from "react-native"
import { Provider } from "react-redux"
import { store } from "./store"
import HomeScreen from "./screens/HomeScreen"
import { SafeAreaProvider } from "react-native-safe-area-context"
import "react-native-gesture-handler"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import MapScreen from "./screens/MapScreen"
import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue } from "recoil"

export default function App() {
  const Stack = createStackNavigator()

  return (
    <RecoilRoot>
      <Provider store={store}>
        <NavigationContainer>
          <SafeAreaProvider>
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ flex: 1 }}>
              <Stack.Navigator>
                <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
                <Stack.Screen name="MapScreen" component={MapScreen} options={{ headerShown: false }} />
              </Stack.Navigator>
            </KeyboardAvoidingView>
          </SafeAreaProvider>
        </NavigationContainer>
      </Provider>
    </RecoilRoot>
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
