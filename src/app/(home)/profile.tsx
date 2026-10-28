import { UserProfileView } from '@clerk/expo/native-components'
import { useAuth } from '@clerk/expo'
import { useRouter } from 'expo-router'
import { useEffect } from 'react'

export default function Page() {
  const { isLoaded, isSignedIn } = useAuth({ treatPendingAsSignedOut: false })
  const router = useRouter()

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.replace('/')
    }
  }, [isLoaded, isSignedIn, router])

  return <UserProfileView isDismissible={false} style={{ flex: 1 }} />
}