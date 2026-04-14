import React from 'react';

function EmptyState() {
  return (
    <div className="empty-state">
      <div className="empty-icon">🛒</div>
      <h3>Список пуст</h3>
      <p>Добавьте товары, чтобы начать покупки</p>
    </div>
  );
}

export default EmptyState;