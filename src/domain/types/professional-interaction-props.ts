export interface ProfessionalInteraction {
   type: number;
   professionalIndex: number;
   professional_id: number;
   professional_uuid: string;
   interactions: {
      tipo_id: number;
      registro_id: number;
   }[];
}
