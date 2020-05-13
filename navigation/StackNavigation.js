import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/Home";
import DetailScreen from "../screens/Detail";

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator>
    {/* 여기에 스크린을 넣을 거임 */}
    <Stack.Screen name="Home!!" component={HomeScreen} />
    <Stack.Screen name="Detail" component={DetailScreen} />
  </Stack.Navigator>
);
