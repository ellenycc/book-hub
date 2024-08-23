import { create } from "zustand";

export interface BookQuery {
  searchText?: string;
  sortOrder?: string;
  id?: string;
}

interface BookQueryStore {
  bookQuery: BookQuery;
  setSearchText: (searchText: string) => void;
  setSortOrder: (sortOrder: string) => void;
  setId: (id: string) => void;
}

const useBookQueryStore = create<BookQueryStore>()((set) => ({
  bookQuery: {},
  setSearchText: (searchText) => set(() => ({ bookQuery: { searchText } })), // only set the searchText and clear other filter
  setSortOrder: (sortOrder) =>
    set((store) => ({ bookQuery: { ...store.bookQuery, sortOrder } })), // copy all the properties of bookQuery, and change the sortOrder
  setId: (id) => set((store) => ({ bookQuery: { ...store.bookQuery, id } })),
}));

export default useBookQueryStore;
