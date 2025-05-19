// Authored by: Jamarcus JanGavril C. Mariano
// Company: Schlaf Shön
// Project: Tabangi Na Ko
// [TNK-4] Landing Screen
// Description: As a user, I want to be able to choose either to login to an existing account or register a new account.

import { Text, View, Image} from "react-native";
import React from 'react';
import { useRouter } from 'expo-router'


const Index = () => {
    const router = useRouter();
    return (
        <View className="flex-1 bg-primary">
            <Image source={require('@/assets/images/TNK_logo.png')} className="w-full h-[90%] -mb-[10px]" />

            <View >
                <View className="bg-secondary flex-row justify-evenly p-8 min-h-28 rounded-t-[10px]">
                    <Text onPress={() => router.push('/login')} className="text-white font-bold bg-primary align-middle px-11 rounded-2xl">
                        Login
                    </Text>
                    <Text onPress={() => router.push('/register')} className="text-white font-bold bg-primary px-11 align-middle rounded-2xl">
                        Register
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default Index