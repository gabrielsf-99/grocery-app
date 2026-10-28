import { SignIn } from '@clerk/expo/web'
import AuthContainer from '../../components/AuthContainer'

export default function SignInWeb() {
  return (
    <AuthContainer>
      <SignIn />
    </AuthContainer>
  )
}
