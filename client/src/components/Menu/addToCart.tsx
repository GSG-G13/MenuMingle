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
  categoryId: number;
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
  }, [item.id]);

  const handleAddToCart = () => {
    const storedItems: Item[] = JSON.parse(localStorage.getItem('items') || '[]');
    const updatedItems: Item[] = [...storedItems, item];
    localStorage.setItem('items', JSON.stringify(updatedItems));
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
