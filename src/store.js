import { create } from "zustand";

const useStore = create((set) => ({
  components: JSON.parse(localStorage.getItem("layout")) || [],

  addComponent: (component) =>
    set((state) => {
      const updatedComponents = [...state.components, component];
      localStorage.setItem("layout", JSON.stringify(updatedComponents));
      return { components: updatedComponents };
    }),

  removeComponent: (id) =>
    set((state) => {
      const updatedComponents = state.components.filter((comp) => comp.id !== id);
      localStorage.setItem("layout", JSON.stringify(updatedComponents));
      return { components: updatedComponents };
    }),

  resetLayout: () =>
    set(() => {
      localStorage.removeItem("layout");
      return { components: [] };
    }),

  darkMode: localStorage.getItem("darkMode") === "true",
  toggleDarkMode: () =>
    set((state) => {
      const newMode = !state.darkMode;
      localStorage.setItem("darkMode", newMode);
      return { darkMode: newMode };
    }),
}));

export default useStore;
