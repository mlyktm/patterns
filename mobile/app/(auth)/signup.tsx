/*  for new users signing up  */
/*  for user logging in  */
/*  slogan / entry screen ("learn your patterns") page */
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native'
import { useEffect, useRef } from 'react'
import { colors } from '../../constants/theme'
import { StatusBar } from 'expo-status-bar'
import { router } from 'expo-router'

import AuthBackground from '../../components/AuthBackground'

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
            
        </View>
        
    </AuthBackground>
)}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    
})