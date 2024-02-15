import { useState } from 'react';
import { RegisterLocationData, RegisterPersonalData } from '../components';

export enum STEPS_ENUM {
  DADOS_BASICOS,
  DADOS_ENDERECO
}

const components = [
  <RegisterPersonalData key={0} />,
  <RegisterLocationData key={1} />
];

export function useRegisterSteps() {
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
