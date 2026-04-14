import { useMemo, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { MOCK_ITEMS } from '../data/mockData';
import { useLocalStorage } from './useLocalStorage';

export function useShoppingList() {
  const [items, setItems] = useLocalStorage('shoppingList', MOCK_ITEMS);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('date');
  const [showPurchased, setShowPurchased] = useState(true);
  const [editingItem, setEditingItem] = useState(null);

  const addItem = (itemData) => {
    const newItem = {
      id: uuidv4(),
      ...itemData,
      createdAt: new Date().toISOString()
    };
    setItems([...items, newItem]);
  };

  const updateItem = (id, updates) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, ...updates } : item
    ));
  };

  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const togglePurchased = (id) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, isPurchased: !item.isPurchased } : item
    ));
  };

  const clearAll = () => {
    setItems([]);
  };

  const clearPurchased = () => {
    setItems(items.filter(item => !item.isPurchased));
  };

  const resetToMock = () => {
    setItems(MOCK_ITEMS);
  };

  const filteredAndSortedItems = useMemo(() => {
    let result = [...items];

    // Фильтрация по поиску
    if (searchQuery) {
      result = result.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Фильтрация по категории
    if (selectedCategory !== 'all') {
      result = result.filter(item => item.category === selectedCategory);
    }

    // Фильтрация купленных
    if (!showPurchased) {
      result = result.filter(item => !item.isPurchased);
    }

    // Сортировка
    result.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'price':
          return b.price - a.price;
        case 'category':
          return a.category.localeCompare(b.category);
        case 'purchased':
          return a.isPurchased - b.isPurchased;
        case 'date':
        default:
          return new Date(b.createdAt) - new Date(a.createdAt);
      }
    });

    return result;
  }, [items, searchQuery, selectedCategory, sortBy, showPurchased]);

  const statistics = useMemo(() => {
    const total = items.length;
    const purchased = items.filter(item => item.isPurchased).length;
    const totalPrice = items.reduce((sum, item) => {
      return sum + (item.price * item.quantity);
    }, 0);
    const purchasedPrice = items
      .filter(item => item.isPurchased)
      .reduce((sum, item) => sum + (item.price * item.quantity), 0);

    return {
      total,
      purchased,
      remaining: total - purchased,
      totalPrice,
      purchasedPrice,
      remainingPrice: totalPrice - purchasedPrice
    };
  }, [items]);

  return {
    items: filteredAndSortedItems,
    allItems: items,
    statistics,
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    sortBy,
    setSortBy,
    showPurchased,
    setShowPurchased,
    editingItem,
    setEditingItem,
    addItem,
    updateItem,
    deleteItem,
    togglePurchased,
    clearAll,
    clearPurchased,
    resetToMock
  };
}