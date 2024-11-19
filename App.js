import React, { useState, useEffect } from "react";
import { View, Text, Alert, StyleSheet, Button } from "react-native";
import axios from "axios";
import CurrencyInput from "./components/CurrencyInput";
import CurrencyPicker from "./components/CurrencyPicker";
import ResultDisplay from "./components/ResultDisplay";

const CurrencyConverter = () => {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [currencies, setCurrencies] = useState([]);

  // Fetch available currencies when component mounts
  useEffect(() => {
    axios
      .get("https://api.exchangerate-api.com/v4/latest/USD")
      .then((response) => {
        setCurrencies(Object.keys(response.data.rates));
      })
      .catch((error) => {
        Alert.alert("Error", "Unable to fetch currencies.");
      });
  }, []);

  // Handle conversion
  const handleConvert = () => {
    if (!amount || isNaN(amount)) {
      Alert.alert("Invalid Input", "Please enter a valid number.");
      return;
    }

    axios
      .get(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
      .then((response) => {
        const rate = response.data.rates[toCurrency];
        const result = (amount * rate).toFixed(2);
        setConvertedAmount(result);
      })
      .catch((error) => {
        Alert.alert("Error", "Conversion failed. Please try again.");
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Currency Converter</Text>

      <CurrencyInput amount={amount} setAmount={setAmount} />

      <CurrencyPicker
        label="From"
        selectedCurrency={fromCurrency}
        setCurrency={setFromCurrency}
        currencies={currencies}
      />

      <CurrencyPicker
        label="To"
        selectedCurrency={toCurrency}
        setCurrency={setToCurrency}
        currencies={currencies}
      />

      <Button title="Convert" onPress={handleConvert} />

      {convertedAmount && (
        <ResultDisplay
          amount={amount}
          fromCurrency={fromCurrency}
          toCurrency={toCurrency}
          convertedAmount={convertedAmount}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
  },
});

export default CurrencyConverter;
