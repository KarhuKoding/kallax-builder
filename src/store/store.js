import create from "zustand";

const roundNumber = (number) => {
  return Math.floor(number * 100) / 100;
};

export const scrollStore = create((set) => ({
  scrollFactor: 0,
  setScrollFactor: (offset) =>
    set(() => ({ scrollFactor: roundNumber(offset) })),
}));
