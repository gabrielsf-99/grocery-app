import { AuthView } from '@clerk/expo/native-components'

// The (auth) layout already redirects to "/" once the session is active.
export default function SignIn() {
  return <AuthView isDismissible={false} mode="signInOrUp"/>
}
