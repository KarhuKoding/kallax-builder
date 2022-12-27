import create from "zustand";

import { roundNumber } from "../lib/helperfunctions";

export const scrollStore = create((set) => ({
  // TODO merge Store to one Object
  sf1: 0,
  sf2: 0,
  sf3: 0,
  sf4: 0,
  sf5: 0,

  setSf1: (offsetRange1) => set(() => ({ sf1: roundNumber(offsetRange1) })),
  setSf2: (offsetRange2) => set(() => ({ sf2: roundNumber(offsetRange2) })),
  setSf3: (offsetRange3) => set(() => ({ sf3: roundNumber(offsetRange3) })),
  setSf4: (offsetRange4) => set(() => ({ sf4: roundNumber(offsetRange4) })),
  setSf5: (offsetRange5) => set(() => ({ sf5: roundNumber(offsetRange5) })),
}));

export const timingStore = create((set) => ({
  intro: false,

  setIntro: () => set(() => ({ intro: true })),
}));
