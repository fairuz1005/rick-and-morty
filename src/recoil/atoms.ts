import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export interface Character {
  id: string;
  name: string;
  image: string;
}

export const charactersState = atom<Character[]>({
  key: 'charactersState',
  default: [],
  effects: [persistAtom],
});

export const locationsState = atom<Record<string, Character[]>>({
  key: 'locationsState',
  default: {},
  effects: [persistAtom],
});
