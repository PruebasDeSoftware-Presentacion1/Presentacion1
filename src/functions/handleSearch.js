export function handleSearch(searchTerm, items) {
  const newFilteredItems = searchTerm.trim() === '' ? items : items.filter((item) =>
    item[1].toLowerCase().includes(searchTerm.toLowerCase())
  );
  return newFilteredItems;
}

  
//   const items = [
//     {
//       title: 'Manzana',
//       description: 'Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
//     },
//     {
//       title: 'Banana',
//       description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
//     },]  

// console.log(handleSearch('Banana', items))






// Prueba lista