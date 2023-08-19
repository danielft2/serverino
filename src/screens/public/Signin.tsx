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

import { useNavigation } from '@react-navigation/native';

import Logo from '@assets/logo.svg';
import { background } from '@styles/background-image';
import { SigninForm } from '@templates/Signin';
import { useFontsize } from '@hooks/shared';

export function Signin() {
   const { navigate } = useNavigation();
   const { getFontsize } = useFontsize();

   return (
      <SafeAreaView className="flex-1 bg-gray-950">
         <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View className="h-full">
               <ImageBackground
                  source={require('@assets/backgrounds/signin.jpg')}
                  style={background.backgroundImage}
               >
                  <View
                     className="h-full justify-between base:p-3 sm:p-4"
                     style={{ paddingTop: RFPercentage(22) }}
                  >
                     <View className="w-full items-center">
                        <Logo width={RFValue(140)} height={RFValue(60)} />
                        <Text
                           className="w-[85%] text-center text-gray-200"
                           style={{
                              fontSize: RFValue(13.5),
                              lineHeight: RFValue(19)
                           }}
                        >
                           Ficamos felizes em tê-lo aqui, continue no aplicativo
                           usando seu usuário e senha.
                        </Text>
                        <SigninForm />
                     </View>
                     <View className="flex-row items-center justify-center space-x-1">
                        <Text
                           className="font-heading_md text-gray-100"
                           style={{ fontSize: getFontsize(11) }}
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
                           onPress={() => navigate('register')}
                        >
                           <Text
                              className="font-heading_md text-green-400"
                              style={{ fontSize: getFontsize(11) }}
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
