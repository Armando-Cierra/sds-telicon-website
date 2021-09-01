import create from 'zustand';

export type Pages = 'Home' | 'IconList' | 'Error';

type useActivePageTypes = {
  activePage: Pages;
  setActivePage: (page: Pages) => void;
};

const useActivePage = create<useActivePageTypes>((set) => ({
  activePage: 'Home',
  setActivePage: (activePage: Pages) => set({ activePage })
}));

export default useActivePage;
