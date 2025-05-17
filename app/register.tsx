// Authored by: Jamarcus JanGavril C. Mariano
// Company: Schlaf Shön
// Project: Tabangi Na Ko
// [TNK-6] Register Screen
// Description: As a user, I want to register a new account.

import React, { useState } from 'react'
import { Text, View, StyleSheet, Image, TextInput } from 'react-native';
import { useRouter } from 'expo-router'
import { auth } from '../FirebaseConfig'
import { createUserWithEmailAndPassword } from 'firebase/auth';

const styles = StyleSheet.create ({
    headerStyle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 35,
        marginTop: '10%',
        marginLeft: 20,
    },
    greetingStyle: {
        color: 'white',
        fontWeight: 'bold',
        marginTop: 2,
        marginLeft: 20,
        fontSize: 15,
    },
    bodyContainerStyle: {
        backgroundColor: '#F7EDE1',
        marginTop: 15,
        height: '100%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    textfieldsStyle: {
        color: 'black',
        marginLeft: 30,
        marginBottom: 2,
        fontWeight: 'bold',
    },
    emptyContainerStyle: {
        backgroundColor: '#D9D9D9',
        padding: 5,
        paddingRight: 0,
        marginLeft: 30,
        marginRight: 30,
        borderRadius: 15,
        borderColor: 'black',
        borderWidth: 1,
    },
    signupButtonStyle: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        backgroundColor: '#FFC200',
        height: '7%',
        textAlignVertical: 'center',
        textAlign: 'center',
        marginTop: 30,
        marginLeft: 30,
        marginRight: 30,
        borderRadius: 15,
    },
    flexedLineContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 25,
        marginLeft: 35,
        width: '83%',
    },
    horizontalLine: {
        height: 1.5,
        backgroundColor: 'black',
        flex: 1,
        marginVertical: 5,
    },
    orLoginWithtext: {
        marginHorizontal: 10,
        fontSize: 16,
        fontWeight: 'bold',
    },
    buttonAreaContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginTop: 10,
        padding: 10,
        marginBottom: 5
    },
    buttonContainer: {
        backgroundColor: 'black',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 30,
        paddingRight: 30,
        borderRadius: 15,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
        paddingLeft: 10,
    },
    googleIcon: {
        width: 20,
        height: 20,
    },
    buttonRowContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    accountRemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '3%',
    },
    accountText:{
        color: 'black',
        fontWeight: 'bold',
        
    },
    registerText: {
        color: '#C98633',
        fontWeight: 'bold',
        paddingLeft: 5,
    },
    textfieldRowStyle: {
        flexDirection: 'row',
        marginTop: 10,
    },
    asteriskText: {
        color: 'red',
        paddingLeft: 2
    }

});

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
            <Text style={styles.headerStyle}>      
                Get Started
            </Text>
            <Text style={styles.greetingStyle}>      
                Welcome to TNK - Let's create your account!
            </Text>

            <View style={styles.bodyContainerStyle}>
                <View>
                    <View style={styles.textfieldRowStyle}>
                        <Text style={styles.textfieldsStyle}>
                            First Name
                        </Text>
                        <Text style={styles.asteriskText}>
                            *
                        </Text>
                    </View>

                    <View style={styles.emptyContainerStyle}>
                        <TextInput placeholder="Enter your first name" />
                    </View>

                    <View style={styles.textfieldRowStyle}>
                        <Text style={styles.textfieldsStyle}>
                            Last Name
                        </Text>
                        <Text style={styles.asteriskText}>
                            *
                        </Text>
                    </View>

                    <View style={styles.emptyContainerStyle}>
                        <TextInput placeholder="Enter your last name" />
                    </View>

                    <View style={styles.textfieldRowStyle}>
                        <Text style={styles.textfieldsStyle}>
                            Phone Number
                        </Text>
                        <Text style={styles.asteriskText}>
                            *
                        </Text>
                    </View>

                    <View style={styles.emptyContainerStyle}>
                        <TextInput placeholder="Enter your phone number" />
                    </View>

                    <View style={styles.textfieldRowStyle}>
                        <Text style={styles.textfieldsStyle}>
                            Email
                        </Text>
                        <Text style={styles.asteriskText}>
                            *
                        </Text>
                    </View>

                    <View style={styles.emptyContainerStyle}>
                        <TextInput placeholder="Enter your email" value={email} onChangeText={setEmail} />
                    </View>

                    <View style={styles.textfieldRowStyle}>
                        <Text style={styles.textfieldsStyle}>
                            Password
                        </Text>
                        <Text style={styles.asteriskText}>
                            *
                        </Text>
                    </View>

                    <View style={styles.emptyContainerStyle}>
                        <TextInput placeholder="Enter your password" value={password} onChangeText={setPassword} secureTextEntry />
                    </View>

                    <View style={styles.textfieldRowStyle}>
                        <Text style={styles.textfieldsStyle}>
                            Confirm Password
                        </Text>
                        <Text style={styles.asteriskText}>
                            *
                        </Text>
                    </View>

                    <View style={styles.emptyContainerStyle}>
                        <TextInput placeholder="Re-type your password" />
                    </View>

                    <Text onPress={() => router.push('/login')} style={styles.signupButtonStyle}>
                        Sign up
                    </Text>

                    <View style={styles.flexedLineContainer}>
                        <View style={styles.horizontalLine}></View>

                        <Text style={styles.orLoginWithtext}>
                            Or sign up with
                        </Text>

                        <View style={styles.horizontalLine}></View>
                    </View>

                    <View style={styles.buttonAreaContainer}> 
                        <View style={styles.buttonContainer}>
                            <View style={styles.buttonRowContainer}>
                                <Image source={require('@/assets/images/google-symbol.png')} style={styles.googleIcon}/>
                                <Text style={styles.buttonText}>
                                    Google
                                </Text>
                            </View>
                        </View>
                        <View style={styles.buttonContainer}>
                            <View style={styles.buttonRowContainer}>
                                <Image source={require('@/assets/images/facebook.png')} style={styles.googleIcon}/>
                                <Text style={styles.buttonText}>
                                    Facebook
                                </Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.accountRemContainer}>
                        <Text style={styles.accountText}>
                            Already have an account?
                        </Text>
                        <Text onPress={() => router.push('/login')} style={styles.registerText}>
                            Login
                        </Text>
                    </View>

                </View>
            </View>
        </View>
    )
}

export default Register