import { ProfessionalModel } from '@domain/models/professional.model';

export type ProfessionalsListResponse = {
   current_page: number;
   data: ProfessionalModel[];
   next_page_url: string | null;
   total: number;
};
