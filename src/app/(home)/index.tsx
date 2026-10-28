import { useClerk } from '@clerk/expo'
import { Link } from 'expo-router'
import { Button, StyleSheet, Text, View } from 'react-native'
import UserButton from '../../components/UserButton'

export default function Index() {
  const { signOut } = useClerk()

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <UserButton />
      </View>
      <View style={styles.content}>
        <Text>{"You're signed in"}</Text>
        <Link href="/profile">Profile</Link>
        <Button title="Sign out" onPress={() => signOut()} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: 12,
  },
  content: {
    flex: 1,
    gap: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
