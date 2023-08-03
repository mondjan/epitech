import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  loading: {
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  bannerCont: {
    padding: 3,
    width: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  txt: {
    color: "white",
    fontSize: 30,
  },
  smallTxt: {
    color: "white",
    fontSize: 15,
    marginRight: 2,
  },
  txtBold: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  bannerTxt: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default styles;
