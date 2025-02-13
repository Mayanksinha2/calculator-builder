import { create } from "zustand";

export const useCalculatorStore = create((set) => ({
  components: [],
  expression: "",
  darkMode: false,

  addComponent: (component) => set((state) => ({ components: [...state.components, component] })),
  setExpression: (exp) => set((state) => ({ expression: state.expression + exp })),

  undo: () =>
        set((state) => {
          if (state.history.length === 0) return state;
          const previous = state.history[state.history.length - 1];
          return {
            components: previous,
            history: state.history.slice(0, -1),
            future: [state.components, ...state.future],
          };
        }),
    
      redo: () =>
        set((state) => {
          if (state.future.length === 0) return state;
          const next = state.future[0];
          return {
            components: next,
            history: [...state.history, state.components],
            future: state.future.slice(1),
          };
        }),

setDarkMode: (mode) => set((state) => ({ darkMode: mode })),
  calculateResult: () => set((state) => ({ expression: eval(state.expression).toString() })),
  toggleTheme: () => set((state) => {
    document.documentElement.classList.toggle("dark", !state.darkMode);
    return { darkMode: !state.darkMode };
  }),
}));

// import { create } from "zustand";

// export const useCalculatorStore = create((set) => ({
//   components: [],
//   history: [], // Stores previous states for undo
//   future: [], // Stores undone states for redo
//   expression: "",
//   darkMode: false,

//   addComponent: (component) =>
//     set((state) => ({
//       history: [...state.history, state.components], // Save current state before change
//       components: [...state.components, component],
//       future: [], // Reset redo history
//     })),

//   removeComponent: (index) =>
//     set((state) => ({
//       history: [...state.history, state.components], // Save current state
//       components: state.components.filter((_, i) => i !== index),
//       future: [],
//     })),

//   setExpression: (exp) =>
//     set((state) => ({ expression: state.expression + exp })),

//   calculateResult: () =>
//     set((state) => ({
//       expression: eval(state.expression).toString(),
//     })),

//   undo: () =>
//     set((state) => {
//       if (state.history.length === 0) return state;
//       const previous = state.history[state.history.length - 1];
//       return {
//         components: previous,
//         history: state.history.slice(0, -1),
//         future: [state.components, ...state.future],
//       };
//     }),

//   redo: () =>
//     set((state) => {
//       if (state.future.length === 0) return state;
//       const next = state.future[0];
//       return {
//         components: next,
//         history: [...state.history, state.components],
//         future: state.future.slice(1),
//       };
//     }),

//   setDarkMode: (mode) =>
//     set((state) => {
//       document.documentElement.classList.toggle("dark", !state.darkMode);
//       return { darkMode: mode };
//     }),

//   toggleTheme: () =>
//     set((state) => {
//       document.documentElement.classList.toggle("dark", !state.darkMode);
//       return { darkMode: !state.darkMode };
//     }),
// }));

