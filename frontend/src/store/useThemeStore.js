import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("Chatzip-theme") || "coffee",
  setTheme: (theme) => {
    localStorage.setItem("Chatzip-theme", theme);
    set({ theme });
  },
}));
