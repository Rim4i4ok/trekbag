import { create } from "zustand";
import { initialItems } from "../lib/constants";

export const useItemsStore = create((set) => ({
  items: initialItems,
  addItem: (newItemText) => {
    set((state) => {
      const newItem = {
        id: new Date().getTime(),
        name: newItemText,
        package: false,
      };

      return { items: [...state.items, newItem] };
    });
  },
  deleteItem: (id) => {
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    }));
  },
  toggleItem: (id) => {
    set((state) => ({
      items: state.items.map((item) => {
        if (item.id === id) {
          return { ...item, package: !item.package };
        }

        return item;
      }),
    }));
  },
  removeAllItems: () => {
    set(() => ({ items: [] }));
  },
  resetToInitial: () => {
    set(() => ({ items: initialItems }));
  },
  markAllAsComplete: () => {
    set((state) => ({
      items: state.items.map((item) => ({ ...item, package: true })),
    }));
  },
  markAllAsUnComplete: () => {
    set((state) => ({
      items: state.items.map((item) => ({ ...item, package: false })),
    }));
  },
}));
