// Authored by: Jamarcus JanGavril C. Mariano
// Company: Schlaf Shön
// Project: Tabangi Na Ko
// [TNK-9] Message Tab Screen
// Description: As a user, I want to be able to message Housekeeper candidates regarding their service and/or Household owners regarding their offers for further clarification.

import {View, Text, Image} from 'react-native'
import React from 'react'
import { Bell, Search} from 'lucide-react-native';


const Messages = () => {
    return (
        <View className="flex-1 bg-primary">
            <View>
                <Bell
                    color={'white'}
                    size={25}
                    style={{
                        marginTop: 25,
                        marginRight: 25,
                        alignSelf: 'flex-end'
                    }} 
                />
            </View>

            {/* search container */}
            <View className="bg-secondary h-[6%] w-[75%] rounded-2xl mt-7 justify-center self-center">
                <View className="flex-row">
                    <Search 
                        color={'gray'}
                        size={25}
                        style={{
                            margin: '3%'
                        }} 
                    />
                    <Text className="text-lg color-gray-500 align-middle">Search Messages</Text>
                </View>
            </View>
            {/* end of search container */}

            <Text className="text-5xl text-white ml-5 mt-4 font-bold">Recent Chats</Text>

            {/* recent chats container */}
            <View className="bg-secondary h-[12%] w-[90%] rounded-[10px] mb-3 justify-center self-center">
                <View className="flex-row">
                    <Image source={require('@/assets/images/user.png')} className="h-16 w-16 self-center ml-5"/>

                    <View className="flex-col">
                        <Text className='text-2xl font-bold ml-3 mt-3'>Tyler Garcia</Text>

                        <View className="flex-row w-[90%] justify-evenly">
                            <Text className="text-gray-500 text-lg">I'll be right there! See ya!</Text>
                            <Text className="text-gray-500 text-base">5:45 PM</Text>
                        </View>
                    </View>
                </View>       
            </View>
            <View className="bg-secondary h-[12%] w-[90%] rounded-[10px] mb-3 justify-center self-center">
                <View className="flex-row">
                    <Image source={require('@/assets/images/woman.png')} className="h-16 w-16 self-center ml-5"/>

                    <View className="flex-col">
                        <Text className='text-2xl font-bold ml-3 mt-3'>Sarah Ahai</Text>

                        <View className="flex-row w-[90%] justify-evenly">
                            <Text className="text-black text-lg font-extrabold">Hey, I noticed you have ...</Text>
                            <Text className="text-black text-base font-extrabold">5:45 PM</Text>
                        </View>
                    </View>
                </View>       
            </View>
            <View className="bg-secondary h-[12%] w-[90%] rounded-[10px] mb-3 justify-center self-center">
                <View className="flex-row">
                    <Image source={require('@/assets/images/woman1.png')} className="h-16 w-16 self-center ml-5"/>

                    <View className="flex-col">
                        <Text className='text-2xl font-bold ml-3 mt-3'>Elizabeth Buck</Text>

                        <View className="flex-row w-[90%] justify-evenly">
                            <Text className="text-gray-500 text-lg">I'll be right there! See ya!</Text>
                            <Text className="text-gray-500 text-base">5:45 PM</Text>
                        </View>
                    </View>
                </View>       
            </View>
            {/* end of recent chats container */}
                    



        </View>
    )
}

export default Messages

