// Authored by: Jamarcus JanGavril C. Mariano
// Company: Schlaf Shön
// Project: Tabangi Na Ko
// [TNK-5] Login Screen
// Description: As a user, I want to login to an existing account.

import React, {useState} from 'react';
import { Text, TextInput, View, StyleSheet, Image, Alert } from 'react-native';
import { useRouter } from 'expo-router'

const styles = StyleSheet.create ({
    welcomeContainer: {
        justifyContent: 'center',
        textAlign: 'center',
        paddingHorizontal: 24,
    },
    imageStyle: {
        width: '100%',
        height: '35%',
    },
    welcomeTextStyle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 32,
        marginLeft: 20,
    },
    containerStyle: {
        backgroundColor: '#F7EDE1',
        marginTop: -30,
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
        paddingTop: 10,
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

type LoginProps = {
    onLogin: (email: string, password: string) => void;
};

const Login: React.FC<LoginProps> = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleLogin = () => {
        if(!email || !password){
            Alert.alert('Please enter email and password');
            return;
        }
        onLogin(email,password);
    };

    return (
        <View className="flex-1 bg-primary">
        
            <View style={styles.welcomeContainer}>
                <Image source={require('@/assets/images/TNK_logo.png')} style={styles.imageStyle} />
                <Text style={styles.welcomeTextStyle}>
                    Welcome back to TNK
                </Text>
            </View>

            <View style={styles.containerStyle}>
                <View>
                    <Text style={styles.textfieldsStyle}>
                        Email
                    </Text>
                    <TextInput
                        placeholder="Email"
                        value={email}
                        onChangeText={setEmail}
                        style={styles.emptyContainerStyle}
                        keyboardType='email-address'
                        autoCapitalize='none'
                    />
                    <Text style={styles.textfieldsStyle}>
                        Password
                    </Text>
                    <TextInput
                        placeholder="Password"
                        value={password}
                        onChangeText={setPassword}
                        style={styles.emptyContainerStyle}
                        secureTextEntry
                    />
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