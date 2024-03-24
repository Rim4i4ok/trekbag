import { create } from "zustand";
import { persist } from "zustand/middleware";
import { initialItems } from "../lib/constants";

export const useItemsStore = create(
  persist(
    (set) => ({
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
              return { ...item, packed: !item.packed };
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
          items: state.items.map((item) => ({ ...item, packed: true })),
        }));
      },
      markAllAsUnComplete: () => {
        set((state) => ({
          items: state.items.map((item) => ({ ...item, packed: false })),
        }));
      },
    }),
    {
      name: "items-storage",
    }
  )
);
