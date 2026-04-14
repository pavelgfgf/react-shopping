import { v4 as uuidv4 } from 'uuid';

export const CATEGORIES = [
  { id: 'all', name: 'Все', icon: '📋' },
  { id: 'vegetables', name: 'Овощи и фрукты', icon: '🥬' },
  { id: 'dairy', name: 'Молочные продукты', icon: '🥛' },
  { id: 'meat', name: 'Мясо и рыба', icon: '🥩' },
  { id: 'bakery', name: 'Выпечка и хлеб', icon: '🍞' },
  { id: 'drinks', name: 'Напитки', icon: '🧃' },
  { id: 'household', name: 'Хозтовары', icon: '🧹' },
  { id: 'other', name: 'Прочее', icon: '📦' }
];

export const MOCK_ITEMS = [
  {
    id: uuidv4(),
    name: 'Авокадо Хасс',
    category: 'vegetables',
    quantity: 2,
    unit: 'шт',
    price: 180,
    isPurchased: false,
    createdAt: new Date('2024-01-10').toISOString()
  },
  {
    id: uuidv4(),
    name: 'Лосось слабосолёный',
    category: 'meat',
    quantity: 300,
    unit: 'г',
    price: 850,
    isPurchased: false,
    createdAt: new Date('2024-01-11').toISOString()
  },
  {
    id: uuidv4(),
    name: 'Сыр Бри',
    category: 'dairy',
    quantity: 1,
    unit: 'уп',
    price: 420,
    isPurchased: true,
    createdAt: new Date('2024-01-09').toISOString()
  },
  {
    id: uuidv4(),
    name: 'Чиабатта',
    category: 'bakery',
    quantity: 1,
    unit: 'шт',
    price: 95,
    isPurchased: false,
    createdAt: new Date('2024-01-12').toISOString()
  },
  {
    id: uuidv4(),
    name: 'Черника',
    category: 'vegetables',
    quantity: 250,
    unit: 'г',
    price: 320,
    isPurchased: false,
    createdAt: new Date('2024-01-08').toISOString()
  },
  {
    id: uuidv4(),
    name: 'Стейк Рибай',
    category: 'meat',
    quantity: 2,
    unit: 'шт',
    price: 1200,
    isPurchased: false,
    createdAt: new Date('2024-01-07').toISOString()
  },
  {
    id: uuidv4(),
    name: 'Трюфельное масло',
    category: 'other',
    quantity: 1,
    unit: 'бут',
    price: 650,
    isPurchased: false,
    createdAt: new Date('2024-01-05').toISOString()
  },
  {
    id: uuidv4(),
    name: 'Вино красное сухое',
    category: 'drinks',
    quantity: 1,
    unit: 'бут',
    price: 890,
    isPurchased: false,
    createdAt: new Date('2024-01-06').toISOString()
  },
  {
    id: uuidv4(),
    name: 'Паста феттучини',
    category: 'other',
    quantity: 1,
    unit: 'уп',
    price: 150,
    isPurchased: true,
    createdAt: new Date('2024-01-04').toISOString()
  },
  {
    id: uuidv4(),
    name: 'Базилик свежий',
    category: 'vegetables',
    quantity: 1,
    unit: 'пуч',
    price: 60,
    isPurchased: false,
    createdAt: new Date('2024-01-12').toISOString()
  },
  {
    id: uuidv4(),
    name: 'Чеснок конфи',
    category: 'other',
    quantity: 1,
    unit: 'бан',
    price: 230,
    isPurchased: false,
    createdAt: new Date('2024-01-03').toISOString()
  },
  {
    id: uuidv4(),
    name: 'Лимоны',
    category: 'vegetables',
    quantity: 3,
    unit: 'шт',
    price: 45,
    isPurchased: false,
    createdAt: new Date('2024-01-12').toISOString()
  },
  {
    id: uuidv4(),
    name: 'Молоко 3.2%',
    category: 'dairy',
    quantity: 1,
    unit: 'л',
    price: 95,
    isPurchased: false,
    createdAt: new Date('2024-01-11').toISOString()
  },
  {
    id: uuidv4(),
    name: 'Яйца С0',
    category: 'dairy',
    quantity: 10,
    unit: 'шт',
    price: 120,
    isPurchased: false,
    createdAt: new Date('2024-01-10').toISOString()
  },
  {
    id: uuidv4(),
    name: 'Стиральный порошок',
    category: 'household',
    quantity: 1,
    unit: 'уп',
    price: 450,
    isPurchased: false,
    createdAt: new Date('2024-01-02').toISOString()
  }
];