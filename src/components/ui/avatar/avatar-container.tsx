import { ReactNode, useEffect, useState } from 'react';
import { View, Image } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { VariantProps, cva } from 'class-variance-authority';

import { Loading } from '@components/ui/loading';
import { cnMerge } from '@utils/helpers';

import { theme } from '../../../theme';

const avatarContainerVariants = cva(
  'relative overflow-hidden rounded-full bg-blue_dark-600',
  {
    variants: {
      border: {
        green: 'border-green-400',
        white: 'border-white'
      },
      borderSize: {
        sm: 'border-[1px]',
        md: 'border-2',
        lg: 'border-[3px]'
      }
    },
    defaultVariants: {
      border: 'green',
      borderSize: 'sm'
    }
  }
);

interface AvatarContainerProps
  extends VariantProps<typeof avatarContainerVariants> {
  source: string;
  size?: number;
  hasLoading?: boolean;
  isLoading?: boolean;
  children?: ReactNode;
}

export function AvatarContainer({
  source,
  size = 20,
  hasLoading = false,
  isLoading = false,
  children,
  border,
  borderSize
}: AvatarContainerProps) {
  const [isErrorImage, setIsErrorImage] = useState(false);
  const [loadingImage, setLoadingImage] = useState(false);

  useEffect(() => {
    if (source || isLoading) setIsErrorImage(false);
  }, [source, isLoading]);

  return (
    <View
      className={cnMerge(avatarContainerVariants({ border, borderSize }))}
      style={{ width: RFValue(size), height: RFValue(size) }}
    >
      {!isErrorImage && !isLoading && (
        <Image
          source={{ uri: source ? source : 'https://wwww' }}
          className="h-full w-full object-cover"
          onError={() => setIsErrorImage(true)}
          onLoadStart={() => setLoadingImage(true)}
          onLoadEnd={() => setLoadingImage(false)}
        />
      )}
      {hasLoading && (
        <View className="absolute left-[38%] top-[38%]">
          <Loading.Default
            loading={loadingImage || isLoading}
            size={30}
            color={theme.colors.white}
          />
        </View>
      )}
      {isErrorImage && children}
    </View>
  );
}
