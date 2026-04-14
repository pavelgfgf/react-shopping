import React from 'react';
import { CATEGORIES } from '../data/mockData';

function CategorySelect({ value, onChange }) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={{
        width: '100%',
        padding: '12px 16px',
        border: '2px solid #e2e8f0',
        borderRadius: '14px',
        fontSize: '16px',
        outline: 'none',
        cursor: 'pointer'
      }}
    >
      {CATEGORIES.filter(c => c.id !== 'all').map(cat => (
        <option key={cat.id} value={cat.id}>
          {cat.icon} {cat.name}
        </option>
      ))}
    </select>
  );
}

export default CategorySelect;