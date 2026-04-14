export const getDeclension = (number, titles) => {
  const cases = [2, 0, 1, 1, 1, 2];
  const index = (number % 100 > 4 && number % 100 < 20)
    ? 2
    : cases[(number % 10 < 5) ? number % 10 : 5];
  return titles[index];
};

export const formatPrice = (price) => {
  return new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    minimumFractionDigits: 0
  }).format(price);
};

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  const now = new Date();
  const diffTime = now - date;
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return 'Сегодня';
  if (diffDays === 1) return 'Вчера';
  if (diffDays < 7) return `${diffDays} ${getDeclension(diffDays, ['день', 'дня', 'дней'])} назад`;
  
  return date.toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'short'
  });
};