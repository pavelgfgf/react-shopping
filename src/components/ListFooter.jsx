import React from 'react';
import { formatPrice } from '../utils/declension';
import { getDeclension } from '../utils/declension';

function ListFooter({ 
  statistics, 
  onClearAll, 
  onClearPurchased, 
  onResetToMock, 
  onAddItem 
}) {
  const { total, purchased, totalPrice } = statistics;

  return (
    <div className="app-footer">
      <div className="footer-stats">
        <div className="footer-stat">
          <div style={{ fontSize: '13px', color: '#64748b' }}>Всего товаров</div>
          <div style={{ fontSize: '18px', fontWeight: '700', color: '#1e1e2f' }}>
            {total} {getDeclension(total, ['позиция', 'позиции', 'позиций'])}
          </div>
        </div>
        <div className="footer-stat">
          <div style={{ fontSize: '13px', color: '#64748b' }}>Общая сумма</div>
          <div style={{ fontSize: '18px', fontWeight: '700', color: '#667eea' }}>
            {formatPrice(totalPrice)}
          </div>
        </div>
        <div className="footer-stat">
          <div style={{ fontSize: '13px', color: '#64748b' }}>Куплено</div>
          <div style={{ fontSize: '18px', fontWeight: '700', color: '#10b981' }}>
            {purchased}
          </div>
        </div>
      </div>

      <div className="footer-actions">
        <button className="footer-btn btn-primary" onClick={onAddItem}>
          ➕ Добавить товар
        </button>
        {purchased > 0 && (
          <button className="footer-btn btn-secondary" onClick={onClearPurchased}>
            ✅ Очистить купленные
          </button>
        )}
        <button className="footer-btn btn-secondary" onClick={onResetToMock}>
          🔄 Сбросить к примеру
        </button>
        {total > 0 && (
          <button className="footer-btn btn-danger" onClick={onClearAll}>
            🗑️ Очистить всё
          </button>
        )}
      </div>
    </div>
  );
}

export default ListFooter;