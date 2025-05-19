import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';
import { useFonts } from 'expo-font'; 
import { useRouter } from 'expo-router';

const Continue = () => {
    const [fontsLoaded] = useFonts({
        'RobotoSlab-Medium': require('@/assets/fonts/RobotoSlab-Medium.ttf'),
        'RobotoSlab-Regular': require('@/assets/fonts/RobotoSlab-Regular.ttf'),
        'RobotoSlab-Bold': require('@/assets/fonts/RobotoSlab-Bold.ttf'),
    });

    const router = useRouter();

    if (!fontsLoaded) {
        return null;
    }
    
    return (
        <>
            <Stack.Screen
                options={{
                    title: 'Continue',
                    headerStyle: { backgroundColor: '#020D19' },
                    headerTintColor: 'white',
                }}
            />

            <View style={{ flex: 1, backgroundColor: '#020D19', justifyContent: 'center', alignItems: 'center' }}>
                <Image source={require('@/assets/images/TNK_logo.png')} style={styles.imageStyle} />
                <View style={styles.continuecontainer}>
                    <Text style={styles.continuetext}>
                        CONTINUE AS
                    </Text>
                    
                    <View style={styles.btncontainer}>
                        <View style={styles.contbtn}>
                            <TouchableOpacity onPress={() => router.push('/householdform')}>
                            <Text style={styles.conttxt}>
                            Household
                            </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.contbtn}>
                            <TouchableOpacity onPress={() => router.push('/housekeeperform')}>
                            <Text style={styles.conttxt}>
                            Housekeeper
                            </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.contbtn}>
                            <TouchableOpacity onPress={() => router.push('/bothform')}>
                            <Text style={styles.conttxt}>
                            Both
                            </Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>

            </View>


        </>
    ); 
}

const styles = StyleSheet.create({
    continuecontainer: {
        backgroundColor: '#F7EDE1',
        height: '42%',
        width: '80%',
        borderRadius: 20,
        padding: 20,
        paddingTop: '3%',
    },

    imageStyle: {
        width: '160%',
        height: '30%',
        marginBottom: -10,
        marginTop: '-40%'
    },

    continuetext: {
        marginTop: '15%',
        color: 'black',
        fontSize: 15,
        textAlign: 'center',
        fontFamily: 'RobotoSlab-Bold', 
        marginBottom: '10%'
    },
    btncontainer: {
        alignItems: 'center',
    },
    contbtn : {
        backgroundColor: '#D9D9D9',
        borderRadius: 30,
        padding: 15,
        width: '60%',
        marginBottom: '5%',
    },
    conttxt: {
        color: 'black',
        fontSize: 12,
        textAlign: 'center',
        fontFamily: 'RobotoSlab-Regular', 
    }
})

export default Continue;