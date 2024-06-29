import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { TabBarIcon } from '@/components/navigation/TabBarIcon'

const TabLayout = () => {
    return (
        <Tabs>
            <Tabs.Screen name='home' options={{
                headerTitle: "DTC",
                headerRight: () => { return <Text className='text-orange-400 pr-1'>Created by Sam</Text> },
                tabBarIcon: ({ color }) => { return <TabBarIcon name='home' color={color} /> },
                title: "Home"
            }} />
            <Tabs.Screen name='history'
                options={{
                    title: "History",
                    tabBarIcon: ({ color }) => { return <TabBarIcon name='compass' color={color} /> }
                }}
            />
        </Tabs>
    )
}

export default TabLayout