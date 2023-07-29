import { View, Text } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';

import { Button } from '@components/Button';
import SomethingWrongIlustration from '@assets/ilustrations/something-wrong.svg';
import Logo from '@assets/logo.svg';

interface SomethingWrongProps {
   onTryAgain: () => void;
}

export function SomethingWrong({ onTryAgain }: SomethingWrongProps) {
   const statusBarHeigth = getStatusBarHeight();

   return (
      <Animated.View
         entering={FadeIn.delay(100)}
         exiting={FadeOut.delay(50)}
         className="flex-1 space-y-4 px-4"
         style={{ paddingTop: statusBarHeigth }}
      >
         <Logo
            width={RFValue(110)}
            height={RFValue(40)}
            className="mb-3 mr-2 self-center"
         />
         <View
            className="items-center justify-center"
            style={{ height: RFPercentage(80) }}
         >
            <SomethingWrongIlustration
               width={RFValue(150)}
               height={RFValue(150)}
            />
            <Text
               className="mt-2 text-center font-heading_sm text-white"
               style={{ fontSize: RFValue(16) }}
            >
               Erro inesperado ao carregar
            </Text>
            <Text className="-mt-1 mb-4 max-w-[90%] text-center text-gray-100">
               Ocorreu um erro inesperado, espere alguns segundos e tente
               novamente.
            </Text>
            <Button.Root
               variant="secondary"
               weigth="auto"
               className="self-center"
               onPress={onTryAgain}
            >
               <Button.Text>Tentar Novamente</Button.Text>
            </Button.Root>
         </View>
      </Animated.View>
   );
}
