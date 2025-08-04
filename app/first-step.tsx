import { useState } from "react";
import { Text, TextInput, View } from "react-native";

const formatAmount = (value: string): string => {
  const numericValue = parseFloat(value);
  if (isNaN(numericValue)) {
    return value; // Return original value if not a valid number
  }
  return numericValue.toFixed(2);
};

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
        <Text>You will receive USD {formatAmount(amount)} tokens in your wallet.</Text>
      )}
    </View>
  );
}
