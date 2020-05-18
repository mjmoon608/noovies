import React from "react";
import { View, Text, Button } from "react-native";

export default ({ navigation }) => (
  <View style={{ flex: 1, backgroundColor: "black" }}>
    <Text style={{ color: "white" }}>Movies💛</Text>
    <Button title="Movie" onPress={() => navigation.navigate("Detail")} />
  </View>
);
