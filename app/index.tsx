/* eslint-disable prettier/prettier */
import { StatusBar } from 'expo-status-bar'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { Link } from 'expo-router'

import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins'

import { ArrowRightCircle } from 'lucide-react-native'

import { BaiJamjuree_700Bold } from '@expo-google-fonts/bai-jamjuree'
import AppLogo from '../src/assets/logo-principal.png'
import GoogleLogo from '../src/assets/google.svg'
import FacebookLogo from '../src/assets/facebook.svg'
import AppleLogo from '../src/assets/apple.svg'

export default function App() {
  const [hasLoadedFonts] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
    BaiJamjuree_700Bold,
  })

  if (!hasLoadedFonts) {
    return null
  }
  return (
    <View className="bg-white flex-1 items-center justify-center">
      <View className="items-center justify-between gap-14 ">
        <Image
          className="h-40"
          resizeMode="contain"
          source={AppLogo}
          alt="fatec logo"
        />
        <Link href="/login" asChild>
          <TouchableOpacity
            activeOpacity={0.7}
            className="h-14 w-72 flex-row items-center justify-center rounded-3xl bg-gray-50 px-5 py-2"
          >
            <ArrowRightCircle color="#555555" />
            <Text className="ml-5 text-xl font-body text-gray-100">Entrar com e-mail</Text>
          </TouchableOpacity>
        </Link>
      </View>

      <View>
        <Link href="/cadastrar" asChild>
          <TouchableOpacity
            activeOpacity={0.7}
            className="mt-2 h-14 w-72 flex-row items-center justify-center rounded-3xl bg-gray-50 px-5 py-2"
          >
            <ArrowRightCircle color="#555555" />
            <Text className="ml-5 text-xl font-body text-gray-100">Cadastrar</Text>
          </TouchableOpacity>
        </Link>
      </View>

      <View className="mt-10 flex-row items-center justify-center">
        <TouchableOpacity className="mr-8 h-14 w-14 items-center rounded-full">
          <GoogleLogo />
          <Text className="mt-1 font-body text-xs">Google</Text>
        </TouchableOpacity>
        <TouchableOpacity className="mr-8 h-14 w-14 items-center rounded-full">
          <FacebookLogo />
          <Text className="mt-1 font-body text-xs">Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity className="h-14 w-14 items-center rounded-full">
          <AppleLogo />
          <Text className="mt-1 font-body text-xs">Apple ID</Text>
        </TouchableOpacity>
        <StatusBar style="dark" />
      </View>
      {/* <View className=" mt-20 w-full flex-row justify-between px-5">
        <Image className="h-10" resizeMode="contain" alt="logo barueri" source={BarueriLogo} />
        <Image className="h-10" resizeMode="contain"alt="logo fatec" source={FatecLogo} />
      </View> */}
    </View>
  )
}
