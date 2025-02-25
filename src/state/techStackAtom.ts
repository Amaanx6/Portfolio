import { atom } from "recoil";

export interface TechStackItem {
  name: string;
  logo?: string; // Optional logo property
}

export const techStackState = atom<TechStackItem[]>({
  key: "techStackState",
  default: [], // Ensures TypeScript knows this is an array of TechStackItem
});
