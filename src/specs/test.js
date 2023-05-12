//--------------------------------------------------
// Se importan todas las funciones que serán utilizadas en Jasmine
const { handleSearch } = require("../functions/handleSearch");
const { handleListPlans } = require("../functions/handleVisuals");
// const itemsPromise = require("./exerciseData").default;
const { handleDeleteSavedWorkout } = require("../functions/handleDelete");
const { handleAddSavedWorkout } = require("../functions/handleAdd");
const { handleEdit } = require("../functions/handleEdit");
const { validateListPlans } = require("../functions/handleList");

//--------------------------------------------------
//Se almacenan todas las listas y variables externas a utilizar para poder evaluar las condiciones

const itemsExercises = [[1,"sentadilla con barra","colocando la barra en la parte superior de la espalda, flexiona las piernas y baja la cadera hasta que los muslos estén paralelos al suelo, luego vuelve a la posición inicial","Eric Durante","https://www.entrenamientos.com/media/cache/exercise_375/uploads/exercise/media-sentadilla-con-barra-init-pos-8649.png"],[2,"prensa de piernas","sentado en una máquina de prensa de piernas, empuja la plataforma con los pies para extender las piernas y luego baja de nuevo","Daniel Roco","https://www.entrenamientos.com/media/cache/exercise_375/uploads/exercise/prensa-de-piernas-inclinada-init-pos-4016.png"],[3,"Press de banca con barra o mancuernas","acostado en un banco plano o inclinado, sostén la barra o las mancuernas con los brazos extendidos y baja lentamente hacia el pecho antes de empujar hacia arriba para volver a la posición inicial","Javier Aguayo","https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Dumbbell-Declined-Bench-Press_600x600.png?v=1619977242"],[4,"Abdominales en máquina de crunch","sentado en una máquina de crunch, coloca los pies debajo de las almohadillas y usa los músculos abdominales para levantar el torso hacia las piernas antes de bajar lentamente","Kattya Herrera","https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Crunch-Machine_538b22a3-379f-4a45-874a-ec1d798235b4_600x600.png?v=1612138379"],[5,"Pull-ups en barra fija","colgando de una barra fija con las manos separadas, levanta el cuerpo hasta que la barbilla pase por encima de la barra antes de bajar lentamente de nuevo","Dieguito Maradona","https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Pull-Up-with-a-Supinated-Grip_600x600.png?v=1619977534"],[6,"Levantamiento de pesas olímpico con barras, discos y plataformas","consiste en levantar pesos en diferentes movimientos olímpicos como arrancada, envión o dos tiempos, utilizando barras, discos y plataformas","Carlos Humberto Caszely","https://www.entrenamientos.com/media/cache/exercise_375/uploads/exercise/levantamiento-en-dos-tiempos-init-pos-8408.png"],[7,"Curl de pierna en máquina","sentado en una máquina de curl de piernas, coloca los pies detrás de las almohadillas y dobla las piernas para llevar los talones hacia los glúteos y luego vuelve a la posición inicial","Alexis Sanchez","https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Lying-Leg-Curl_203153d8-79dd-4bb9-9125-708aa4327107_600x600.png?v=1612139013"]];

