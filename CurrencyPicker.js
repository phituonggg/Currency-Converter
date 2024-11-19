import React from "react";
import { Text, StyleSheet } from "react-native";
import RNPickerSelect from "react-native-picker-select";

const CurrencyPicker = ({ label, selectedCurrency, setCurrency, currencies }) => {
  return (
    <>
      <Text style={styles.label}>{label}:</Text>
      <RNPickerSelect
        onValueChange={setCurrency}
        items={currencies.map((currency) => ({
          label: currency,
          value: currency,
        }))}
        value={selectedCurrency}
        style={pickerSelectStyles}
      />
    </>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    marginVertical: 10,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 4,
    color: "black",
    paddingRight: 30,
    marginBottom: 20,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: "gray",
    borderRadius: 8,
    color: "black",
    paddingRight: 30,
    marginBottom: 20,
  },
});

export default CurrencyPicker;
