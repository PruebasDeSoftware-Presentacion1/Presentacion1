
fetch('http://127.0.0.1:8000/destroy_entrenamiento', {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ "id_detalle": 11 })
})
.then(response => {
  if (!response.ok) {
    throw new Error('Error al eliminar el recurso');
  }
  console.log('Recurso eliminado con éxito');
})
.catch(error => console.error(error));

