function handleSearch(searchTerm, items) {
  const newFilteredItems = searchTerm.trim() === '' ? items : items.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return newFilteredItems;
}

module.exports = { handleSearch };