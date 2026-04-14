import { formatPrice } from '../utils/declension';
import { getDeclension } from '../utils/declension';

function ListHeader({ statistics }) {
  const { total, purchased, remaining, totalPrice, purchasedPrice, remainingPrice } = statistics;

  return (
    <div className="app-header">
      <div className="header-top">
        <div className="app-title">
          <span className="title-icon">🛒</span>
          <h1>Список покупок</h1>
        </div>
        <div className="stats-badge">
          {total} {getDeclension(total, ['товар', 'товара', 'товаров'])}
        </div>
      </div>

      <div className="stat-cards">
        <div className="stat-card">
          <div className="stat-label">Всего</div>
          <div className="stat-value">{formatPrice(totalPrice)}</div>
        </div>
        <div className="stat-card purchased">
          <div className="stat-label">Куплено</div>
          <div className="stat-value">{formatPrice(purchasedPrice)}</div>
          <div style={{ fontSize: '12px', color: '#64748b', marginTop: '4px' }}>
            {purchased} {getDeclension(purchased, ['товар', 'товара', 'товаров'])}
          </div>
        </div>
        <div className="stat-card remaining">
          <div className="stat-label">Осталось</div>
          <div className="stat-value">{formatPrice(remainingPrice)}</div>
          <div style={{ fontSize: '12px', color: '#64748b', marginTop: '4px' }}>
            {remaining} {getDeclension(remaining, ['товар', 'товара', 'товаров'])}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListHeader;