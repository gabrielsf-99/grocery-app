import { useUser } from '@clerk/expo'
import { Image } from 'expo-image'

// Clerk has no native avatar component, so render the user's image directly.
export default function UserAvatarNative() {
  const { user } = useUser()

  if (!user) {
    return null
  }

  return <Image source={{ uri: user.imageUrl }} style={{ width: 40, height: 40, borderRadius: 20 }} />
}
