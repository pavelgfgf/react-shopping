import React, { useState, useMemo } from 'react';
import { CATEGORIES } from '../data/mockData';

function EditItemModal({ item, onSave, onClose }) {
  const isNew = item?.isNew || false;
  
  // Инициализация состояния через useMemo вместо useEffect + setState
  const initialFormData = useMemo(() => {
    if (item && !item.isNew) {
      return {
        name: item.name || '',
        category: item.category || 'other',
        quantity: item.quantity || 1,
        unit: item.unit || 'шт',
        price: item.price || 0,
        isPurchased: item.isPurchased || false
      };
    }
    return {
      name: '',
      category: 'other',
      quantity: 1,
      unit: 'шт',
      price: 0,
      isPurchased: false
    };
  }, [item]);

  const [formData, setFormData] = useState(initialFormData);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      alert('Введите название товара');
      return;
    }
    onSave(formData);
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const units = ['шт', 'кг', 'г', 'л', 'мл', 'уп', 'бут', 'бан', 'пуч'];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2>{isNew ? '➕ Добавить товар' : '✏️ Редактировать товар'}</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Название товара</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
              placeholder="Например: Молоко"
              autoFocus
            />
          </div>

          <div className="form-group">
            <label>Категория</label>
            <select
              value={formData.category}
              onChange={(e) => handleChange('category', e.target.value)}
            >
              {CATEGORIES.filter(c => c.id !== 'all').map(cat => (
                <option key={cat.id} value={cat.id}>
                  {cat.icon} {cat.name}
                </option>
              ))}
            </select>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Количество</label>
              <input
                type="number"
                min="0.1"
                step="0.1"
                value={formData.quantity}
                onChange={(e) => handleChange('quantity', parseFloat(e.target.value) || 0)}
              />
            </div>
            <div className="form-group">
              <label>Ед. изм.</label>
              <select
                value={formData.unit}
                onChange={(e) => handleChange('unit', e.target.value)}
              >
                {units.map(u => (
                  <option key={u} value={u}>{u}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-group">
            <label>Цена за единицу (₽)</label>
            <input
              type="number"
              min="0"
              step="10"
              value={formData.price}
              onChange={(e) => handleChange('price', parseFloat(e.target.value) || 0)}
            />
          </div>

          {!isNew && (
            <div className="form-group">
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  checked={formData.isPurchased}
                  onChange={(e) => handleChange('isPurchased', e.target.checked)}
                  style={{ width: '20px', height: '20px' }}
                />
                Товар куплен
              </label>
            </div>
          )}

          <div className="modal-actions">
            <button type="submit" className="modal-btn save">
              {isNew ? 'Добавить' : 'Сохранить'}
            </button>
            <button type="button" className="modal-btn cancel" onClick={onClose}>
              Отмена
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditItemModal;