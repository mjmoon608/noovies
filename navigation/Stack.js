import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DetailScreen from "../screens/Detail";
import Tabs from "./Tabs";

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator
    mode="card"
    screenOptions={{
      headerStyle: {
        backgroundColor: "black",
        borderBottomColor: "black", // 아이폰에서 헤더와 스크린을 구분하는 선을 없애기 위해 색상 통일
        shadowColor: "black", // 아이폰에서 헤더와 스크린을 구분하는 선을 없애기 위해 색상 통일
      },
      headerTintColor: "white",
      headerBackTitleVisible: false,
      headerTitleAlign: "center", // 안드로이드에서 headerTitle을 중간에 놓기 위해 넣음.
    }}
  >
    {/* 여기에 스크린을 넣을 거임 */}
    <Stack.Screen name="Tabs" component={Tabs} />
    <Stack.Screen name="Detail" component={DetailScreen} />
  </Stack.Navigator>
);
