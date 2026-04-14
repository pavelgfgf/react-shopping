import React from 'react';
import { CATEGORIES } from '../data/mockData';

function FilterTabs({ 
  selectedCategory, 
  onSelectCategory, 
  sortBy, 
  onSortChange,
  showPurchased,
  onTogglePurchased 
}) {
  return (
    <div className="filter-tabs">
      <div className="category-tabs">
        {CATEGORIES.map(category => (
          <button
            key={category.id}
            className={`category-tab ${selectedCategory === category.id ? 'active' : ''}`}
            onClick={() => onSelectCategory(category.id)}
          >
            <span>{category.icon}</span>
            <span>{category.name}</span>
          </button>
        ))}
      </div>

      <div className="filter-controls">
        <select 
          className="sort-select"
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
        >
          <option value="date">📅 По дате (новые)</option>
          <option value="name">🔤 По названию</option>
          <option value="price">💰 По цене (дорогие)</option>
          <option value="category">📂 По категории</option>
          <option value="purchased">✅ По статусу</option>
        </select>

        <label className="show-purchased-label">
          <input
            type="checkbox"
            checked={showPurchased}
            onChange={(e) => onTogglePurchased(e.target.checked)}
          />
          <span>Показывать купленные</span>
        </label>
      </div>
    </div>
  );
}

export default FilterTabs;