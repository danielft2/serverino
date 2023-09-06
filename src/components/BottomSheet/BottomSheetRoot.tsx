import { forwardRef, ReactNode, Ref } from 'react';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { BottomSheetModalMethods } from '@gorhom/bottom-sheet/lib/typescript/types';

import { BottomSheetBackdrop } from './BottomSheetBackdrop';
import { theme } from '../../theme';

interface BottomSheetRootProps {
   children: ReactNode;
   onDismiss: () => void;
}

export const BottomSheetRoot = forwardRef(
   (
      { onDismiss, children }: BottomSheetRootProps,
      ref: Ref<BottomSheetModalMethods>
   ) => {
      return (
         <>
            <BottomSheetModal
               ref={ref}
               index={0}
               snapPoints={['50%', '95%']}
               backgroundStyle={{
                  backgroundColor: theme.colors.blue_dark[700]
               }}
               backdropComponent={() => (
                  <BottomSheetBackdrop onClose={onDismiss} />
               )}
               handleIndicatorStyle={{ backgroundColor: 'white' }}
               onDismiss={onDismiss}
            >
               {children}
            </BottomSheetModal>
         </>
      );
   }
);
