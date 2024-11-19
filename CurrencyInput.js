import React from "react";
import { TextInput, StyleSheet } from "react-native";

const CurrencyInput = ({ amount, setAmount }) => {
  return (
    <TextInput
      style={styles.input}
      keyboardType="numeric"
      placeholder="Enter amount"
      value={amount}
      onChangeText={setAmount}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
});

export default CurrencyInput;
