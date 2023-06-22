import React, { useState, useEffect } from 'react';
import { IconButton } from '@mui/material';
import { AddCircle, CheckCircle } from '@mui/icons-material';

type Item = {
  id: number;
  name: string;
  price: number;
  image: string;
  availability: boolean;
  ingredients: string;
  count: number;
  category_id: number;
};

type AddToCartButtonProps = {
  item: Item;
};

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ item }) => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    const storedItems: Item[] = JSON.parse(localStorage.getItem('items') || '[]');
    const foundItem = storedItems.find(storedItem => storedItem.id === item.id);
    if (foundItem) {
      setIsChecked(true);
    }
  }, []);

  const handleAddToCart = () => {
    const storedItems: Item[] = JSON.parse(localStorage.getItem('items') || '[]');
    const foundItem = storedItems.find(storedItem => storedItem.id === item.id);

    if (foundItem) {
      foundItem.count = 1; // Update the count to 1
    } else {
      const newItem: Item = { ...item, count: 1 }; // Create a new object with count set to 1
      storedItems.push(newItem);
    }

    localStorage.setItem('items', JSON.stringify(storedItems));
    setIsChecked(true);
  };

  return (
    <div>
      <IconButton onClick={handleAddToCart} color="success" disabled={isChecked}>
        {isChecked ? <CheckCircle /> : <AddCircle />}
      </IconButton>
    </div>
  );
};

export default AddToCartButton;
