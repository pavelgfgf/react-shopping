import React, { useState, useRef, useEffect } from 'react';
import CategorySelect from './CategorySelect';

function AddItemForm({ onAdd }) {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('other');
  const [quantity, setQuantity] = useState(1);
  const [unit, setUnit] = useState('шт');
  const [price, setPrice] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [isExpanded]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      alert('Введите название товара');
      return;
    }
    
    onAdd({
      name: name.trim(),
      category,
      quantity,
      unit,
      price
    });
    
    // Сброс формы
    setName('');
    setCategory('other');
    setQuantity(1);
    setUnit('шт');
    setPrice(0);
    setIsExpanded(false);
  };

  const units = ['шт', 'кг', 'г', 'л', 'мл', 'уп', 'бут', 'бан', 'пуч'];

  if (!isExpanded) {
    return (
      <div style={{ padding: '16px 24px' }}>
        <button
          className="footer-btn btn-primary"
          style={{ width: '100%' }}
          onClick={() => setIsExpanded(true)}
        >
          ➕ Добавить товар
        </button>
      </div>
    );
  }

  return (
    <div style={{ padding: '16px 24px', background: '#fafbfc', borderTop: '1px solid #e2e8f0' }}>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            ref={inputRef}
            type="text"
            placeholder="Название товара"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{
              width: '100%',
              padding: '14px 16px',
              border: '2px solid #e2e8f0',
              borderRadius: '14px',
              fontSize: '16px',
              outline: 'none'
            }}
          />
        </div>

        <div className="form-group">
          <CategorySelect value={category} onChange={setCategory} />
        </div>

        <div className="form-row">
          <div className="form-group">
            <input
              type="number"
              min="0.1"
              step="0.1"
              value={quantity}
              onChange={(e) => setQuantity(parseFloat(e.target.value) || 0)}
              placeholder="Кол-во"
              style={{
                width: '100%',
                padding: '14px 16px',
                border: '2px solid #e2e8f0',
                borderRadius: '14px',
                fontSize: '16px'
              }}
            />
          </div>
          <div className="form-group">
            <select
              value={unit}
              onChange={(e) => setUnit(e.target.value)}
              style={{
                width: '100%',
                padding: '14px 16px',
                border: '2px solid #e2e8f0',
                borderRadius: '14px',
                fontSize: '16px'
              }}
            >
              {units.map(u => (
                <option key={u} value={u}>{u}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="form-group">
          <input
            type="number"
            min="0"
            step="10"
            value={price}
            onChange={(e) => setPrice(parseFloat(e.target.value) || 0)}
            placeholder="Цена (₽)"
            style={{
              width: '100%',
              padding: '14px 16px',
              border: '2px solid #e2e8f0',
              borderRadius: '14px',
              fontSize: '16px'
            }}
          />
        </div>

        <div style={{ display: 'flex', gap: '12px' }}>
          <button type="submit" className="footer-btn btn-primary">
            Добавить
          </button>
          <button 
            type="button" 
            className="footer-btn btn-secondary"
            onClick={() => setIsExpanded(false)}
          >
            Отмена
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddItemForm;