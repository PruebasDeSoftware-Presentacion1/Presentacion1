function handleSearch(searchTerm, items) {
  const newFilteredItems = searchTerm.trim() === '' ? items : items.filter((item) =>
      item[1].toLowerCase().includes(searchTerm.toLowerCase())
  );
  return newFilteredItems;
}

module.exports = { handleSearch };