import { useState } from "react";
import { Text, TextInput, View } from "react-native";

export default function FirstStep() {
  const [amount, setAmount] = useState("");

  // Helper function to format amount with 2 decimal places
  const formatAmount = (value: string): string => {
    const numericValue = parseFloat(value);
    if (isNaN(numericValue)) return "0.00";
    return numericValue.toFixed(2);
  };
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
          You will receive USD {formatAmount(amount)} tokens in your wallet.
        </Text>
      )}
    </View>
  );
}
