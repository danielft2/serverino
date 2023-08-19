import { useEffect, useRef, useState } from 'react';
import { Keyboard, TextInput, View } from 'react-native';

import { OtpInput } from './components/OtpInput';

interface OtpInputsProps {
   onOtpFilled: (code: string) => void;
}

export function OtpInputs({ onOtpFilled }: OtpInputsProps) {
   const [OTPCode, setOTPCode] = useState('');
   const inputRef = useRef<TextInput | null>(null);

   const handleFocus = () => inputRef.current?.focus();

   useEffect(() => {
      if (OTPCode.length > 3) {
         Keyboard.dismiss();
         onOtpFilled(OTPCode);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [OTPCode]);

   return (
      <View className="relative w-full items-center">
         <TextInput
            ref={inputRef}
            onChangeText={setOTPCode}
            className="absolute w-full"
            keyboardType="number-pad"
            focusable
            autoFocus
            caretHidden={true}
            maxLength={4}
         />
         <View className="flex-row space-x-2">
            <OtpInput
               number={OTPCode[0]}
               isFocused={OTPCode.length === 0}
               onPress={handleFocus}
            />
            <OtpInput
               number={OTPCode[1]}
               isFocused={OTPCode.length === 1}
               onPress={handleFocus}
            />
            <OtpInput
               number={OTPCode[2]}
               isFocused={OTPCode.length === 2}
               onPress={handleFocus}
            />
            <OtpInput
               number={OTPCode[3]}
               isFocused={OTPCode.length == 3}
               onPress={handleFocus}
            />
         </View>
      </View>
   );
}
