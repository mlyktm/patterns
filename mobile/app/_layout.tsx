/*  root layout page, wraps all pages  */

import { View } from 'react-native'
import { Slot } from 'expo-router'
import { useFonts, InstrumentSans_400Regular, InstrumentSans_500Medium, InstrumentSans_700Bold, InstrumentSans_700Bold_Italic } from '@expo-google-fonts/instrument-sans'
import { colors } from '../constants/theme'


/*  background color for all pages  */

export default function RootLayout() {
    const [fontsLoaded] = useFonts({
    InstrumentSans_400Regular,
    InstrumentSans_700Bold_Italic,
    InstrumentSans_700Bold,
    InstrumentSans_500Medium 
  })

  if (!fontsLoaded) return null
  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>        
      <Slot />
    </View>
  )
}