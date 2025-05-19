// Authored by: Jamarcus JanGavril C. Mariano
// Company: Schlaf Shön
// Project: Tabangi Na Ko
// [TNK-7] Home Tab Screen
// Description: As a user, I want to be able to choose to view Housekeeper candidates and/or Household offers.

import React from 'react';
import { Text, View, Image } from "react-native";
import { Bell, MoveRight } from 'lucide-react-native';


export default function Index() {
  return (
    <View className="flex-1 bg-primary">
      <View>
        <Bell
          color={'white'}
          size={26}
          style={{
            marginTop: 25,
            marginRight: 25,
            alignSelf: 'flex-end'
          }}
        />
      </View>
      <View>
        <Text className="text-5xl text-white ml-5 font-bold">Connect and</Text>
        <Text className="text-5xl text-white ml-5 font-bold">Stay Clean!</Text>
      </View>

      <View>
        <Text className="text-2xl text-white ml-5 mt-5">Housekeepers</Text>
        <View className="bg-secondary w-[90%] h-[55%] rounded-[11px] mx-5">
          <Image source={require('@/assets/images/housekeeper_image.png')} className="h-[90%] w-full border rounded-tl-[10px] rounded-tr-[10px]" />
          <View className="flex items-end">
            <Text className="font-bold pt-1 pr-2">
              View Candidates
              <View className="flex items-end">
                <MoveRight
                  color={'black'}
                  size={12}
                  style={{
                    marginLeft: 2
                  }}
                />
              </View>
            </Text>
          </View>

        </View>
      </View>

      <View>
        <Text className="text-2xl text-white ml-5 -mt-40">Housekeepers</Text>
        <View className="bg-secondary w-[90%] h-[65%] rounded-[11px] mx-5">
          <Image source={require('@/assets/images/household_image.png')} className="h-[90%] w-full border rounded-tl-[10px] rounded-tr-[10px]" />
          <View className="flex items-end">
            <Text className="font-bold pt-1 pr-2">
              View Candidates
              <View className="flex items-end">
                <MoveRight
                  color={'black'}
                  size={12}
                  style={{
                    marginLeft: 2
                  }}
                />
              </View>
            </Text>
          </View>

        </View>
      </View>

    </View>
  );
}