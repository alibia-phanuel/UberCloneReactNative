import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "@/constants";
import React from "react";

const BookRide = () => {
  return (
    <SafeAreaView className="flex-1 bg-white p-5">
      <View className="flex-1 h-fit flex justify-center items-center">
        <Text className="text-base mt-2 text-center px-7">BookRide</Text>
      </View>
    </SafeAreaView>
  );
};

export default BookRide;
