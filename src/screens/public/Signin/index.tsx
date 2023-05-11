import Logo from '@assets/logo.svg';
import { background } from '@styles/background-image';
import {
   ImageBackground,
   Keyboard,
   SafeAreaView,
   Text,
   TouchableOpacity,
   TouchableWithoutFeedback,
   View
} from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

import { Form } from './components/Form';

export function Signin() {
   return (
      <SafeAreaView className="flex-1 bg-gray-950">
         <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View className="h-full">
               <ImageBackground
                  source={require('@assets/backgrounds/signin.jpg')}
                  style={background.backgroundImage}
               >
                  <View
                     className="h-full base:p-3 sm:p-4 justify-between"
                     style={{ paddingTop: RFPercentage(22) }}
                  >
                     <View className="w-full items-center">
                        <Logo width={RFValue(140)} height={RFValue(60)} />
                        <Text
                           className="text-zinc-500 text-center w-[85%]"
                           style={{
                              fontSize: RFValue(13.5),
                              lineHeight: RFValue(19)
                           }}
                        >
                           Ficamos felizes em tê-lo aqui, continue no aplicativo
                           usando seu usuário e senha.
                        </Text>
                        <Form />
                     </View>
                     <View className="flex-row justify-center items-center space-x-1">
                        <Text
                           className="text-zinc-400 font-heading_md"
                           style={{ fontSize: RFValue(11) }}
                        >
                           Ainda não tem uma conta?{''}
                        </Text>
                        <TouchableOpacity
                           hitSlop={{
                              top: 16,
                              left: 16,
                              bottom: 16,
                              right: 16
                           }}
                        >
                           <Text
                              className="text-green-700 font-heading_md"
                              style={{ fontSize: RFValue(11) }}
                           >
                              Cadastre-se agora
                           </Text>
                        </TouchableOpacity>
                     </View>
                  </View>
               </ImageBackground>
            </View>
         </TouchableWithoutFeedback>
      </SafeAreaView>
   );
}
