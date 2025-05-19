// Authored by: Jamarcus JanGavril C. Mariano
// Company: Schlaf Shön
// Project: Tabangi Na Ko
// [TNK-5] Login Screen
// Description: As a user, I want to login to an existing account.

import React, { useState } from 'react'
import { Text, View, Image, TextInput } from 'react-native';
import { useRouter } from 'expo-router'
import { auth } from '../FirebaseConfig'
import { signInWithEmailAndPassword } from 'firebase/auth';


const Login = () => {
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    // const logIn = async () => {
    //     try {
    //         const user = await signInWithEmailAndPassword(auth, email, password)
    //         if (user) router.replace('/(tabs)');
    //     } catch (error: any) {
    //         console.log(error)
    //         alert('Sign in failed: ' + error.message);
    //     }
    // }

    const router = useRouter();
    return (
        <View className="flex-1 bg-primary">
            <Image source={require('@/assets/images/TNK_logo.png')} className="w-full h-[35%]" />
        
            <Text className="text-white font-bold text-4xl self-center -mt-[20px]">
                Welcome back to TNK
            </Text>

            <View className="bg-secondary rounded-2xl mt-5 h-full">
                <View>
                    <Text className="text-black font-bold mt-6 ml-9">
                        Email
                    </Text>
                    <View className="bg-gray-300 border rounded-2xl mx-8 px-2 h-14">
                        <TextInput placeholder="Enter your email" 
                            // value={email} onChangeText={setEmail} 
                        />
                    </View>
                    <Text className="text-black font-bold mt-6 ml-9">
                        Password
                    </Text>
                    <View className="bg-gray-300 border rounded-2xl mx-8 px-2 h-14">
                        <TextInput placeholder="Enter your password" 
                            // value={password} onChangeText={setPassword} secureTextEntry 
                        />
                    </View>
                </View>
                <Text className= "color-impMsg font-bold text-right mr-10 mt-1"> 
                    Forgot Password?
                </Text>

                <Text 
                    // onPress={logIn} 
                    className= "text-white font-bold text-2xl bg-tertiary h-[6%] text-center align-middle rounded-2xl mx-10 mt-5" 
                    onPress={() => router.push('/(tabs)')}
                >
                    Login
                </Text>

                <View className="flex-row mt-5 self-center w-[83%]">
                    <View className= "h-[9%] bg-black flex-1 self-center"></View>
                    <Text className= "text-base font-bold mx-[3%]">
                        Or login with
                    </Text>
                    <View className= "h-[9%] bg-black flex-1 self-center"></View>
                </View>

                <View className= "flex-row justify-evenly mt-6 p-3 mb-5"> 
                    <View className= "bg-black py-3 px-5 rounded-[15px]">
                        <View className= "flex-row justify-evenly">
                            <Image source={require('@/assets/images/google-symbol.png')} className="w-[20%] h-full"/>
                            <Text className= "text-white font-bold text-base">
                                Google
                            </Text>
                        </View>
                    </View>
                    <View className="bg-black py-3 px-5 rounded-[15px]">
                        <View className="flex-row justify-evenly">
                            <Image source={require('@/assets/images/facebook.png')} className="w-[20%] h-full"/>
                            <Text className= "text-white font-bold text-base">
                                Facebook
                            </Text>
                        </View>
                    </View>
                </View>

                

                <View className="flex-row align-middle justify-center">
                    <Text className="text-black font-bold">
                        Don't have an account?
                    </Text>
                    <Text onPress={() => router.push('/register')} className="color-impMsg font-bold pl-1">
                        Register
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default Login