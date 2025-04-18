import {View, Text, StyleSheet, Image} from 'react-native'
import React from 'react'
import { Bell, Search} from 'lucide-react-native';

const styles = StyleSheet.create ({
    searchContainer: {
      paddingBottom: 10,
      backgroundColor: '#F7EDE1',
      marginTop: 30,
      marginLeft: 45,
      height: '6%',
      width: '75.3%',
      borderRadius: 15,
    },
    row:    {
        flexDirection: 'row',
    },
    column: {
        flexDirection: 'column',
    },
    searchMsg: {
        marginTop: 13,
        marginLeft: 15,
        fontSize: 18,
        color: 'gray'
    },
    reChatContainer: {
        backgroundColor: '#F7EDE1',
        height: '12%',
        width: '87%',
        marginLeft: 20,
        marginTop: 10,
        borderRadius: 10,
    },
    imageStyle:{
        marginTop: 8,
        marginLeft: 15,
        height: 70,
        width: 70,
    },
    readTextStyle: {
        color: 'gray',
        marginLeft: 12,
        marginTop: 6,
        fontSize: 16
    },
    readTimeStyle: {
        color: 'gray'
    },
    unreadTextStyle: {
        color: 'black',
        marginLeft: 12,
        marginTop: 6,
        fontSize: 16,
        fontWeight: '500'
    },
    unreadTimeStyle: {
        color: 'black'
    }
  });

const Messages = () => {
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

            {/* search container */}
            <View style={styles.searchContainer}>
                <View style={styles.row}>
                    <Search 
                        color={'gray'}
                        size={25}
                        style={{
                            marginTop: 8,
                            marginLeft: 10,
                        }} 
                    />
                    <Text style={styles.searchMsg}>Search Messages</Text>
                </View>
            </View>
            {/* end of search container */}

            <Text className="text-5xl text-white ml-5 mt-4 font-bold">Recent Chats</Text>

            {/* recent chats container */}
            <View style={styles.reChatContainer}>
                <View style={styles.row}>
                    <Image source={require('@/assets/images/user.png')} style={styles.imageStyle}/>

                    <View style={styles.column}>
                        <Text className='text-2xl font-bold ml-3 mt-3'>Tyler Garcia</Text>

                        <View style={styles.row}>
                            <Text style={styles.readTextStyle}>I'll be right there! See ya!</Text>
                            <Text style={styles.readTimeStyle} className='ml-8 mt-2'>5:45 PM</Text>
                        </View>
                    </View>
                </View>       
            </View>
            <View style={styles.reChatContainer}>
                <View style={styles.row}>
                    <Image source={require('@/assets/images/woman.png')} style={styles.imageStyle}/>

                    <View style={styles.column}>
                        <Text className='text-2xl font-bold ml-3 mt-3'>Sarah Ahai</Text>

                        <View style={styles.row}>
                            <Text style={styles.unreadTextStyle}>Hey, I noticed you have lots...</Text>
                            <Text style={styles.unreadTimeStyle} className='ml-3 mt-2'>5:45 PM</Text>
                        </View>
                    </View>
                </View>       
            </View>
            <View style={styles.reChatContainer}>
                <View style={styles.row}>
                    <Image source={require('@/assets/images/woman1.png')} style={styles.imageStyle}/>

                    <View style={styles.column}>
                        <Text className='text-2xl font-bold ml-3 mt-3'>Elizabeth Buck</Text>

                        <View style={styles.row}>
                            <Text style={styles.readTextStyle}>I'll be right there! See ya!</Text>
                            <Text style={styles.readTimeStyle} className='ml-8 mt-2'>5:45 PM</Text>
                        </View>
                    </View>
                </View>       
            </View>
            {/* end of recent chats container */}

        </View>
    )
}

export default Messages

