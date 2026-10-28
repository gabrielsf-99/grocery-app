import { SignUp } from '@clerk/expo/web'
import AuthContainer from '../../components/AuthContainer'

export default function SignUpWeb() {
  return (
    <AuthContainer>
      <SignUp />
    </AuthContainer>
  )
}
