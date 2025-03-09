import { Stack } from 'expo-router'
import { createTamagui, TamaguiProvider, Theme } from 'tamagui'
import { defaultConfig } from '@tamagui/config/v4'

const config = createTamagui(defaultConfig)

import {
  useFonts,
  NotoSansJP_400Regular,
  NotoSansJP_700Bold,
} from '@expo-google-fonts/noto-sans-jp'

export default function RootLayout() {
  let [fontsLoaded] = useFonts({
    NotoSansJP_400Regular,
    NotoSansJP_700Bold,
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    <TamaguiProvider config={config}>
      <Theme>
        <Stack>
          <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
        </Stack>
      </Theme>
    </TamaguiProvider>
  )
}
