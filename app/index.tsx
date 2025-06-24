import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function Home() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 16,
      }}
    >
      <TouchableOpacity
        onPress={() => {
          router.push("/first-step");
        }}
        style={{
          backgroundColor: "#000",
          paddingHorizontal: 30,
          paddingVertical: 20,
          borderRadius: 10,
        }}
      >
        <Text style={{ color: "#fff", fontSize: 20 }}>First Step</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          router.push("/first-step");
        }}
        style={{
          backgroundColor: "#000",
          paddingHorizontal: 30,
          paddingVertical: 10,
          borderRadius: 10,
        }}
      >
        <Text style={{ color: "#fff", fontSize: 20 }}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}
