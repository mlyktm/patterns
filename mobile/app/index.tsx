/*  slogan / entry screen ("learn your patterns") page */
import { View, Text, StyleSheet, Animated } from 'react-native'
import { useEffect, useRef } from 'react'
import { colors } from '../constants/theme'
import { StatusBar } from 'expo-status-bar'
import { router } from 'expo-router'


import BlGreen from '../assets/icons/bl_green.svg'
import BrRed from '../assets/icons/br_red.svg'
import TlPink from '../assets/icons/tl_pink.svg'
import TrYellow from '../assets/icons/tr_yellow.svg'


export default function Starter() {

    const opacity = useRef(new Animated.Value(0)).current

    useEffect(() => {
        Animated.sequence([
        Animated.timing(opacity, {toValue: 1, duration: 1500,useNativeDriver: true,}),    //fade in
        Animated.delay(1000), //wait
        Animated.timing(opacity, {toValue: 0, duration: 1000, useNativeDriver: true,}),   //fade out
        ]).start(() => {
        // navigate after fade out finishes
        router.replace('/(auth)/nav') //go to next page
        })
    }, [])


    return(
    <View style={styles.container}>
    <StatusBar style="auto" hidden={true} />

    {/* scattered icons — positioned absolutely */}
    <BlGreen style={styles.iconBottomLeft} width={180} height={180} />
    <BrRed style={styles.iconBottomRight} width={180} height={180} />
    <TlPink style={styles.iconTopLeft} width={180} height={180} />
    <TrYellow style={styles.iconTopRight} width={180} height={180} />

    {/* centered main content */}
    <Animated.View style={[{ opacity }, StyleSheet.absoluteFill]}>
    <View style={styles.content}>
        <View style={styles.sloganContainer}>
            <Text style={[styles.slogan, { top: -1, left: 0 }]}>learn your patterns.</Text>
            <Text style={[styles.slogan, { top: 1, left: 0 }]}>learn your patterns.</Text>
            <Text style={[styles.slogan, { top: 0, left: -1 }]}>learn your patterns.</Text>
            <Text style={[styles.slogan, { top: 0, left: 1 }]}>learn your patterns.</Text>
            <Text style={[styles.slogan, styles.sloganFill, {top: 0, left: 0}]}>learn your patterns.</Text>
        </View>
    </View>
    </Animated.View>

    </View>
)}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  iconTopLeft: {
    position: 'absolute',
    top: -25,
    left: 0,
  },
  iconTopRight: {
    position: 'absolute',
    top: 160,
    right: -60,
  },
  iconBottomLeft: {
    position: 'absolute',
    bottom: 60,
    left: -60,
  },
  iconBottomRight: {
    position: 'absolute',
    bottom: -40,
    right: -20,
  },
  content: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
},
  sloganContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 50,  
  },
    slogan: {
  fontFamily: 'InstrumentSans_400Regular',
  fontSize: 30,
  position: 'absolute',
  color: '#000',
  textAlign: 'center',
  width: '100%',
},
sloganFill: {
  color: '#000',
},
})