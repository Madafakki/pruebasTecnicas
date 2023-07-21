//? Trabajando solucion de uber, se solicita una solución la cual estime el precio de cuanto costara un viaje tomando en cuenta las variables
//? De la funcion creada
// *ride_time: 30, ride_distance : 7, cost_per_minute: {0.2, 0.35, 0.4, 0.45}
//* cost_per_mile : {1.1, 1.8, 2.3, 3.5}
//* solucion depende del array [tipo de vehiculo viaje?]

// function estimadorPrecio(ride_time, ride_distance, cost_per_minute, cost_per_mile) {
//     return cost_per_mile.map((rideMileCost, index) => {
//         const rideMinuteCost = cost_per_minute[index]
//         return rideMinuteCost * ride_time + rideMileCost * ride_distance
//     })
// }

// const estimaciones = estimadorPrecio(30, 7, [0.2, 0.35, 0.4, 0.45], [1.1, 1.8, 2.3, 3.5])
// console.log(estimaciones)


//? Ejercicio 2 uber.
function maximoPago(length, fares) {
    const credit = 20
    const rides = ["UberX", "UberXL", "UberPlus", "UberBlack", "UberSUV"]

    const index = fares.findIndex(fare => {
        //console.log({ length, fare, result: fare * length })
        return (fare * length) > credit
    })

    return index < 0 ? rides.at(-1) : rides[index - 1]
}

console.log(maximoPago(15, [0.7, 1.0, 1.3, 1.5, 1.7]))