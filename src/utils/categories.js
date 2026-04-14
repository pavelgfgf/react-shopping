import { CATEGORIES } from '../data/mockData';

export const getCategoryById = (categoryId) => {
  return CATEGORIES.find(cat => cat.id === categoryId) || CATEGORIES[CATEGORIES.length - 1];
};

export const getCategoryIcon = (categoryId) => {
  const category = getCategoryById(categoryId);
  return category.icon;
};

export const getCategoryName = (categoryId) => {
  const category = getCategoryById(categoryId);
  return category.name;
};