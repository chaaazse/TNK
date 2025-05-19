// Authored by: Jamarcus JanGavril C. Mariano
// Company: Schlaf Shön
// Project: Tabangi Na Ko
// [TNK-18] Profile Tab Screen
// Description: As a user, I want to be able to view my profile or update my profile.

import {View, Text, StyleSheet, Image} from 'react-native'
import React from 'react'
import { Bell, Settings, Star, StarHalf } from 'lucide-react-native';

const styles = StyleSheet.create ({
    starEmpty: {
        display: 'flex',
        flexDirection: 'row',
        gap: '4px',
    },
    stars: {
        position: 'absolute',
        flexDirection: 'row',
    },
});

const Profile = () => {
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
            
            {/* start of top content */}
            <View className="flex-row justify-center">
                <Image source={require('@/assets/images/archeologist.png')} className="w-[31%] h-[120%]"/>
                <View className="ml-3">
                    <View className="flex-column">
                        <Text className="text-white text-4xl font-bold">
                            Kevin Vega
                        </Text>
                        
                        <View className="py-2">
                            <View className="flex-row">
                                <Settings
                                    color={'white'}
                                    size={15}
                                    style={{
                                        marginRight: 2,
                                        alignSelf: 'center'
                                    }}
                                />
                                <Text className="text-white">PREFERENCES</Text>
                            </View>
                        </View>
                        
                        <Text className="text-white">Member Since: 2015</Text>
                        
                        <View className="flex-row">
                            <Text  className="text-white">Reputation: </Text>
                                <View className="relative justify-center">
                                    <View style={styles.starEmpty}>
                                        { Array.from({ length: 5 }, (_, index) => (
                                            <Star key={index} fill="#7B7B7B" size={13} strokeWidth={0} />
                                        ))}
                                    </View>
                                    
                                    <View style={styles.stars}>
                                        <Star 
                                            fill={'yellow'}
                                            size={13}
                                        />
                                        <Star
                                            fill={'yellow'}
                                            size={13}
                                        />
                                        <Star 
                                            fill={'yellow'}
                                            size={13}
                                        />
                                        <StarHalf 
                                            fill={'yellow'}
                                            size={13}
                                        />
                                    </View>
                                </View>
                                <Text className="text-white pl-2">
                                    (4.5) (2 ratings)
                                </Text>
                        </View>
                    </View>
                </View>
            </View>
            {/* end of top content */}

            {/* start of body */}
            <View className="flex-row w-full h-[30%] mt-6 justify-evenly">
                <View className="justify-evenly">
                    <Text className="text-white text-2xl font-extrabold">Email Address</Text>
                    <Text className="text-white text-2xl font-extrabold">Phone Number</Text>
                    <Text className="text-white text-2xl font-extrabold">Address</Text>
                    <Text className="text-white text-2xl font-extrabold">Birthdate</Text>
                    <Text className="text-white text-2xl font-extrabold">Gender</Text>
                </View>

                <View className="justify-evenly"> 
                    <Text className="text-white text-base font-medium">kevega@gbox.adnu.edu.ph</Text>
                    <Text className="text-white text-base font-medium">01234567891</Text>
                    <Text className="text-white text-base font-medium">Naga</Text>
                    <Text className="text-white text-base font-medium">January 1, 0000</Text>
                    <Text className="text-white text-base font-medium">Male</Text>
                </View>
            </View>

            <View>
                <Text className="text-white text-2xl font-extrabold ml-6 mt-2">Short Description</Text>
                <Text className="text-white text-lg self-end mr-12">Edit</Text>
                <View className="bg-gray-500 border-white border-2 rounded-2xl w-[70%] h-[225px] self-center">
                </View>
            </View>
            {/* end of body */}
        
            <View className="bg-tertiary rounded-[15px] p-3 mt-5 w-[80%] self-center">
                <Text className="text-white font-bold text-2xl text-center">Logout</Text>
            </View>

        </View>
    )
}

export default Profile