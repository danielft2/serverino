import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import { ImagePickerOptions, ImagePickerResult } from 'expo-image-picker';
import { useMutation } from '@tanstack/react-query';

import { AvatarOptions } from '@domain/types/avatar-options';
import { SessionsService } from '@services/http/session.service';
import { ERRORS_MESSAGES } from '@services/http/errors';
import { APP_MESSAGES_ERROR } from '@constants';

import { useToast } from './useToast';
import { useSession } from './useSession';

interface UserUpdateAvatarProps {
   onClose: () => void;
}

export function useUpdateAvatar({ onClose }: UserUpdateAvatarProps) {
   const [statusCamera] = ImagePicker.useCameraPermissions();
   const [statusLibrary] = ImagePicker.useMediaLibraryPermissions();

   const { user, updateUserStorage } = useSession();
   const { showErrorMessage } = useToast();

   const { isLoading, mutateAsync: updateAvatar } = useMutation({
      mutationKey: ['updateUserAvatar'],
      mutationFn: (image: string) =>
         SessionsService.updateAvatar(user.id, image),
      onSuccess: (data) => {
         updateUserStorage(user, data.meta.results.link);
      },
      onError: () => {
         showErrorMessage(ERRORS_MESSAGES.GENERIC_ERROR);
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
         if (type === AvatarOptions.CAMERA && statusCamera.granted) {
            result = await ImagePicker.launchCameraAsync(imagePickerOption);
         } else if (type === AvatarOptions.GALERY && statusLibrary.granted) {
            result = await ImagePicker.launchImageLibraryAsync(
               imagePickerOption
            );
         } else {
            showErrorMessage(APP_MESSAGES_ERROR.PERMISIONS_DENIED);
            onClose();
            return;
         }
      } catch (error) {
         showErrorMessage(APP_MESSAGES_ERROR.PICKER_IMAGE_FAILED);
         onClose();
         return;
      }

      if (result.canceled) return;

      if (result.assets[0].uri && result.assets[0].base64) {
         const imageInfor = (await FileSystem.getInfoAsync(
            result.assets[0].uri
         )) as any;

         if (imageInfor.size && imageInfor.size / 1024 / 1024 > 5) {
            showErrorMessage(APP_MESSAGES_ERROR.PICKER_IMAGE_SIZE);
            onClose();
         } else {
            const base64 = `data:image/jpeg;base64,${result.assets[0].base64}`;
            onClose();
            updateAvatar(base64);
         }
      } else {
         showErrorMessage(APP_MESSAGES_ERROR.PICKER_IMAGE_FAILED);
         onClose();
      }
   }

   return {
      handlePickerImage,
      isLoading
   };
}
