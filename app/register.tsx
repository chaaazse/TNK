// Authored by: Jamarcus JanGavril C. Mariano
// Company: Schlaf Shön
// Project: Tabangi Na Ko
// [TNK-6] Register Screen
// Description: As a user, I want to register a new account.

import React, { useState } from 'react'
import { Text, View, Image, TextInput } from 'react-native';
import { useRouter } from 'expo-router'
import { auth } from '../FirebaseConfig'
import { createUserWithEmailAndPassword } from 'firebase/auth';


const Register = () => {
        const [firstName, setFirstName] = useState('');
        const [lastName, setLastName] = useState('');
        const [phoneNumber, setPhoneNumber] = useState('');
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        
    
        const signUp = async () => {
            try {
                const user = await createUserWithEmailAndPassword(auth, email, password)
                if (user) router.replace('/(tabs)');
            } catch (error: any) {
                console.log(error)
                alert('Sign in failed: ' + error.message);
            }
        }

    const router = useRouter();
    return (
        <View className="flex-1 bg-primary">
            <Text className="text-white font-bold text-4xl mt-[10%] ml-5">      
                Get Started
            </Text>
            <Text className="text-white font-bold mt-1 ml-5 text-base">      
                Welcome to TNK - Let's create your account!
            </Text>

            <View className="bg-secondary h-full mt-2 rounded-tl-[10px] rounded-tr-[10px]">
                <View>
                    <View className="flex-row mt-3">
                        <Text className="text-black font-bold ml-9">
                            First Name
                        </Text>
                        <Text className= "color-red-700 ml-1">
                            *
                        </Text>
                    </View>

                    <View className="bg-gray-300 border rounded-2xl mx-8 px-2">
                        <TextInput placeholder="Enter your first name" />
                    </View>

                    <View className="flex-row mt-3">
                        <Text className="text-black font-bold ml-9">
                            Last Name
                        </Text>
                        <Text className= "color-red-700 ml-1">
                            *
                        </Text>
                    </View>

                    <View className="bg-gray-300 border rounded-2xl mx-8 px-2">
                        <TextInput placeholder="Enter your last name" />
                    </View>

                    <View className="flex-row mt-3">
                        <Text className="text-black font-bold ml-9">
                            Phone Number
                        </Text>
                        <Text className= "color-red-700 ml-1">
                            *
                        </Text>
                    </View>

                    <View className="bg-gray-300 border rounded-2xl mx-8 px-2">
                        <TextInput placeholder="Enter your phone number" />
                    </View>

                    <View className="flex-row mt-3">
                        <Text className="text-black font-bold ml-9">
                            Email
                        </Text>
                        <Text className= "color-red-700 ml-1">
                            *
                        </Text>
                    </View>

                    <View className="bg-gray-300 border rounded-2xl mx-8 px-2">
                        <TextInput placeholder="Enter your email" value={email} onChangeText={setEmail} />
                    </View>

                    <View className="flex-row mt-3">
                        <Text className="text-black font-bold ml-9">
                            Password
                        </Text>
                        <Text className= "color-red-700 ml-1">
                            *
                        </Text>
                    </View>

                    <View className="bg-gray-300 border rounded-2xl mx-8 px-2">
                        <TextInput placeholder="Enter your password" value={password} onChangeText={setPassword} secureTextEntry />
                    </View>

                    <View className="flex-row mt-3">
                        <Text className="text-black font-bold ml-9">
                            Confirm Password
                        </Text>
                        <Text className= "color-red-700 ml-1">
                            *
                        </Text>
                    </View>

                    <View className="bg-gray-300 border rounded-2xl mx-8 px-2">
                        <TextInput placeholder="Re-type your password" />
                    </View>

                    <Text onPress={() => router.push('/login')} className="text-white text-2xl font-bold bg-tertiary h-[7%] rounded-2xl align-middle text-center mx-10 mt-7">
                        Sign up
                    </Text>

                    <View className="flex-row mt-5 self-center w-[83%]">
                        <View className= "h-[9%] bg-black flex-1 self-center"></View>

                        <Text className= "text-base font-bold mx-[3%]">
                            Or sign up with
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

                    <View className= "flex-row align-middle justify-center">
                        <Text className= "color-black font-bold">
                            Already have an account?
                        </Text>
                        <Text onPress={() => router.push('/login')} className= "color-impMsg font-bold pl-1">
                            Login
                        </Text>
                    </View>

                </View>
            </View>
        </View>
    )
}

export default Register