import create from "zustand";

export const timingStore = create((set) => ({
  step1Done: false,

  setStep1Done: (bool) => set(() => ({ step1Done: bool })),
}));
