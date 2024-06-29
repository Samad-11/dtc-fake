import { View, Text, TouchableOpacity, Image, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react'
import { router, useLocalSearchParams } from 'expo-router'

// red-600/90
// orange-400
// cyan-300/90
// green-600
// blue-500


const GeneratedTicket = () => {
    const [showQR, setShowQR] = useState(false)
    const { busNo, routeNo, sPoint, ePoint, tickets, fare, color } = useLocalSearchParams()
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    const d = new Date();

    const datestring = d.getDate().toString() + " " + d.toLocaleDateString('default', { month: 'long' }) + ", " + d.getFullYear().toString().slice(2) + " | " + d.toLocaleDateString('en-US', { hour: "2-digit", minute: 'numeric', hour12: true }).slice(10)

    return (
        <>
            <View className={`justify-center items-center flex-1 px-5
            ${color}
            relative
        `}
            >
                <View className='absolute top-12 justify-between flex-row w-full'>
                    <View className='flex-row gap-7'>
                        <TouchableOpacity onPress={() => router.back()}>
                            <Text className='text-white'>X</Text>
                        </TouchableOpacity>
                        <Text className='text-white'>Ticket</Text>
                    </View>
                    <View>
                        <Text className='underline text-white'>All Tickets</Text>
                    </View>
                </View>
                {
                    showQR ? <QRImage setShowQR={setShowQR} /> :
                        <View className='shadow-md shadow-black rounded-md min-h-[50vh] w-full p-5 bg-white'>
                            <View>
                                <Text className='text-center font-semibold text-lg'>Transport Dept. of Delhi</Text>
                            </View>
                            <View className='text-lg mt-2 flex-row justify-between'>
                                <Text className='text-lg uppercase'>
                                    {busNo || "Dl51EV0541"}
                                </Text>
                                <Text className='text-lg'>
                                    &#8377;{(parseFloat(fare as string) - (parseFloat(fare as string) / 10)).toFixed(1) || "9.0"}
                                </Text>
                            </View>
                            <View className='w-full h-[1px] my-3 bg-black' />
                            <View className='flex-row justify-between'>
                                <View className=''>
                                    <Text>Bus Route</Text>
                                    <Text className='text-lg uppercase'>{routeNo || "165A"}</Text>
                                </View>
                                <View>
                                    <Text>Fare</Text>
                                    <Text className='text-lg'>&#8377;{parseFloat(fare as string).toFixed(1) || "9"}</Text>
                                </View>
                            </View>
                            <View className='flex-row justify-between my-1'>
                                <View className=''>
                                    <Text>Booking Time</Text>
                                    <Text className='text-lg'>{datestring}</Text>
                                </View>
                                <View>
                                    <Text>Tickets</Text>
                                    <Text className='text-lg text-right'>{tickets || "1"}</Text>
                                </View>
                            </View>
                            <View className='flex-row justify-between flex-wrap gap-y-2 my-1'>
                                <View className=''>
                                    <Text>Starting stop</Text>
                                    <Text className='text-lg uppercase'>{sPoint || "Wazirabad Crossing"}</Text>
                                </View>
                                <View>
                                    <Text>Ending stop</Text>
                                    <Text className='text-lg text-right uppercase'>{ePoint || "B-Block Yamuna Vihar"}</Text>
                                </View>
                            </View>
                            <View>
                                <Text className='text-center'>T{d.getDate().toString() + d.getMonth().toString() + d.getFullYear()}8f061895a3</Text>
                            </View>
                            <View className='my-3'>
                                <TouchableOpacity
                                    onPress={() => setShowQR(true)}
                                    className='border border-green-600 bg-green-600/20 py-3 flex justify-center items-center rounded-md'
                                >
                                    <Text className='text-green-600 font-bold'>Show QR code</Text>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <Text className='text-lg'>Arrival : </Text>
                            </View>
                        </View>
                }


            </View>
        </>
    )
}

const QRImage = ({ setShowQR }: { setShowQR: Function }) => {
    return (


        <View className='
    h-96
    w-96
    justify-center items-center px-4 rounded-md '>
            <TouchableWithoutFeedback
                onPress={() => setShowQR(false)}
            >

                <Image
                    source={require("../assets/images/qr.jpg")}
                    style={{ resizeMode: "contain" }}
                    className='h-full w-full rounded-md shadow-md shadow-black'
                />
            </TouchableWithoutFeedback>
        </View>
    )
}

export default GeneratedTicket