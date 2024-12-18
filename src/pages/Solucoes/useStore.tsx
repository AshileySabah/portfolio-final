import { create } from "zustand";

type Props = {
  activeCarousel: boolean;
  setActiveCarousel: (data: boolean) => void;
};

export const useStore = create<Props>((set) => ({
  activeCarousel: true,
  setActiveCarousel: (newState) => set(() => ({ activeCarousel: newState })),
}));
