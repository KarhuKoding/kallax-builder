import create from "zustand";

const roundNumber = (number) => {
  return Math.floor(number * 100) / 100;
};

export const scrollStore = create((set) => ({
  rotation: 0,
  setRoation: (rotation) => set(() => ({ rotation: roundNumber(rotation) })),
}));
