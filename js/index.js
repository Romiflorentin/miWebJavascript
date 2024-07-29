// Carrito de Compras

function carritoDecompra() {
    let celular = prompt("Ingrese un Modelo de Celular")
    switch (celular) {
        case "samsungA33":
            console.log("usted añadió al carrito  un samsungA33");
            break;

        case "samsungS24":
            console.log("usted añadió al carrito  un samsungS24");
            break;

        case "samsungA54":
            console.log("usted añadió al carrito  un samsungA54");
            break;

        case "samsungS21":
            console.log("usted añadió al carrito  un samsungS21");
            break;

        case "samsungZflip5":
            console.log("usted añadió al carrito  un samsungZflip5");
            break;

        default:
            console.log("Opcion invalida!");
            break;
    }
};
carritoDecompra()

//calcular total de Carrito

const productos = [
    { nombre: "samsungA33", precio: 1000 },
    { nombre: "samsungS24", precio: 1200 },
    { nombre: "samsungA54", precio: 1400 },
    { nombre: "samsungS21", precio: 1600 },
    { nombre: "samsungZflip5", precio: 1800 }
];
function sumarPrecios(productos) {
    let total = 0;
    for (const producto of productos) {
        total += producto.precio;
    }
    return total;
}
const precioTotal = sumarPrecios(productos);
console.log(`El precio total de los productos es: $${precioTotal}`);

sumarPrecios()