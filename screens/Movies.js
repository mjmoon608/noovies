import React, { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";
import { movieApi } from "../api";

export default () => {
  const [nowPlaying, setNowPlaying] = useState({
    movies: [],
    error: null,
  });

  const getData = async () => {
    const {
      data: { result },
    } = await movieApi.nowPlaying();
    console.log(result);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <Text style={{ color: "white" }}>Movies💛</Text>
    </View>
  );
};
