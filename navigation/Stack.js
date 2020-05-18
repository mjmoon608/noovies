import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DetailScreen from "../screens/Detail";
import Tabs from "./Tabs";

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator>
    {/* 여기에 스크린을 넣을 거임 */}
    <Stack.Screen name="Tabs" component={Tabs} />
    <Stack.Screen name="Detail" component={DetailScreen} />
  </Stack.Navigator>
);
