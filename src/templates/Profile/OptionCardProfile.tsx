import { ReactNode } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { ChevronRight } from 'lucide-react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import { ProfileItemCard } from '@components/Option';

interface OptionCardProfileProps {
   label: string;
   icon: ReactNode;
   onPress?: () => void;
}

export function OptionCardProfile({
   icon,
   label,
   onPress
}: OptionCardProfileProps) {
   return (
      <TouchableOpacity className="mb-4 w-full" onPress={onPress}>
         <ProfileItemCard.Root isBackground key={label}>
            <ProfileItemCard.Container>
               <ProfileItemCard.Icon>{icon}</ProfileItemCard.Icon>
               <Text
                  className="font-heading_md text-white"
                  style={{ fontSize: RFValue(11) }}
               >
                  {label}
               </Text>
            </ProfileItemCard.Container>
            <ChevronRight size={20} className="text-white" />
         </ProfileItemCard.Root>
      </TouchableOpacity>
   );
}
