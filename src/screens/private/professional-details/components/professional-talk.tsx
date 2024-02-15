import { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Phone, MessagesSquare } from 'lucide-react-native';
import * as Linking from 'expo-linking';

import { Loading } from '@components/ui/loading';
import { Option } from '@components/ui/option';
import { TalkProfessionalType } from '@domain/types';
import { useFontsize, useToast } from '@hooks';
import { APP_CONSTANTS } from '@constants';

interface ProfessionalTalkProps {
  numberPhone: string;
}

export function ProfessionalTalk({ numberPhone }: ProfessionalTalkProps) {
  const [isLoading, setIsLoading] = useState(false);
  const { getFontsize } = useFontsize();
  const { showBasicMessage } = useToast();

  async function talkWithProfessional(
    talkProfessionalType: TalkProfessionalType
  ) {
    setIsLoading(true);
    try {
      if (talkProfessionalType === TalkProfessionalType.WHATSAPP) {
        await Linking.openURL(
          `whatsapp://send?text=Olá&phone=+55${numberPhone}`
        );
      } else if (talkProfessionalType === TalkProfessionalType.PHONE) {
        await Linking.openURL(`tel:+55${numberPhone}`);
      }
    } catch (error) {
      showBasicMessage(APP_CONSTANTS.ERRORS_MESSAGES.GENERIC_ERROR);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <View className="w-full flex-1 flex-row items-end space-x-2 base:mb-3 base:px-3 sm:px-4 md:mb-4">
      <View className="flex-1">
        <TouchableOpacity
          onPress={() => talkWithProfessional(TalkProfessionalType.WHATSAPP)}
        >
          <Option.Root isBackground>
            <Option.Container>
              <Option.Icon>
                {isLoading ? (
                  <Loading.Default />
                ) : (
                  <MessagesSquare
                    size={getFontsize(20)}
                    className="text-green-400"
                  />
                )}
              </Option.Icon>
              <Text
                className="font-heading_md text-white"
                style={{ fontSize: getFontsize(11) }}
              >
                Whatsapp
              </Text>
            </Option.Container>
          </Option.Root>
        </TouchableOpacity>
      </View>
      <View className="flex-1">
        <TouchableOpacity
          onPress={() => talkWithProfessional(TalkProfessionalType.PHONE)}
        >
          <Option.Root isBackground>
            <Option.Container>
              <Option.Icon>
                <Phone size={getFontsize(20)} className="text-gray-100" />
              </Option.Icon>
              <Text
                className="font-heading_md text-white"
                style={{ fontSize: getFontsize(11) }}
              >
                Telefone
              </Text>
            </Option.Container>
          </Option.Root>
        </TouchableOpacity>
      </View>
    </View>
  );
}
