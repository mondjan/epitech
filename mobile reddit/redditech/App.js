import { StyleSheet, View, SafeAreaView } from "react-native";
import { useState } from "react";
import {
  DefaultTheme,
  Button,
  Provider as PaperProvider,
  DarkTheme as PaperDarkTheme,
} from "react-native-paper";
import NavBar from "./components/navigation/NavBar";
import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import { ACCESS_TOKEN } from "@env";

// import { useTheme } from "react-native-paper";

// import { NavigationContainer,  } from "@react-navigation/native";

// import { DarkTheme as PaperDarkTheme } from "react-native-paper";

const theme = {
  ...DefaultTheme,
  roundness: 4,
  colors: {
    ...DefaultTheme.colors,
    primary: "#3498db",
    accent: "#f1c40f",
    dark: true,
  },
};

export default function App() {
  // const theme = useTheme();
  console.log(ACCESS_TOKEN);
  return (
    <NavigationContainer theme={DarkTheme}>
      <PaperProvider theme={theme}>
        <NavBar />
      </PaperProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#aaa",
    color: "#00FFFF",
  },
  text: { borderColor: "red", borderWidth: 1 },
});
