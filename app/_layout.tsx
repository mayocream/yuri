import { Stack } from 'expo-router'
import { TamaguiProvider, Theme } from 'tamagui'

export default function RootLayout() {
  return (
    <TamaguiProvider>
      <Theme>
        <Stack />
      </Theme>
    </TamaguiProvider>
  )
}
