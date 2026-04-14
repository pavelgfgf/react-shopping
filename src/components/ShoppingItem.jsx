import React from 'react';
import { formatPrice, formatDate } from '../utils/declension';
import { getCategoryIcon } from '../utils/categories';

function ShoppingItem({ item, onTogglePurchased, onDelete, onEdit }) {
  const handleCheckboxClick = (e) => {
    e.stopPropagation();
    onTogglePurchased(item.id);
  };

  const handleEdit = (e) => {
    e.stopPropagation();
    onEdit(item);
  };

  const handleDelete = (e) => {
    e.stopPropagation();
    if (window.confirm(`Удалить "${item.name}" из списка?`)) {
      onDelete(item.id);
    }
  };

  return (
    <div 
      className={`list-item ${item.isPurchased ? 'purchased' : ''}`}
      onClick={() => onTogglePurchased(item.id)}
    >
      <input
        type="checkbox"
        className="item-checkbox"
        checked={item.isPurchased}
        onChange={handleCheckboxClick}
        onClick={(e) => e.stopPropagation()}
      />
      
      <div className="item-content">
        <div className="item-info">
          <span className="item-name">{item.name}</span>
          <div className="item-meta">
            <span className="item-category">
              {getCategoryIcon(item.category)} {item.category === 'other' ? 'Прочее' : ''}
            </span>
            <span className="item-quantity">
              {item.quantity} {item.unit}
            </span>
            <span className="item-price">
              {formatPrice(item.price * item.quantity)}
            </span>
            <span style={{ color: '#94a3b8' }}>
              {formatDate(item.createdAt)}
            </span>
          </div>
        </div>
        
        <div className="item-actions">
          <button onClick={handleEdit} title="Редактировать">
            ✏️
          </button>
          <button className="delete-btn" onClick={handleDelete} title="Удалить">
            🗑️
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShoppingItem;