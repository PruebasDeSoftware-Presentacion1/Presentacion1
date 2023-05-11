//--------------------------------------------------
// Se importan todas las funciones que serán utilizadas en Jasmine

const { handleSearch } = require("../functions/handleSearch");

//--------------------------------------------------
//Se almacenan todas las listas y variables externas a utilizar para poder evaluar las condiciones

const items = [
    {
      title: 'Manzana',
      description: 'Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      title: 'Banana',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      title: 'Naranja',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
  ];

//--------------------------------------------------
//A continuación en cada describe() se presentan los casos de uso, y en it() cada prueba para los casos respectivos
//--------------------------------------------------

//Caso de uso 1: Listar planes de entrenamientos personalizados disponibles en el sistema.


//--------------------------------------------------
//Caso de uso 2: Realizar búsqueda de un ejercicio en particular de la base de datos de ejercicios disponibles en el gimnasio.

describe("Función handleSearch (búsqueda de ejercicio)", function() {

    //Prueba 2.1: Encontrar varios elementos que cumplen la busqueda
    it('debería retornar una lista que incluya todos los elementos encontrados que contengan el string usado', function() {
        const searchTerm = 'na';
        const filteredItems = handleSearch(searchTerm, items);
        // let found = false;
        let array = []

        for (let i = 0; i < filteredItems.length; i++) {
            if (filteredItems[i].title.includes(searchTerm)) {
                array.push(filteredItems[i]);
            }
        }

        // Función que verifica si todos los elementos de un arreglo están contenidos en otro arreglo, la cual es diferente a la utilizada
        function arrayContainsArray(superset, subset) {
            return subset.every(function(subsetItem) {
                return superset.some(function(supersetItem) {
                    return JSON.stringify(supersetItem) === JSON.stringify(subsetItem);
                });
            });
        }

         // Verifica si todos los elementos contenidos en `array` están contenidos en `items`
         const arrayInItems = arrayContainsArray(items, array);
         
         expect(arrayInItems).toBe(true);
    });

    //Prueba 2.2: Encontrar un elemento en específico que existe
    it('debería retornar un solo elemento que coincida con la palabra ingresada', function() {
        const searchTerm = 'Banana';
        const filteredItems = handleSearch(searchTerm, items);
        let found = false;

        for (let i = 0; i < filteredItems.length; i++) {
            if (filteredItems[i].title === searchTerm) {
                found = true;
                break;
            }
        }
        
        expect(found).toBe(true);
    });
    
    //Prueba 2.3: Buscar un elemento que no existe
    it('debería retornar un arreglo vacío, el cual indique que no se encontraron palabras que coincidan', function() {
        const searchTerm = 'zr';
        const filteredItems = handleSearch(searchTerm, items);
        let found = true;

        for (let i = 0; i < filteredItems.length; i++) {
            if (filteredItems[i].title.includes(searchTerm)) {
                found = false;
                break;
            }
        }
        
        expect(found).toBe(true);
    });
});

//--------------------------------------------------
//Caso de uso 3: Visualizar un plan de entrenamiento personalizado del sistema con todos sus ejercicios.
//--------------------------------------------------
//Caso de uso 4: Agregar un entrenamiento diario.
//--------------------------------------------------
//Caso de uso 5: Editar un entrenamiento diario.
//--------------------------------------------------
//Caso de uso 6: Eliminar un entrenamiento diario.
//--------------------------------------------------
