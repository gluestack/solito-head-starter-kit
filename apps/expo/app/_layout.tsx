import { Stack } from 'expo-router'
import { Provider } from 'app/provider'
import { StatusBar } from 'expo-status-bar'

export default function App() {
  return (
    <Provider>
      <StatusBar />
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="login" options={{ headerShown: false }} />
        <Stack.Screen name="signup" options={{ headerShown: false }} />
        <Stack.Screen name="forgot-password" options={{ headerShown: false }} />
        <Stack.Screen name="verify-otp" options={{ headerShown: false }} />
        <Stack.Screen name="create-password" options={{ headerShown: false }} />
      </Stack>
    </Provider>
  )
}
