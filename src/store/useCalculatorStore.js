import { create } from "zustand";

export const useCalculatorStore = create((set) => ({
  components: [],
  expression: "",
  darkMode: false,

  addComponent: (component) => set((state) => ({ components: [...state.components, component] })),
  setExpression: (exp) => set((state) => ({ expression: state.expression + exp })),
setDarkMode: (mode) => set((state) => ({ darkMode: mode })),
  calculateResult: () => set((state) => ({ expression: eval(state.expression).toString() })),
  toggleTheme: () => set((state) => {
    document.documentElement.classList.toggle("dark", !state.darkMode);
    return { darkMode: !state.darkMode };
  }),
}));
