import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ResultDisplay = ({
  amount,
  fromCurrency,
  toCurrency,
  convertedAmount,
}) => {
  return (
    <View style={styles.resultContainer}>
      <Text style={styles.resultTitle}>Conversion Result:</Text>
      <View style={styles.resultTable}>
        <Text style={styles.resultText}>
          {amount} {fromCurrency}
        </Text>
        <Text style={styles.equalsText}>=</Text>
        <Text style={styles.resultText}>
          {convertedAmount} {toCurrency}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  resultContainer: {
    marginTop: 20,
  },
  resultTitle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  resultTable: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
  },
  resultText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  equalsText: {
    fontSize: 18,
    marginHorizontal: 10,
  },
});

export default ResultDisplay;
