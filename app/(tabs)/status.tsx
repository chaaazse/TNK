// Authored by: Jamarcus JanGavril C. Mariano
// Company: Schlaf Shön
// Project: Tabangi Na Ko
// [TNK-12] Status Tab Screen
// Description:

import {View, Text, StyleSheet, Image} from 'react-native'
import React from 'react'
import { Bell } from 'lucide-react-native';


const styles = StyleSheet.create ({
    leftContainer: {
        marginTop: 30,
        marginLeft: 95,
        paddingTop: 10,
        paddingLeft: 20,
        paddingRight: 15,
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
        backgroundColor: '#F7EDE1',
    },
    rightContainer: {
        marginTop: 30,
        marginLeft: 1,
        padding: 10,
        paddingRight: 13,
        backgroundColor: 'rgba(247, 237, 225, 0.6)',
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
    },
    row:    {
        flexDirection: 'row',
    },
    horizontalLine: {
        height: 1,
        backgroundColor: '#F7EDE1',
        marginVertical: 20,
    },
    statusContainer: {
        marginLeft: 7,
        backgroundColor: '#F7EDE1',
        width: '47%',
        height: 275,
        borderRadius: 10,
    },
    imageStyle: {
        width: '75%',
        height: 60,
        marginLeft: 25,
        marginTop: 20,
        borderStyle: 'solid',
        borderColor: 'black',
        borderWidth: 1.5,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
    },
    textCenterContainer: {
        marginTop: 10,
        alignItems: 'center',
    },
    textHeader: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    serviceContainer: {
        backgroundColor: '#D9D9D9',
        padding: 7,
        paddingTop: 2,
        paddingBottom: 2,
        marginLeft: 3,
        borderRadius: 10,
    },
    bottomStatus: {
        marginTop: 10,
        marginLeft: 10,
    },
    statusButtons: {
        padding: 10,
        paddingTop: 2,
        paddingBottom: 4,
        alignItems: 'center',
        marginTop: 7,
        marginRight: 5,
        borderRadius: 10,
    },
});

const Status = () => {
    return (
        <View className="flex-1 bg-primary">
            <View>
                <Bell
                    color={'white'}
                    size={25}
                    style={{
                        marginLeft: 300,
                        marginTop: 30
                    }} 
                />
            </View>
            
            <View style={styles.row}>
                <View style={styles.leftContainer}>
                    <Text className='font-bold'>Households</Text>
                </View>
                <View style={styles.rightContainer}>
                    <Text className='font-bold'>Housekeepers</Text>
                </View>
            </View>

            <View style={styles.horizontalLine}></View>
            
            {/* status card */}
            <View style={styles.row}>
                <View style={styles.statusContainer}>
                    <Image source={require('@/assets/images/household_image.png')} style={styles.imageStyle}/>
                    <View style={styles.textCenterContainer}> 
                        <Text style={styles.textHeader}>                        
                            Vega Household
                        </Text>
                        <Text>
                            at
                        </Text>
                        <Text>
                            Naga City, Camarines Sur
                        </Text>
                        <Text>
                            01234567891
                        </Text>
                        <Text>
                            vega_household@gmail.com
                        </Text>
                        <Text>
                            Hired | March 14, 2025
                        </Text>
                    </View>

                    <View style={styles.bottomStatus}>
                        <View style={styles.row}>
                            <Text>Service:</Text>
                            <View style={styles.serviceContainer}>
                                <Text>Pet</Text>
                            </View>
                            <View style={styles.serviceContainer}>
                                <Text>Errands</Text>
                            </View>
                        </View>

                        <Text className='mt-2'>Desired Rates:</Text>
                        <Text className='ml-5 font-bold'>4,000.00/month</Text>
                        <Text className='ml-5 font-bold'>250.00/service</Text>
                    </View>
                    
                    <View style={styles.statusButtons}>
                        <View style={styles.row}>
                            <View className='bg-messageBtn' style={styles.statusButtons} >
                                <Text className='text-white'>Message</Text>
                            </View>
                            <View className='bg-impBtn' style={styles.statusButtons}>
                                <Text className='text-white'>Resign</Text>
                            </View>
                        </View>
                    </View>
                </View>
                {/* end of status card */}
            </View>
        </View>
    )
}

export default Status