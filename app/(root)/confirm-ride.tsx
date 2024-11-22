import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ConfirmRide = () => {
  return (
    <SafeAreaView className="flex-1 bg-white p-5">
      <View className="flex-1 h-fit flex justify-center items-center">
        <Text className="text-base mt-2 text-center px-7">ConfirmRide</Text>
      </View>
    </SafeAreaView>
  );
};

export default ConfirmRide;