const daily_trainning= [[1,"sentadilla con barra","colocando la barra en la parte superior de la espalda, flexiona las piernas y baja la cadera hasta que los muslos estén paralelos al suelo, luego vuelve a la posición inicial","Eric Durante","https://www.entrenamientos.com/media/cache/exercise_375/uploads/exercise/media-sentadilla-con-barra-init-pos-8649.png"],[7,"Curl de pierna en máquina","sentado en una máquina de curl de piernas, coloca los pies detrás de las almohadillas y dobla las piernas para llevar los talones hacia los glúteos y luego vuelve a la posición inicial","Alexis Sanchez","https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Lying-Leg-Curl_203153d8-79dd-4bb9-9125-708aa4327107_600x600.png?v=1612139013"],[6,"Levantamiento de pesas olímpico con barras, discos y plataformas","consiste en levantar pesos en diferentes movimientos olímpicos como arrancada, envión o dos tiempos, utilizando barras, discos y plataformas","Carlos Humberto Caszely","https://www.entrenamientos.com/media/cache/exercise_375/uploads/exercise/levantamiento-en-dos-tiempos-init-pos-8408.png"]];
const plans_list = [
    {
        "planId": "1",
        "exercises": [
            [
                4,
                "Abdominales en máquina de crunch",
                "sentado en una máquina de crunch, coloca los pies debajo de las almohadillas y usa los músculos abdominales para levantar el torso hacia las piernas antes de bajar lentamente",
                "Kattya Herrera",
                "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Crunch-Machine_538b22a3-379f-4a45-874a-ec1d798235b4_600x600.png?v=1612138379"
            ],
            [
                6,
                "Levantamiento de pesas olímpico con barras, discos y plataformas",
                "consiste en levantar pesos en diferentes movimientos olímpicos como arrancada, envión o dos tiempos, utilizando barras, discos y plataformas",
                "Carlos Humberto Caszely",
                "https://www.entrenamientos.com/media/cache/exercise_375/uploads/exercise/levantamiento-en-dos-tiempos-init-pos-8408.png"
            ],
            [
                3,
                "Press de banca con barra o mancuernas",
                "acostado en un banco plano o inclinado, sostén la barra o las mancuernas con los brazos extendidos y baja lentamente hacia el pecho antes de empujar hacia arriba para volver a la posición inicial",
                "Javier Aguayo",
                "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Dumbbell-Declined-Bench-Press_600x600.png?v=1619977242"
            ],
            [
                5,
                "Pull-ups en barra fija",
                "colgando de una barra fija con las manos separadas, levanta el cuerpo hasta que la barbilla pase por encima de la barra antes de bajar lentamente de nuevo",
                "Dieguito Maradona",
                "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Pull-Up-with-a-Supinated-Grip_600x600.png?v=1619977534"
            ]
        ]
    },
    {
        "planId": "2",
        "exercises": [
            [
                2,
                "prensa de piernas",
                "sentado en una máquina de prensa de piernas, empuja la plataforma con los pies para extender las piernas y luego baja de nuevo",
                "Daniel Roco",
                "https://www.entrenamientos.com/media/cache/exercise_375/uploads/exercise/prensa-de-piernas-inclinada-init-pos-4016.png"
            ],
            [
                7,
                "Curl de pierna en máquina",
                "sentado en una máquina de curl de piernas, coloca los pies detrás de las almohadillas y dobla las piernas para llevar los talones hacia los glúteos y luego vuelve a la posición inicial",
                "Alexis Sanchez",
                "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Lying-Leg-Curl_203153d8-79dd-4bb9-9125-708aa4327107_600x600.png?v=1612139013"
            ],
            [
                3,
                "Press de banca con barra o mancuernas",
                "acostado en un banco plano o inclinado, sostén la barra o las mancuernas con los brazos extendidos y baja lentamente hacia el pecho antes de empujar hacia arriba para volver a la posición inicial",
                "Javier Aguayo",
                "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Dumbbell-Declined-Bench-Press_600x600.png?v=1619977242"
            ],
            [
                6,
                "Levantamiento de pesas olímpico con barras, discos y plataformas",
                "consiste en levantar pesos en diferentes movimientos olímpicos como arrancada, envión o dos tiempos, utilizando barras, discos y plataformas",
                "Carlos Humberto Caszely",
                "https://www.entrenamientos.com/media/cache/exercise_375/uploads/exercise/levantamiento-en-dos-tiempos-init-pos-8408.png"
            ]
        ]
    },
    {
        "planId": "3",
        "exercises": [
            [
                3,
                "Press de banca con barra o mancuernas",
                "acostado en un banco plano o inclinado, sostén la barra o las mancuernas con los brazos extendidos y baja lentamente hacia el pecho antes de empujar hacia arriba para volver a la posición inicial",
                "Javier Aguayo",
                "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Dumbbell-Declined-Bench-Press_600x600.png?v=1619977242"
            ],
            [
                6,
                "Levantamiento de pesas olímpico con barras, discos y plataformas",
                "consiste en levantar pesos en diferentes movimientos olímpicos como arrancada, envión o dos tiempos, utilizando barras, discos y plataformas",
                "Carlos Humberto Caszely",
                "https://www.entrenamientos.com/media/cache/exercise_375/uploads/exercise/levantamiento-en-dos-tiempos-init-pos-8408.png"
            ],
            [
                5,
                "Pull-ups en barra fija",
                "colgando de una barra fija con las manos separadas, levanta el cuerpo hasta que la barbilla pase por encima de la barra antes de bajar lentamente de nuevo",
                "Dieguito Maradona",
                "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Pull-Up-with-a-Supinated-Grip_600x600.png?v=1619977534"
            ],
            [
                1,
                "sentadilla con barra",
                "colocando la barra en la parte superior de la espalda, flexiona las piernas y baja la cadera hasta que los muslos estén paralelos al suelo, luego vuelve a la posición inicial",
                "Eric Durante",
                "https://www.entrenamientos.com/media/cache/exercise_375/uploads/exercise/media-sentadilla-con-barra-init-pos-8649.png"
            ]
        ]
    }
];

