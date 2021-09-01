import create from 'zustand';

export type Themes = 'Auto' | 'Default' | 'Dark';

type useThemeTypes = {
  theme: Themes;
  setTheme: (theme: Themes) => void;
};

const useTheme = create<useThemeTypes>((set) => ({
  theme: 'Auto',
  setTheme: (theme: Themes) => set({ theme })
}));

export default useTheme;
