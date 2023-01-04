import create from "zustand";

const useStore = create((set) => ({
    visibleVideo: false,
    toggleVideo: () => set((state) => ({ visibleVideo: !state.visibleVideo })),
}));
export default useStore;
