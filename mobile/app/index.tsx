/*  slogan / entry screen ("learn your patterns") page */
import { View, Text, StyleSheet, Animated } from 'react-native'
import { useEffect, useRef } from 'react'
import { colors } from '../constants/theme'

import bl_green from '../assets/icons/bl_green.svg'
import br_red from '../assets/icons/br_red.svg'
import tl_blue from '../assets/icons/tl_blue.svg'
import tr_pink from '../assets/icons/tr_pink.svg'

<View style={styles.container}>

  {/* scattered icons — positioned absolutely */}
  <MyIcon style={styles.iconTopLeft} width={40} height={40} />
  <MyIcon style={styles.iconBottomRight} width={60} height={60} />

  {/* centered main content */}
  <View style={styles.content}>
    <Text style={styles.slogan}>Your slogan</Text>
  </View>

</View>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  iconTopLeft: {
    position: 'absolute',
    top: 80,
    left: 24,
  },
  iconBottomRight: {
    position: 'absolute',
    bottom: 80,
    right: 24,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})