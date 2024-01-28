import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import { ImagePickerOptions, ImagePickerResult } from 'expo-image-picker';
import { useMutation } from '@tanstack/react-query';

import { AvatarOptions } from '@domain/types/avatar-options';
import { SessionsService } from '@services/session.service';
import { ERRORS_MESSAGES } from '@services/errors';
import { APP_CONSTANTS } from '@constants';

import { useToast } from '../shared/useToast';
import { useSession } from '@hooks/shared';
import { useSessionStore } from '@store/session';

interface UserUpdateAvatarProps {
   onClose: () => void;
}

export function useUpdateAvatar({ onClose }: UserUpdateAvatarProps) {
   const [statusCamera, requestPermissionCamera] =
      ImagePicker.useCameraPermissions();
   const [statusLibrary, requestPermissionLibrary] =
      ImagePicker.useMediaLibraryPermissions();

   const user = useSessionStore((state) => state.user);
   const { updateSession } = useSession();
   const { showBasicMessage } = useToast();

   const { isLoading, mutateAsync: updateAvatar } = useMutation({
      mutationKey: ['updateUserAvatar'],
      mutationFn: (image: string) =>
         SessionsService.updateAvatar(user.id, image),
      onSuccess: (data) => {
         updateSession({ ...user, link: data.meta.results.link });
      },
      onError: () => {
         showBasicMessage(ERRORS_MESSAGES.GENERIC_ERROR);
      }
   });

   const imagePickerOption: ImagePickerOptions = {
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
      base64: true
   };

   async function handlePickerImage(type: AvatarOptions) {
      let result: ImagePickerResult;

      try {
         if (type === AvatarOptions.CAMERA) {
            if (!statusCamera.granted && statusCamera.canAskAgain)
               await requestPermissionCamera();
            else if (statusCamera.granted)
               result = await ImagePicker.launchCameraAsync(imagePickerOption);
            else return onPermissionsDenied();
         } else {
            if (!statusLibrary.granted && statusLibrary.canAskAgain)
               await requestPermissionLibrary();
            else if (statusLibrary.granted)
               result = await ImagePicker.launchImageLibraryAsync(
                  imagePickerOption
               );
            else return onPermissionsDenied();
         }
      } catch (error) {
         return onPickerImageFailed();
      }

      if (!result || result.canceled) return;

      if (result.assets[0].uri && result.assets[0].base64) {
         const imageInfor = (await FileSystem.getInfoAsync(
            result.assets[0].uri
         )) as any;

         if (imageInfor.size && imageInfor.size / 1024 / 1024 > 5) {
            showBasicMessage(APP_CONSTANTS.UPDATE_AVATAR.PICKER_IMAGE_SIZE);
            onClose();
         } else {
            const base64 = `data:image/jpeg;base64,${result.assets[0].base64}`;
            onClose();
            updateAvatar(base64);
         }
      } else return onPickerImageFailed();
   }

   function onPermissionsDenied() {
      showBasicMessage(APP_CONSTANTS.UPDATE_AVATAR.PERMISIONS_DENIED);
      onClose();
      return;
   }

   function onPickerImageFailed() {
      showBasicMessage(APP_CONSTANTS.UPDATE_AVATAR.PICKER_IMAGE_FAILED);
      onClose();
      return;
   }

   return {
      handlePickerImage,
      isLoading
   };
}
