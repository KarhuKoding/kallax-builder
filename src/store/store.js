import create from "zustand";

import { roundNumber } from "../lib/helperfunctions";

export const scrollStore = create((set) => ({
  // TODO merge Store to one Object
  sf1: 0,
  sf2: 0,
  sf3: 0,
  sf4: 0,
  sf5: 0,
  sf6: 0,
  sf7: 0,
  sf8: 0,
  sf9: 0,
  sf10: 0,
  sf11: 0,

  setSf1: (offsetRange1) => set(() => ({ sf1: roundNumber(offsetRange1) })),
  setSf2: (offsetRange2) => set(() => ({ sf2: roundNumber(offsetRange2) })),
  setSf3: (offsetRange3) => set(() => ({ sf3: roundNumber(offsetRange3) })),
  setSf4: (offsetRange4) => set(() => ({ sf4: roundNumber(offsetRange4) })),
  setSf5: (offsetRange5) => set(() => ({ sf5: roundNumber(offsetRange5) })),
  setSf6: (offsetRange6) => set(() => ({ sf6: roundNumber(offsetRange6) })),
  setSf7: (offsetRange7) => set(() => ({ sf7: roundNumber(offsetRange7) })),
  setSf8: (offsetRange8) => set(() => ({ sf8: roundNumber(offsetRange8) })),
  setSf9: (offsetRange9) => set(() => ({ sf9: roundNumber(offsetRange9) })),
  setSf10: (offsetRange10) => set(() => ({ sf10: roundNumber(offsetRange10) })),
  setSf11: (offsetRange11) => set(() => ({ sf11: roundNumber(offsetRange11) })),
}));

export const timingStore = create((set) => ({
  step1Done: false,

  setStep1Done: (bool) => set(() => ({ step1Done: bool })),
}));
