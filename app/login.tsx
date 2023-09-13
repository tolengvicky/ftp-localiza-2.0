import { StatusBar } from 'expo-status-bar'
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native'
import Logo from '../src/assets/logo-min.svg'
import { useState } from 'react'
import { Link, useRouter } from 'expo-router'
import { ScrollView } from 'react-native-gesture-handler'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { FIREBASE_AUTH } from '../firebaseConfig'

export default function Logar() {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const auth = FIREBASE_AUTH

  const signIn = async () => {
    setLoading(true)
    try {
      const response = await signInWithEmailAndPassword(auth, user, password)
      console.log(response)
      router.push('/home')
    } catch (error) {
      console.log(error)
      alert('Login ou senha incorretos!')
      router.push('/login')
    } finally {
      setLoading(false)
    }
  }

  return (
    <ScrollView className="bg-white flex-1 pt-44">
      <View className="ml-14">
        <Logo />
      </View>
      <View className="mx-6 my-20 flex-1 items-center justify-center rounded-2xl bg-white-150">
        <View className="flex-col  space-y-3">
          <Text className="mb-6 mt-10 font-title text-2xl leading-tight text-green-50">
            Bem-vindo! Vamos as compras?
          </Text>
          <TextInput
            className="h-10 w-64 rounded-2xl border border-gray-50 bg-gray-50 px-5 py-1 font-body text-base"
            placeholder="Usuário"
            value={user}
            onChangeText={setUser}
          />
          <TextInput
            className="mb-3 h-10 w-64 justify-center rounded-2xl border border-gray-50 bg-gray-50 px-5 pt-1 font-body text-base"
            placeholder="Senha"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />
        </View>
        {loading ? (
          <ActivityIndicator size="large" color="#FFF112" />
        ) : (
          <TouchableOpacity
            activeOpacity={0.7}
            className="h-10 w-44 items-center justify-center rounded-2xl bg-red-50 px-5 py-2"
            onPress={signIn}
          >
            <Text className="font-title text-sm text-white-100 ">Login</Text>
          </TouchableOpacity>
        )}

        <Link href="/" asChild>
          <TouchableOpacity
            activeOpacity={0.7}
            className="h-14 w-72 flex-row items-center justify-center rounded-3xl"
          >
            <Text className="text-l my-5 font-body text-gray-100 underline">
              Voltar
            </Text>
          </TouchableOpacity>
        </Link>
      </View>
      <StatusBar style="dark" />
    </ScrollView>
  )
}
