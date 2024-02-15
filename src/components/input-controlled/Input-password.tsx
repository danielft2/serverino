import { useState } from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { Controller, useFormContext } from 'react-hook-form';
import { EyeIcon, EyeOff } from 'lucide-react-native';

import { Input } from '@components/ui/Input/input-text';
import { InputTextRootProps } from '@components/ui/Input/input-text/InputTextRoot';

interface InputPasswordControllProps extends InputTextRootProps {
  name: string;
  isVisibleIcon?: boolean;
}

export function InputPasswordControll({
  name,
  isVisibleIcon = true,
  ...rest
}: InputPasswordControllProps) {
  const [show, setShow] = useState(false);
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <Input.Root
          keyboardType="number-pad"
          secureTextEntry={!show}
          maxLength={6}
          onChangeText={onChange}
          value={value}
          {...rest}
        >
          <Input.IconRoot>
            {isVisibleIcon && (
              <Input.IconPassword onPress={() => setShow(!show)}>
                {show && (
                  <EyeIcon className="text-gray-300" size={RFValue(20)} />
                )}
                {!show && (
                  <EyeOff className="text-gray-300" size={RFValue(20)} />
                )}
              </Input.IconPassword>
            )}
          </Input.IconRoot>
        </Input.Root>
      )}
    />
  );
}
