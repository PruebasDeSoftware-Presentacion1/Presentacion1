function validateListPlans (items) {
    if (items.length > 0) {
      return true;
    } else {
      return false;
    }
  };

module.exports = { validateListPlans }
// const items = [
//     {
//         "planId": "1",
//         "exercises": [
//             [
//                 4,
//                 "Abdominales en máquina de crunch",
//                 "sentado en una máquina de crunch, coloca los pies debajo de las almohadillas y usa los músculos abdominales para levantar el torso hacia las piernas antes de bajar lentamente",
//                 "Kattya Herrera",
//                 "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Crunch-Machine_538b22a3-379f-4a45-874a-ec1d798235b4_600x600.png?v=1612138379"
//             ],
//             [
//                 6,
//                 "Levantamiento de pesas olímpico con barras, discos y plataformas",
//                 "consiste en levantar pesos en diferentes movimientos olímpicos como arrancada, envión o dos tiempos, utilizando barras, discos y plataformas",
//                 "Carlos Humberto Caszely",
//                 "https://www.entrenamientos.com/media/cache/exercise_375/uploads/exercise/levantamiento-en-dos-tiempos-init-pos-8408.png"
//             ],
//             [
//                 3,
//                 "Press de banca con barra o mancuernas",
//                 "acostado en un banco plano o inclinado, sostén la barra o las mancuernas con los brazos extendidos y baja lentamente hacia el pecho antes de empujar hacia arriba para volver a la posición inicial",
//                 "Javier Aguayo",
//                 "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Dumbbell-Declined-Bench-Press_600x600.png?v=1619977242"
//             ],
//             [
//                 5,
//                 "Pull-ups en barra fija",
//                 "colgando de una barra fija con las manos separadas, levanta el cuerpo hasta que la barbilla pase por encima de la barra antes de bajar lentamente de nuevo",
//                 "Dieguito Maradona",
//                 "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Pull-Up-with-a-Supinated-Grip_600x600.png?v=1619977534"
//             ]
//         ]
//     },
//     {
//         "planId": "2",
//         "exercises": [
//             [
//                 2,
//                 "prensa de piernas",
//                 "sentado en una máquina de prensa de piernas, empuja la plataforma con los pies para extender las piernas y luego baja de nuevo",
//                 "Daniel Roco",
//                 "https://www.entrenamientos.com/media/cache/exercise_375/uploads/exercise/prensa-de-piernas-inclinada-init-pos-4016.png"
//             ],
//             [
//                 7,
//                 "Curl de pierna en máquina",
//                 "sentado en una máquina de curl de piernas, coloca los pies detrás de las almohadillas y dobla las piernas para llevar los talones hacia los glúteos y luego vuelve a la posición inicial",
//                 "Alexis Sanchez",
//                 "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Lying-Leg-Curl_203153d8-79dd-4bb9-9125-708aa4327107_600x600.png?v=1612139013"
//             ],
//             [
//                 3,
//                 "Press de banca con barra o mancuernas",
//                 "acostado en un banco plano o inclinado, sostén la barra o las mancuernas con los brazos extendidos y baja lentamente hacia el pecho antes de empujar hacia arriba para volver a la posición inicial",
//                 "Javier Aguayo",
//                 "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Dumbbell-Declined-Bench-Press_600x600.png?v=1619977242"
//             ],
//             [
//                 6,
//                 "Levantamiento de pesas olímpico con barras, discos y plataformas",
//                 "consiste en levantar pesos en diferentes movimientos olímpicos como arrancada, envión o dos tiempos, utilizando barras, discos y plataformas",
//                 "Carlos Humberto Caszely",
//                 "https://www.entrenamientos.com/media/cache/exercise_375/uploads/exercise/levantamiento-en-dos-tiempos-init-pos-8408.png"
//             ]
//         ]
//     },
//     {
//         "planId": "3",
//         "exercises": [
//             [
//                 3,
//                 "Press de banca con barra o mancuernas",
//                 "acostado en un banco plano o inclinado, sostén la barra o las mancuernas con los brazos extendidos y baja lentamente hacia el pecho antes de empujar hacia arriba para volver a la posición inicial",
//                 "Javier Aguayo",
//                 "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Dumbbell-Declined-Bench-Press_600x600.png?v=1619977242"
//             ],
//             [
//                 6,
//                 "Levantamiento de pesas olímpico con barras, discos y plataformas",
//                 "consiste en levantar pesos en diferentes movimientos olímpicos como arrancada, envión o dos tiempos, utilizando barras, discos y plataformas",
//                 "Carlos Humberto Caszely",
//                 "https://www.entrenamientos.com/media/cache/exercise_375/uploads/exercise/levantamiento-en-dos-tiempos-init-pos-8408.png"
//             ],
//             [
//                 5,
//                 "Pull-ups en barra fija",
//                 "colgando de una barra fija con las manos separadas, levanta el cuerpo hasta que la barbilla pase por encima de la barra antes de bajar lentamente de nuevo",
//                 "Dieguito Maradona",
//                 "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Pull-Up-with-a-Supinated-Grip_600x600.png?v=1619977534"
//             ],
//             [
//                 1,
//                 "sentadilla con barra",
//                 "colocando la barra en la parte superior de la espalda, flexiona las piernas y baja la cadera hasta que los muslos estén paralelos al suelo, luego vuelve a la posición inicial",
//                 "Eric Durante",
//                 "https://www.entrenamientos.com/media/cache/exercise_375/uploads/exercise/media-sentadilla-con-barra-init-pos-8649.png"
//             ]
//         ]
//     }
// ];

// console.log(validateListPlans(items))