//--------------------------------------------------
//A continuación en cada describe() se presentan los casos de uso, y en it() cada prueba para los casos respectivos
//--------------------------------------------------

//Caso de uso 1: Listar planes de entrenamientos personalizados disponibles en el sistema.

describe("Función para mostrar los planes disponibles en los planes de personalizados y", () => {
    
    it('debería retornar una sentencia de si se muestran o no', function() {
        //ITERACION
        let found = false;
        if (validateListPlans(plans_list)){
            found = true;
        }
        expect(found).toBe(true); 
    });
});


//--------------------------------------------------
//Caso de uso 2: Realizar búsqueda de un ejercicio en particular de la base de datos de ejercicios disponibles en el gimnasio.

describe("Función handleSearch (búsqueda de ejercicio)", function() {

    //Prueba 2.1: Encontrar varios elementos que cumplen la busqueda
    it('debería retornar una lista que incluya todos los elementos encontrados que contengan el string usado', function() {
        const searchTerm = 'na';
        const filteredItems = handleSearch(searchTerm, itemsExercises);
        // let found = false;
        // console.log(filteredItems);
        let array = []

        for (let i = 0; i < filteredItems.length; i++) {
            if (filteredItems[i][1].includes(searchTerm)) {
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
         const arrayInItems = arrayContainsArray(itemsExercises, array);
         
         expect(arrayInItems).toBe(true);
    });

    //Prueba 2.2: Encontrar un elemento en específico que existe
    it('debería retornar un solo elemento que coincida con la palabra ingresada', function() {
        const searchTerm = 'sentadilla con barra';
        const filteredItems = handleSearch(searchTerm, itemsExercises);
        let found = false;
        // console.log(filteredItems);

        for (let i = 0; i < filteredItems.length; i++) {
            if (filteredItems[i][1] === searchTerm) {
                found = true;
                break;
            }
        }
        
        expect(found).toBe(true);
    });
    
    //Prueba 2.3: Buscar un elemento que no existe
    it('debería retornar un arreglo vacío, el cual indique que no se encontraron palabras que coincidan', function() {
        const searchTerm = 'zr';
        const filteredItems = handleSearch(searchTerm, itemsExercises);
        let found = true;
        // console.log(filteredItems);

        for (let i = 0; i < filteredItems.length; i++) {
            if (filteredItems[i][1].includes(searchTerm)) {
                found = false;
                break;
            }
        }
        
        expect(found).toBe(true);
    });
});

//--------------------------------------------------
//Caso de uso 3: Visualizar un plan de entrenamiento personalizado del sistema con todos sus ejercicios.

describe("Función handleVisuals (mostrar Modal)", () => {
    
    it('debería retornar una sentencia de que se ejecutó el Modal', function() {
        //ITERACION
        const selectedItem = {
            "planId": "0",
            "exercises": {
                "planId": "1",
                "exercises": [
                    [
                        4,
                        "Abdominales en máquina de crunch",
                        "sentado en una máquina de crunch, coloca los pies debajo de las almohadillas y usa los músculos abdominales para levantar el torso hacia las piernas antes de bajar lentamente",
                        "Kattya Herrera",
                        "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Crunch-Machine_538b22a3-379f-4a45-874a-ec1d798235b4_600x600.png?v=1612138379"
                    ],
                    [
                        6,
                        "Levantamiento de pesas olímpico con barras, discos y plataformas",
                        "consiste en levantar pesos en diferentes movimientos olímpicos como arrancada, envión o dos tiempos, utilizando barras, discos y plataformas",
                        "Carlos Humberto Caszely",
                        "https://www.entrenamientos.com/media/cache/exercise_375/uploads/exercise/levantamiento-en-dos-tiempos-init-pos-8408.png"
                    ],
                    [
                        3,
                        "Press de banca con barra o mancuernas",
                        "acostado en un banco plano o inclinado, sostén la barra o las mancuernas con los brazos extendidos y baja lentamente hacia el pecho antes de empujar hacia arriba para volver a la posición inicial",
                        "Javier Aguayo",
                        "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Dumbbell-Declined-Bench-Press_600x600.png?v=1619977242"
                    ],
                    [
                        5,
                        "Pull-ups en barra fija",
                        "colgando de una barra fija con las manos separadas, levanta el cuerpo hasta que la barbilla pase por encima de la barra antes de bajar lentamente de nuevo",
                        "Dieguito Maradona",
                        "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Pull-Up-with-a-Supinated-Grip_600x600.png?v=1619977534"
                    ]
                ]
            }
        };

        let found = false;
        if (handleListPlans(selectedItem)){
            found = true;
        }
        expect(found).toBe(true); 
    });
});



//--------------------------------------------------
//Caso de uso 4: Agregar un entrenamiento diario.

describe("Funcion para agregar un entrenamiento diario", function() {

    it('debería retornar true si el elemento se guardo en la lista de ejercicios diarios', function() {
        const workout = [{
            "id": 5,
            "exercise": "Pull-ups en barra fija",
            "repetitions": 1
        },
        {
            "id": 7,
            "exercise": "Curl de pierna en máquina",
            "repetitions": 1
        },
        {
            "id": 7,
            "exercise": "Curl de pierna en máquina",
            "repetitions": 1
        }
        ];
        let expected = false;
        const found = handleAddSavedWorkout(workout);
        if (found["e1"] === 5 && found["e2"] === 7 && found["e3"] === 7){
            expected = true;
        }
        
        expect(expected).toBe(true);
    });
});

//--------------------------------------------------
//Caso de uso 5: Editar un entrenamiento diario.

describe("Función editar (editar entrenamientos diarios)", function () {
    it('Deberia retornar una lista con el entrenamiento editado en sus repeticiones', function() {
        let found = false;
        const workout = [{
            "id": 5,
            "exercise": "Pull-ups en barra fija",
            "repetitions": 1
        },
        {
            "id": 7,
            "exercise": "Curl de pierna en máquina",
            "repetitions": 1
        },
        {
            "id": 7,
            "exercise": "Curl de pierna en máquina",
            "repetitions": 1
        }
        ];

        const newworkout = handleEdit(workout,0,8);
        if (workout[0]["repetitions"] < newworkout[0]["repetitions"]){
            found = true;
        }
        expect(found).toBe(true);
    });
});


// console.log(handleEdit(workout,0,3))


//--------------------------------------------------
//Caso de uso 6: Eliminar un entrenamiento diario.
describe("Función Eliminar (Eliminar entrenamientos diarios)", function () {
    let founded = true;
    it('Deberia retornar una lista con el entramiento eliminado', function() {
        const new_trainning = handleDeleteSavedWorkout(daily_trainning, 2)
        if(new_trainning.includes(daily_trainning[2])){
            founded = false;
        }
        expect(founded).toBe(true);
    });
});
//--------------------------------------------------