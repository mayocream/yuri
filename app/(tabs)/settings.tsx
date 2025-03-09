import { YStack } from 'tamagui'
import { Text } from '@/components/text'
import Constants from 'expo-constants'

export default function Tab() {
  return (
    <YStack fullscreen padding='$4' backgroundColor='$background'>
      <Text>百合アプリ。百合はレディの嗜みですわー。</Text>
      <Text>
        Version: {Constants.expoConfig?.slug}@{Constants.expoConfig?.version}
      </Text>
    </YStack>
  )
}
