/*  root layout page, wraps all pages  */

import { View } from 'react-native'
import { Slot } from 'expo-router'
import { colors } from '../constants/theme'

/*  background color for all pages  */

export default function RootLayout() {
  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>        
      <Slot />
    </View>
  )
}