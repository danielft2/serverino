import { ItemSelect } from '@domain/types';
import { severinoStorage } from '@lib/mmkv';
import { DISCOVERY_KEY } from './storage.config';

export function setAreaSelected(areSelected: ItemSelect) {
   severinoStorage.set(DISCOVERY_KEY, JSON.stringify(areSelected));
}

export function getAreaSelected() {
   const res = severinoStorage.getString(DISCOVERY_KEY);
   return JSON.parse(res).value;
}

export function clearAreaSelected() {
   severinoStorage.delete(DISCOVERY_KEY);
}

export const DiscoveryStorage = {
   setAreaSelected,
   getAreaSelected,
   clearAreaSelected
};
