/// Objetos
class Celular {
    constructor(marca, modelo, memoriaRam, precio) {
        this.marca = marca;
        this.modelo = modelo;
        this.memoriaRam = memoriaRam;
        this.precio = precio;
    }

    mostrarInfo() {
        return `Marca: ${this.marca}, Modelo: ${this.modelo}, Memoria RAM: ${this.memoriaRam}, Precio: $${this.precio}`;
    }

    aplicarDescuento(porcentaje) {
        return this.precio - (this.precio * (porcentaje / 100));
    }

    mostrarInfoConDescuento(porcentaje) {
        const precioConDescuento = this.aplicarDescuento(porcentaje);
        return `${this.mostrarInfo()}, Precio con Descuento: $${precioConDescuento.toFixed(2)}`;
    }
    calcularPrecioConIVA() {
        const IVA = 0.21;
        return this.precio * (1 + IVA);
    }

    mostrarInfoConIVA() {
        const precioConIVA = this.calcularPrecioConIVA();
        return `${this.mostrarInfo()}, Precio con IVA: $${precioConIVA.toFixed(2)}`;
    }
}
const celular1 = new Celular("Samsung", "A33", "14Gb", 300000);
const celular2 = new Celular("Samsung", "S24", "16Gb", 250000)
const celular3 = new Celular("Samsung", "A54", "32Gb", 350000)
const celular4 = new Celular("Samsung", "S21", "8Gb", 150000)
const celular5 = new Celular("Samsung", "Z Flit", "14Gb", 400000)
console.log(celular1.mostrarInfoConIVA()); /// muestra info del producto (precio mas iva)
console.log(celular2.mostrarInfoConDescuento(10)); /// muestra info del producto (precio con descuento)


/// Arrays
const stock = [
    new Celular("Samsung", "A33", "14Gb", 300000),
    new Celular("Samsung", "S24", "16Gb", 250000),
    new Celular("Samsung", "A54", "32Gb", 350000),
    new Celular("Samsung", "S21", "8Gb", 150000),
    new Celular("Samsung", "Z Flit", "14Gb", 400000)
];

// stock.forEach(celular => {
//     console.log(celular.mostrarInfo());
// });
const otrosCelulares = [
    new Celular("Apple", "iPhone 13", "6Gb", 800000),
    new Celular("Xiaomi", "Mi 11", "8Gb", 500000)
];
const todosLosCelulares = stock.concat(otrosCelulares);
// console.log(todosLosCelulares);

/// Funciones
function mostrarStock() {
    stock.forEach(celular => {
        console.log(celular.mostrarInfo());
    });
}
mostrarStock()

const mejorPrecio = stock.filter(Celular => Celular.precio < 300000)
console.log(mejorPrecio)