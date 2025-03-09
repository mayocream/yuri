import { Tabs } from 'expo-router'
import { Home, Settings } from '@tamagui/lucide-icons'

// Colors
// https://m2.material.io/design/color/the-color-system.html#tools-for-picking-colors
// Pink 50 #FCE4EC
// 100 #F8BBD0
// 200 #F48FB1
// 300 #F06292
// 400 #EC407A
// 500 #E91E63
// 600 #D81B60
// 700 #C2185B
// 800 #AD1457
// 900 #880E4F
// A100 #FF80AB
// A200 #FF4081
// A400 #F50057
// A700 #C51162

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerTitleStyle: {
          fontFamily: 'NotoSansJP_700Bold',
        },
        tabBarActiveTintColor: '#F06292',
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          headerShown: false,
          tabBarLabel: 'ホーム',
          tabBarIcon: ({ size, color }) => <Home size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name='settings'
        options={{
          title: '設定',
          tabBarLabel: '設定',
          tabBarIcon: ({ size, color }) => (
            <Settings size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  )
}
