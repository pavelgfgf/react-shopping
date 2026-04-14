import React from 'react';
import ShoppingItem from './ShoppingItem';

function ShoppingList({ items, onDelete }) {
  if (items.length === 0) {
    return <div className="empty-list">✨ Список пуст. Добавьте товар.</div>;
  }

  return (
    <ul className="shopping-list">
      {items.map((item) => (
        <ShoppingItem key={item.id} item={item} onDelete={onDelete} />
      ))}
    </ul>
  );
}

export default ShoppingList;