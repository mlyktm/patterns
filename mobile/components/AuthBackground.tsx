/*  layout for all auth screens  */
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

type Props = {
  children: React.ReactNode
}


export default function AuthBackground({ children }: Props) {
    return(
    <View style={styles.container}>
    <StatusBar style="auto" hidden={true} />

    {/* scattered icons — positioned absolutely */}
    <BlGreen style={styles.iconBottomLeft} width={180} height={180} />
    <BrRed style={styles.iconBottomRight} width={180} height={180} />
    <TlPink style={styles.iconTopLeft} width={180} height={180} />
    <TrYellow style={styles.iconTopRight} width={180} height={180} />

    { children }
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
})