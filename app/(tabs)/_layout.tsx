import React from 'react'
import { Tabs } from "expo-router";
import { House, LayoutList, MessageCircleMore, CircleUserRound } from 'lucide-react-native';

const _Layout = () => {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: 'white',
                tabBarStyle: {
                    backgroundColor: '#141E25',
                },
            }}
        >

            <Tabs.Screen 
                name="index"
                options={{
                    title: 'Home',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <House
                            color={focused ? 'white' : 'gray'}
                            size={24}
                        />
                    ),
                }}
            />

            <Tabs.Screen 
                name="status"
                options={{
                    title: 'Status',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <LayoutList
                            color={focused ? 'white' : 'gray'}
                            size={24}
                        />
                    ),
                }}
            />

            <Tabs.Screen 
                name="messages"
                options={{
                    title: 'Messages',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <MessageCircleMore
                            color={focused ? 'white' : 'gray'}
                            
                            size={24}
                        />
                    ),
                }}
            />

            <Tabs.Screen 
                name="profile"
                options={{
                    title: 'Profile',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <CircleUserRound
                            color={focused ? 'white' : 'gray'}
                            size={24}
                        />
                    ),
                }}
            />

        </Tabs>
    )
}

export default _Layout