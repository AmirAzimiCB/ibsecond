import create from "zustand"

const useStore = create((set) => ({
    showDrawer: false,
    toggleDrawer: () => set((state) => ({ showDrawer: !state.showDrawer })),
    hideDrawer: () => set({ showDrawer: false }),
    visibleVideo: false,
    toggleVideo: () => set((state) => ({ visibleVideo: !state.visibleVideo })),
    blogCategory: "",
    setBlogCategory: (category) => set((state) => ({ blogCategory: category }))
}))

export default useStore;
