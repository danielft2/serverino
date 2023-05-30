const input_style_dafault =
   'base:h-11 sm:h-[52px] lg:h-14 rounded-full px-6 font-reading border-[0.5px] text-gray-300';

const input_style_dinamic = (
   error = false,
   editable = true,
   isLogin = false
) => {
   let style = error
      ? 'bg-red-900 border-red-800 focus:bg-red-900 focus:border-red-800'
      : `${
           isLogin ? 'bg-zinc-800' : 'bg-zinc-900'
        }  border-gray-700 focus:bg-green-900 focus:border-green-800`;
   style += `${editable ? ' opacity-100' : ' opacity-60'}`;

   return style;
};

export const inputStyle = {
   default: input_style_dafault,
   dinamic: input_style_dinamic
};
