// Authored by: Jamarcus JanGavril C. Mariano
// Company: Schlaf Shön
// Project: Tabangi Na Ko
// [TNK-4] Landing Screen
// Description: As a user, I want to be able to choose either to login to an existing account or register a new account.

import { Text, View, Image, StyleSheet} from "react-native";
import React from 'react';
import { useRouter } from 'expo-router'

const styles = StyleSheet.create ({
    imageStyle: {
        width: '100%',
        height: '90%',
        marginBottom: -10
    },
    containerStyle: {
        backgroundColor: '#F7EDE1',
        padding: 40,
        paddingTop: 20,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    loginTextStyle: {
        color: 'white',
        fontWeight: 'bold',
        backgroundColor: '#020D19',
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 50,
        paddingRight: 50,
        borderRadius: 15
    },
    registerTextStyle: {
        color: 'white',
        fontWeight: 'bold',
        backgroundColor: '#020D19',
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 40,
        paddingRight: 40,
        borderRadius: 15
    }
});

const Index = () => {
    const router = useRouter();
    return (
        <View className="flex-1 bg-primary">
            <Image source={require('@/assets/images/TNK_logo.png')} style={styles.imageStyle} />

            <View >
                <View style={styles.containerStyle}>
                    <Text onPress={() => router.push('/login')} style={styles.loginTextStyle}>
                        Login
                    </Text>
                    <Text onPress={() => router.push('/register')} style={styles.registerTextStyle}>
                        Register
                    </Text>
                </View>
                
            </View>
        </View>
    )
}

export default Index