import Logo from '@assets/logo.svg';
import { InputText } from '@components/Form/Text';
import { background } from '@styles/background-image';
import {
   ImageBackground,
   View,
   Text,
   TouchableOpacity,
   TouchableWithoutFeedback
} from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { InputPassword } from '@components/Form/Password';
import { Button } from '@components/Button';
import { Keyboard } from 'react-native';

export function Signin() {
   return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
         <View className="flex-1 bg-gray-950">
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

                     <View className="w-full space-y-3 mt-12">
                        <View>
                           <InputText.Root
                              placeholder="Telefone"
                              maxLength={11}
                              keyboardType="phone-pad"
                           />
                        </View>
                        <View>
                           <InputPassword.Root
                              placeholder="Senha"
                              isIconVisible
                              maxLength={6}
                           />
                        </View>
                        <TouchableOpacity>
                           <Text
                              className="text-green-800 font-heading_md ml-1"
                              style={{ fontSize: RFValue(11) }}
                           >
                              Esqueceu a senha?
                           </Text>
                        </TouchableOpacity>

                        <View>
                           <Button.Root variant="primary">
                              <Button.Text>Entrar</Button.Text>
                           </Button.Root>
                        </View>
                     </View>
                  </View>
                  <View className="flex-row justify-center items-center space-x-1">
                     <Text
                        className="text-zinc-400 font-heading_md"
                        style={{ fontSize: RFValue(11) }}
                     >
                        Ainda não tem uma conta?{''}
                     </Text>
                     <TouchableOpacity
                        hitSlop={{ top: 16, left: 16, bottom: 16, right: 16 }}
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
   );
}
