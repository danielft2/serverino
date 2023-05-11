import Logo from '@assets/logo.svg';
import { Button } from '@components/Button';
import { useNavigation } from '@react-navigation/native';
import { background } from '@styles/background-image';
import { LinearGradient } from 'expo-linear-gradient';
import { ImageBackground, Text, View } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export function Welcome() {
   const { navigate } = useNavigation();

   return (
      <View className="flex-1 bg-gray-950 static">
         <ImageBackground
            source={require('@assets/backgrounds/welcome.jpg')}
            style={background.backgroundImage}
         >
            <LinearGradient
               colors={[
                  'rgba(0, 0, 0, 0)',
                  'rgba(0, 0, 0, 0.20)',
                  'rgba(0, 0, 0, 0.95)',
                  'rgba(0, 0, 0, 0.98)'
               ]}
               style={{
                  backgroundColor: 'transparent',
                  position: 'absolute',
                  top: 0,
                  bottom: 0,
                  left: 0,
                  right: 0
               }}
            />
            <View className="h-full justify-end base:p-3 sm:p-4">
               <Logo width={RFValue(110)} height={RFValue(40)} />
               <View
                  className="sm:space-y-2"
                  style={{ marginBottom: RFPercentage(5) }}
               >
                  <Text
                     className="text-white font-heading"
                     style={{ fontSize: RFValue(18) }}
                  >
                     Em busca de um Profissional?{'\n'}Está no lugar certo!
                  </Text>
                  <Text
                     className="text-gray-500 font-reading"
                     style={{
                        fontSize: RFValue(13.5),
                        lineHeight: RFValue(19)
                     }}
                  >
                     Precisando de um serviço? Não perca tempo, acesse e
                     encontre profissionais de diferentes áreas e lugares.
                  </Text>
               </View>
               <Button.Root
                  variant="primary"
                  onPress={() => navigate('signin')}
               >
                  <Button.Text>Acessar</Button.Text>
               </Button.Root>
            </View>
         </ImageBackground>
      </View>
   );
}
