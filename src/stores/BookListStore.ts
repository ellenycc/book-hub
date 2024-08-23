import { create } from "zustand";
import { Book } from "../assets/entities/Book";
import { persist } from "zustand/middleware";

interface BookList {
  savedBooks: Book[];
  addBook: (book: Book) => void;
  removeBook: (bookId: string) => void;
  clearBooks: () => void;
}

const useBookListStore = create<BookList>()(
  persist(
    (set) => ({
      savedBooks: [],
      addBook: (book) =>
        set((store) => ({ savedBooks: [...store.savedBooks, book] })),
      removeBook: (bookId) =>
        set((store) => ({
          savedBooks: store.savedBooks.filter((book) => book.id !== bookId),
        })),
      clearBooks: () => set({ savedBooks: [] }),
    }),
    {
      name: "saved-books",
    }
  )
);

export default useBookListStore;
