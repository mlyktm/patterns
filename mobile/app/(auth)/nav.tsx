/*  slogan / entry screen ("learn your patterns") page */
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native'
import { useEffect, useRef } from 'react'
import { colors } from '../../constants/theme'
import { StatusBar } from 'expo-status-bar'
import { router } from 'expo-router'

import AuthBackground from '../../components/AuthBackground'
import Blob from '../../assets/icons/blob.svg'




export default function Navigate() {

    const opacity = useRef(new Animated.Value(0)).current

    useEffect(() => {
        Animated.sequence([
        Animated.timing(opacity, {toValue: 1, duration: 1500, useNativeDriver: true,}),    //fade in
        ]).start(() => {})
    }, [])


    return(
    <AuthBackground>
        <View style = {styles.content}>
            <View style={styles.nameContainer}>
                <Animated.View style={[{ opacity }, ]}>
                    <Text style={[styles.name, { top: -1, left: 0 }]}>patterns</Text>
                    <Text style={[styles.name, { top: 1, left: 0 }]}>patterns</Text>
                    <Text style={[styles.name, { top: 0, left: -1 }]}>patterns</Text>
                    <Text style={[styles.name, { top: 0, left: 1 }]}>patterns</Text>
                    <Text style={[styles.name, styles.nameFill, {top: 0, left: 0}]}>patterns</Text>
                </Animated.View>
            </View>

            <Animated.View style={[{ opacity }, ]}>
                <Blob style={styles.blob} width={100} height={100} />
            </Animated.View>


            <View style = {styles.buttonContainer}>
                <Animated.View style={[{ opacity, gap: 12}]}>
                    <TouchableOpacity style={styles.button} onPress={() => router.push('/(auth)/login')}>
                        <Text style={styles.buttonText}>log in</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => router.push('/(auth)/signup')}>
                        <Text style={styles.buttonText}>sign up</Text>
                    </TouchableOpacity>
                </Animated.View>
            </View>
        </View>
        
    </AuthBackground>
)}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    blob: {
        position: 'relative',
        top: 0,
        left: -70,
    },
    nameContainer: {
        bottom: 200,
        width: '100%',
        height: 50,  
    },
    name: {
        fontFamily: 'InstrumentSans_400Regular',
        fontSize: 60,
        position: 'absolute',
        color: '#000',
        textAlign: 'center',
        width: '100%',
    },
    nameFill: {
        color: '#000',
    },
    buttonContainer: {
        gap: 12,
        width: '70%',
    },
    button: {
        backgroundColor: colors.pink,
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#000',
    },
    buttonText: {
        fontFamily: 'InstrumentSans_500Medium',
        color: '#000',
        fontSize: 20,
    },
})