import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const history = () => {
    const { data } = useLocalSearchParams()
    return (
        <View className='justify-center items-center '>
            <Text>Buy paid version to use this feature</Text>
        </View>
    )
}

export default history