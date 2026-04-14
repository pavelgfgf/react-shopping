import './App.css';
import EditItemModal from './components/EditItemModal';
import FilterTabs from './components/FilterTabs';
import ListFooter from './components/ListFooter';
import ListHeader from './components/ListHeader';
import SearchBar from './components/SearchBar';
import ShoppingList from './components/ShoppingList';
import { useShoppingList } from './hooks/useShoppingList';

function App() {
  const {
    items,
    allItems,
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
  } = useShoppingList();

  return (
    <div className="app">
      <ListHeader 
        statistics={statistics}
        totalItems={allItems.length}
      />

      <SearchBar 
        value={searchQuery}
        onChange={setSearchQuery}
      />

      <FilterTabs
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        sortBy={sortBy}
        onSortChange={setSortBy}
        showPurchased={showPurchased}
        onTogglePurchased={setShowPurchased}
      />

      <ShoppingList
        items={items}
        onTogglePurchased={togglePurchased}
        onDelete={deleteItem}
        onEdit={setEditingItem}
      />

      <ListFooter
        statistics={statistics}
        onClearAll={clearAll}
        onClearPurchased={clearPurchased}
        onResetToMock={resetToMock}
        onAddItem={() => setEditingItem({ isNew: true })}
      />

      {editingItem && (
        <EditItemModal
          item={editingItem}
          onSave={(itemData) => {
            if (editingItem.isNew) {
              addItem(itemData);
            } else {
              updateItem(editingItem.id, itemData);
            }
            setEditingItem(null);
          }}
          onClose={() => setEditingItem(null)}
        />
      )}
    </div>
  );
}

export default App;