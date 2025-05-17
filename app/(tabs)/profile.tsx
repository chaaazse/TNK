// Authored by: Jamarcus JanGavril C. Mariano
// Company: Schlaf Shön
// Project: Tabangi Na Ko
// [TNK-18] Profile Tab Screen
// Description: As a user, I want to be able to view my profile or update my profile.

import {View, Text, StyleSheet, Image} from 'react-native'
import React from 'react'
import { Bell, Settings, Star, StarHalf } from 'lucide-react-native';

const styles = StyleSheet.create ({
    row: {
        flexDirection: 'row',
    },
    column: {
        flexDirection: 'column',
    },
    imageStyle: {
        width: '31%',
        height: 128,
        marginLeft: 10,
    },
    textStyle: {
        color: 'white',
    },
    textHeaderStyle: {
        color: 'white',
        fontSize: 35,
        fontWeight: 'bold'
    },
    topContentStyle: {
        marginLeft: 15,
    },
    preferenceStyle: {
        paddingTop: 7,
        paddingBottom: 7,
    },
    rating: {
        position: 'relative',
    },
    starEmpty: {
        display: 'flex',
        flexDirection: 'row',
        gap: '4px',
    },
    stars: {
        position: 'absolute',
        flexDirection: 'row',
    },
    bodyContent: {
        marginTop: 20,
        flexDirection: 'row',
        width: '100%',
        height: 225,
        justifyContent: 'space-evenly',
    },
    leftBodyContent: {
        paddingLeft: 10,
    },
    rightBodyContent: {
        paddingRight: 10,
    },
    leftBodyContentTextStyle: {
        color: 'white',
        padding: 7,
        fontSize: 20,
        fontWeight: '800',
    },
    rightBodyContentTextStyle: {
        color: 'white',
        paddingTop: 10,
        paddingBottom: 10,
        fontSize: 15,
        fontWeight: '500',
    },
    editBoxStyle: {
        color: 'white',
        fontSize: 15,
        textAlign: 'right',
        paddingRight: 60,
        marginBottom: 5,
    },
    textBox: {
        backgroundColor: 'gray',
        borderRadius: 15,
        borderWidth: 2,
        borderColor: 'white',
        width: 250,
        height: 250,
        alignSelf: 'center'
        
    },
    logoutBtnContainer: {
        marginTop: '5%',
        marginLeft: 50,
        marginRight: 50,
        padding: 10,
        alignItems: 'center',
        borderRadius: 15,
        backgroundColor: '#FFC200',
    },
    logoutTextStyle: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold'
    }
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
            <View style={styles.row}>
                <Image source={require('@/assets/images/archeologist.png')} style={styles.imageStyle}/>
                <View style={styles.topContentStyle}>
                    <View style={styles.column}>
                        <Text style={styles.textHeaderStyle}>
                            Kevin Vega
                        </Text>
                        
                        <View style={styles.preferenceStyle}>
                            <View style={styles.row}>
                                <Settings
                                    color={'white'}
                                    size={15}
                                    style={{
                                        marginRight: 2,
                                        alignSelf: 'center'
                                    }}
                                />
                                <Text style={styles.textStyle}>PREFERENCES</Text>
                            </View>
                        </View>
                        
                        <Text style={styles.textStyle}>Member Since: 2015</Text>
                        
                        <View style={styles.row}>
                            <Text style={styles.textStyle}>Reputation: </Text>
                                <View style={styles.rating}>
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
            <View style={styles.bodyContent}>
                <View style={styles.leftBodyContent}>
                    <Text style={styles.leftBodyContentTextStyle}>Email Address</Text>
                    <Text style={styles.leftBodyContentTextStyle}>Phone Number</Text>
                    <Text style={styles.leftBodyContentTextStyle}>Address</Text>
                    <Text style={styles.leftBodyContentTextStyle}>Birthdate</Text>
                    <Text style={styles.leftBodyContentTextStyle}>Gender</Text>
                    <Text style={styles.leftBodyContentTextStyle}>Short Description</Text>
                </View>

                <View style={styles.rightBodyContent}> 
                    <Text style={styles.rightBodyContentTextStyle}>kevega@gbox.adnu.edu.ph</Text>
                    <Text style={styles.rightBodyContentTextStyle}>01234567891</Text>
                    <Text style={styles.rightBodyContentTextStyle}>Naga</Text>
                    <Text style={styles.rightBodyContentTextStyle}>January 1, 0000</Text>
                    <Text style={styles.rightBodyContentTextStyle}>Male</Text>
                </View>
            </View>

            <View>
                <Text style={styles.editBoxStyle}>Edit</Text>
                <View style={styles.textBox}>
                </View>
            </View>
            {/* end of body */}
        
            <View style={styles.logoutBtnContainer}>
                <Text style={styles.logoutTextStyle}>Logout</Text>
            </View>

        </View>

       
    )
}

export default Profile