import create from "zustand";

import { roundNumber } from "../lib/helperfunctions";

export const scrollStore = create((set) => ({
  sf1: 0,
  sf2: 0,

  setSf1: (offsetRange1) => set(() => ({ sf1: roundNumber(offsetRange1) })),
  setSf2: (offsetRange2) => set(() => ({ sf2: roundNumber(offsetRange2) })),
}));
