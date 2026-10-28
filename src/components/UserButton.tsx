import { UserButton } from '@clerk/expo/native-components'
import { View } from 'react-native'

// Opens the native Clerk user profile when tapped.
export default function UserButtonNative() {
  return (
    <View style={{ width: 40, height: 40 }}>
      <UserButton />
    </View>
  )
}
