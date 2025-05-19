// Authored by: Jamarcus JanGavril C. Mariano
// Company: Schlaf Shön
// Project: Tabangi Na Ko
// [TNK-12] Status Tab Screen
// Description:

import {View, Text, Image} from 'react-native'
import React from 'react'
import { Bell } from 'lucide-react-native';


const Status = () => {
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
            
            <View className="flex-row justify-center">
                <View className="bg-secondary rounded-tl-[15px] rounded-bl-[15px] mt-[30px] justify-center px-4 py-2">
                    <Text className='font-bold'>Households</Text>
                </View>
                <View className="bg-gray-500 rounded-tr-[15px] rounded-br-[15px] mt-[30px] justify-center px-4 py-2">
                    <Text className='font-bold'>Housekeepers</Text>
                </View>
            </View>

            <View className="h-0.5 bg-secondary my-[20px]"></View>
            
            {/* status card */}
            <View className="flex-row">
                <View className="h-full w-[47%] rounded-[10px] bg-secondary ml-2">
                    <Image source={require('@/assets/images/household_image.png')} className= "h-[15%] w-[75%] rounded-tr-[10px] rounded-tl-[10px] mt-5 self-center border"/>
                    <View className="mt-2 items-center"> 
                        <Text className="font-bold text-xl">                        
                            Vega Household
                        </Text>
                        <Text className="text-sm">
                            at
                        </Text>
                        <Text className="text-sm">
                            Naga City, Camarines Sur
                        </Text>
                        <Text className="text-sm">
                            01234567891
                        </Text>
                        <Text className="text-sm">
                            vega_household@gmail.com
                        </Text>
                        <Text className="text-sm">
                            Hired | March 14, 2025
                        </Text>
                    </View>

                    <View className="mt-3 ml-3">
                        <View className="flex-row">
                            <Text className="font-medium">Service:</Text>
                            <View className="bg-gray-300 rounded-[10px] mx-1 py-1 px-2 justify-center">
                                <Text className="text-sm">Pet</Text>
                            </View>
                            <View className="bg-gray-300 rounded-[10px] mx-1 py-1 px-2 justify-center">
                                <Text className="text-sm">Errands</Text>
                            </View>
                        </View>

                        <Text className='mt-2 font-medium'>Desired Rates:</Text>
                        <Text className='text-center font-bold'>4,000.00/month</Text>
                        <Text className='text-center font-bold'>250.00/service</Text>
                    </View>
                    
                    <View className="mt-3">
                        <View className="flex-row w-full justify-evenly">
                            <View className='bg-messageBtn px-2 py-1 rounded-lg' >
                                <Text className='text-white'>Message</Text>
                            </View>
                            <View className='bg-impBtn px-2 py-1 rounded-lg'>
                                <Text className='text-white'>Resign</Text>
                            </View>
                        </View>
                    </View>
                </View>
                {/* end of status card */}
            </View>
        </View>
    )
}

export default Status