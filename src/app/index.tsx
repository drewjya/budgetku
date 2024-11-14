import { Text, View } from "react-native";
import Greet from "../components/Greet";
import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Greet />
      <StatusBar style="auto"/>
      <Link href="/profile" style={{color:'blue'}}>Go TO Profile</Link>
    </View>

  );
}
