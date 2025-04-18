// Authored by: Jamarcus JanGavril C. Mariano
// Company: Schlaf Shön
// Project: Tabangi Na Ko
// [TNK-5] Login Screen
// Description: As a user, I want to login to an existing account.

import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router'

const styles = StyleSheet.create ({
    imageStyle: {
        width: '100%',
        height: '35%',
        paddingBottom: 0,
        marginBottom: 0,
    },
    welcomeTextStyle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 32,
        paddingLeft: 70,
        marginTop: -50,
    },
    containerStyle: {
        backgroundColor: '#F7EDE1',
        marginTop: 60,
        paddingBottom: 455,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    textfieldsStyle: {
        color: 'black',
        marginTop: 20,
        marginLeft: 30,
        marginBottom: 2,
        fontWeight: 'bold',
    },
    emptyContainerStyle: {
        backgroundColor: '#D9D9D9',
        paddingTop: 35,
        marginLeft: 30,
        marginRight: 30,
        borderRadius: 15,
        borderColor: 'black',
        borderWidth: 1,
    },
    forgotTextStyle: {
        color: '#C98633',
        fontWeight: 'bold',
        paddingTop: 10,
        marginLeft: 250,
    },
    loginButtonStyle: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        backgroundColor: '#FFC200',
        paddingTop: 10,
        paddingBottom: 15,
        paddingLeft: 125,
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
        width: '80%',
    },
    horizontalLine: {
        height: 1,
        backgroundColor: 'black',
        flex: 1,
        marginVertical: 10,
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
        marginTop: 20,
        padding: 10,
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
        marginTop: 50,
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
});

const Login = () => {
    const router = useRouter();
    return (
        <View className="flex-1 bg-primary">
            <Image source={require('@/assets/images/TNK_logo.png')} style={styles.imageStyle} />
        
            <Text style={styles.welcomeTextStyle}>
                Welcome back to TNK
            </Text>

            <View style={styles.containerStyle}>
                <View>
                    <Text style={styles.textfieldsStyle}>
                        Email
                    </Text>
                    <View style={styles.emptyContainerStyle}></View>
                    <Text style={styles.textfieldsStyle}>
                        Password
                    </Text>
                    <View style={styles.emptyContainerStyle}></View>
                </View>
                <Text style={styles.forgotTextStyle}>
                    Forgot Password?
                </Text>

                <Text onPress={() => router.push('/(tabs)')} style={styles.loginButtonStyle}>
                    Login
                </Text>

                <View style={styles.flexedLineContainer}>
                    <View style={styles.horizontalLine}></View>
                    <Text style={styles.orLoginWithtext}>
                        Or login with
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
                        Don't have an account?
                    </Text>
                    <Text onPress={() => router.push('/register')} style={styles.registerText}>
                        Register
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default Login