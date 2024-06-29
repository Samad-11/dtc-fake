import { View, Text, ScrollView, TextInput, TouchableOpacity, Alert, TouchableWithoutFeedback } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { router } from 'expo-router'


const home = () => {
    const [visible, setVisible] = useState(false)
    const ref = useRef<TouchableOpacity>(null)

    const [value, setValue] = useState({
        busNo: "",
        routeNo: "",
        sPoint: "",
        ePoint: "",
        tickets: "",
        fare: "",
        color: "",
        col: ""
    })

    const onTicketGenerate = () => {

        if (!(value.busNo && value.routeNo && value.color && value.ePoint && value.sPoint && value.tickets && value.fare)) {
            Alert.alert(
                'All field are required',
                'Please fill all the fields first',
                [
                    { text: 'OK bhai ji' },
                ]
            );
        }

        else {
            router.push({
                pathname: "/generatedTicket",
                params: {
                    busNo: value.busNo,
                    routeNo: value.routeNo,
                    sPoint: value.sPoint,
                    ePoint: value.ePoint,
                    tickets: value.tickets,
                    fare: value.fare,
                    color: value.color
                }
            })
        }
    }

    const renderDropdown = () => {
        if (visible) {
            return (
                <View className='space-y-2 absolute z-10 w-full top-30'>
                    <ScrollView>


                        <TouchableOpacity
                            onPress={() => {
                                setValue({ ...value, color: "bg-blue-500", col: "Blue" })
                                setVisible(false)
                            }}
                            className='bg-blue-600 text-white  py-1 '><Text className='text-center'>Blue</Text></TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                setValue({ ...value, color: "bg-red-600/90", col: "Red" })
                                setVisible(false)
                            }}
                            className='bg-red-600 text-white  py-1 '><Text className='text-center'>Red</Text></TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                setValue({ ...value, color: "bg-green-600", col: "Green" })
                                setVisible(false)
                            }}
                            className='bg-green-600 text-white  py-1 '><Text className='text-center'>Green</Text></TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                setValue({ ...value, color: "bg-orange-400", col: "Orange" })
                                setVisible(false)
                            }}
                            className='bg-orange-600 text-white  py-1 '><Text className='text-center'>Orange</Text></TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                setValue({ ...value, color: "bg-cyan-300/90", col: "Cyan" })
                                setVisible(false)
                            }}
                            className='bg-cyan-600 text-white  py-1 '><Text className='text-center'>Cyan</Text></TouchableOpacity>
                    </ScrollView>
                </View>
            )
        }
    }
    return (
        <ScrollView >
            <TouchableWithoutFeedback
                className='h-full'
                onPress={() => setVisible(false)
                }
            >
                <>
                    <View className='px-2 pt-2'>
                        <TouchableOpacity
                            onPress={() => setValue({
                                busNo: "",
                                routeNo: "",
                                sPoint: "",
                                ePoint: "",
                                tickets: "",
                                fare: "",
                                color: "",
                                col: ""
                            })}
                        >
                            <Text className='text-red-500 underline-offset-2 underline text-right'>Clear</Text>
                        </TouchableOpacity>
                    </View>
                    <View className='px-2 pt-5 space-y-5'>
                        <View className='space-y-2'>
                            <Text>Bus Number</Text>
                            <TextInput
                                value={value.busNo}
                                onChangeText={busNo => setValue({ ...value, busNo })}
                                inputMode='text' placeholder='Enter bus no.' className='bg-white px-3 py-2' />
                        </View>
                        <View className='space-y-2'>
                            <Text>Route number</Text>
                            <TextInput
                                value={value.routeNo}
                                onChangeText={routeNo => setValue({ ...value, routeNo })}
                                inputMode='text' placeholder='Enter route no.' className='bg-white px-3 py-2' />
                        </View>
                        <View className='space-y-2'>
                            <Text>Starting point</Text>
                            <TextInput
                                value={value.sPoint}
                                onChangeText={sPoint => setValue({ ...value, sPoint })}
                                inputMode='text' placeholder='Enter starting point' className='bg-white px-3 py-2' />
                        </View>
                        <View className='space-y-2'>
                            <Text>Ending point</Text>
                            <TextInput
                                value={value.ePoint}
                                onChangeText={ePoint => setValue({ ...value, ePoint })}
                                inputMode='text' placeholder='Enter ending point.' className='bg-white px-3 py-2' />
                        </View>
                        <View className='space-y-2'>
                            <Text>Number of Ticket</Text>
                            <TextInput
                                value={value.tickets}
                                onChangeText={tickets => setValue({ ...value, tickets })}
                                inputMode='decimal' placeholder='Enter no. of tickets' className='bg-white px-3 py-2' />
                        </View>
                        <View className='space-y-2'>
                            <Text>Total Fare</Text>
                            <TextInput
                                value={value.fare}
                                onChangeText={fare => setValue({ ...value, fare })}
                                inputMode='decimal' placeholder='Enter total fare' className='bg-white px-3 py-2' />
                        </View>
                        <View className='mt-2 relative'>
                            <Text>Bus Color</Text>
                            <TouchableOpacity className='bg-white px-3 py-3 ' onPress={() => { setVisible(!visible) }}>
                                <Text className='text-black/60'>{!value.col ? "Select Bus Color" : value.col}</Text>
                            </TouchableOpacity>
                            {renderDropdown()}
                        </View>
                        <TouchableOpacity
                            className='bg-white  my-5 rounded-full py-3 px-4 flex justify-center items-center'
                            onPress={onTicketGenerate}
                        >
                            <Text>
                                Generate Ticket
                            </Text>
                        </TouchableOpacity>

                    </View>
                </>
            </TouchableWithoutFeedback>
        </ScrollView>
    )
}



export default home