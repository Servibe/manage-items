import { useState } from "react";
import { Item } from "../App";

export const useItems = () => {
  // Create a state variable to store the items array
  const [items, setItems] = useState<Item[]>([]);

  // Create a function to add items to the items array
  const addItems = (text: string) => {
    // Create a new item object
    const newItem: Item = {
      id: crypto.randomUUID(),
      timestamp: Date.now(),
      text,
    };

    // Add the new item to the items array
    setItems((prevItems) => {
      return [...prevItems, newItem];
    });
  };

  // Create a function to remove an item from the items array
  const removeItem = (id: string) => {
    // Remove the item with the specified id from the items array
    setItems((prevItems) => {
      // Filter the items array to remove the item with the specified id
      return prevItems.filter((currentItem) => currentItem.id !== id);
    });
  };

  // Return the items array and the addItems and removeItem functions
  return {
    items,
    addItems,
    removeItem,
  };
};
