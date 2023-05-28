import { useState } from 'react';
import { PersonalData } from '../components/PersonalData';
import { LocationData } from '../components/LocationData';

export enum STEPS_ENUM {
   DADOS_BASICOS,
   DADOS_ENDERECO
}

const components = [<PersonalData key={0} />, <LocationData key={1} />];

export function useRegister() {
   const [stepIndex, setStepIndex] = useState(STEPS_ENUM.DADOS_BASICOS);
   const stepsNames = ['Dados Básicos', 'Dados de Endereço'];

   function handleChangeStep(stepIndex: number) {
      if (stepIndex < 0 || stepIndex > components.length - 1) return;
      setStepIndex(stepIndex);
   }

   return {
      current_step: components[stepIndex],
      current_step_name: stepsNames[stepIndex],
      step_index: stepIndex,
      isLastStep: stepIndex == components.length - 1,
      handleChangeStep
   };
}
