import create from "zustand";

export const scrollStore = create((set) => ({
  // TODO merge Store to one Object
  state: {
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
  },

  setState: (state) => set(() => ({ state })),
}));

export const timingStore = create((set) => ({
  step1Done: false,

  setStep1Done: (bool) => set(() => ({ step1Done: bool })),
}));
