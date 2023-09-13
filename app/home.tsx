import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import Logo from '../src/assets/logo-min.svg'
import { StatusBar } from 'expo-status-bar'
import { ArrowDownSquareIcon, Plus, Search } from 'lucide-react-native'
import MapView from 'react-native-maps'
import { useRouter } from 'expo-router'

export default function Home() {
  const router = useRouter()
  return (
    <SafeAreaView className="flex-1 bg-white-100 pt-8 ">
      <View className="w-full flex-row items-center px-5 pt-10">
        <Logo width={92} height={40} />
        <TouchableOpacity
          activeOpacity={0.7}
          className="h-8 w-56 flex-row items-center justify-between rounded-3xl bg-gray-50 px-2 py-2"
        >
          <Text className="ml-1 font-body text-sm text-gray-100">
            O que você busca?
          </Text>
          <Search color="#555555" />
        </TouchableOpacity>
      </View>
      <View className="mx-6 mt-12 items-center">
        <View className="h-[90%] w-full rounded-lg bg-white-50">
          <View className="mx-6 my-6 flex-row items-center justify-center">
            <ArrowDownSquareIcon color="#555555" />
            <Text className="ml-3 text-center font-title text-xl">
              FEIRA NOTURNA BARUERI
            </Text>
          </View>
          <View className="mx-6 mb-6">
            <Text className="text-center font-body text-base">
              Terça-feira
              {'\n'}
              das 17h00 às 22h30
            </Text>
          </View>
          <View className="w-full flex-1 border-t border-t-gray-50">
            <TouchableOpacity className="ml-6 mr-5 mt-6">
              <Text className="h-5 text-center font-title font-semibold text-red-50">
                Confira a localização
              </Text>
            </TouchableOpacity>
            <MapView
              className="mx-7 mt-5 h-72 w-72"
              initialRegion={{
                latitude: -23.507660717477247,
                longitude: -46.86704766936435,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
              }}
            />
          </View>
        </View>
      </View>
      <TouchableOpacity
        className="absolute bottom-3 right-2 h-12 w-12 items-center justify-center rounded-full 
    bg-red-50"
        onPress={() => router.push('/cadastrarfeirante')}
      >
        <Plus color="white" />
      </TouchableOpacity>
      <StatusBar style="dark" />
    </SafeAreaView>
  )
}
