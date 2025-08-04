import { useState } from "react";
import { Text, TextInput, View } from "react-native";

export default function FirstStep() {
  const [amount, setAmount] = useState("");
  return (
    <View
      style={{
        marginTop: 20,
        paddingHorizontal: 20,
      }}
    >
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          marginBottom: 12,
        }}
      >
        Enter your amount
      </Text>
      <TextInput
        value={amount}
        onChangeText={setAmount}
        placeholder="Enter amount"
        keyboardType="numeric"
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          borderRadius: 6,
          padding: 10,
          marginBottom: 12,
          fontSize: 16,
        }}
      />
      {amount && (
        <Text>
          You will receive USD {parseFloat(amount || "0").toFixed(2)} tokens in
          your wallet.
        </Text>
      )}
    </View>
  );
}
