/* let articulos = [];
let carrito = [];
let compra = 0;

class productos {
    constructor(id, nombre, precio) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }
}

let espPro = new productos("1", "Espirales Progresivos", 18000);
let susFija = new productos("2", "Suspension Fija", 25000);
let susRegC = new productos("3", "Suspension Regulable completa", 75000);
let susRegD = new productos("4", "Suspension regulable delantera", 35000);
let susNeu68 = new productos("5", "Suspension Neumatica 6.0 8mm", 225000);
let susNeu610 = new productos("6", "Suspension Neumatica 6.0 10mm", 255000);
let susNeu78 = new productos("7", "Suspension Neumatica 7.0 8mm", 300000);
let susNeu710 = new productos("8", "Suspension Neumatica 7.0 10mm", 360000);


articulos.push(espPro, susFija, susRegC, susRegD, susNeu68, susNeu610, susNeu78, susNeu710);

// Array de los productos
// console.log(articulos)
// Array del carrito



let usuario = prompt("Por favor, ingrese su nombre de usuraio!");
let productoSelecionado = parseInt(prompt("hola " + usuario + ", eliga los productos y servicios para su compra : " + "\n" +
    "1 - Espirales Progresivos " + `\n ` +
    "2 - Suspension Fija" + `\n` +
    "3 - Suspension Regulable completa " + `\n ` +
    "4 - Suspension regulable delantera " + `\n ` +
    "5 - Suspension Neumatica 6.0 8mm" + `\n ` +
    "6 - Suspension Neumatica 6.0 10m" + `\n ` +
    "7 - Suspension Neumatica 7.0 8mm" + `\n ` +
    "8 - Suspension Neumatica 7.0 10mm"))

function comprar() { */
/* 
    let totalCompra = 0
    let SeguirEnCarrito = true;
    let Decision

    while (SeguirEnCarrito === true) {
        if (productoSelecionado === 1) {
            carrito.push(articulos[0]);
        } else if (productoSelecionado === 2) {
            carrito.push(articulos[1]);
        } else if (productoSelecionado === 3) {
            carrito.push(articulos[2]);
        } else if (productoSelecionado === 4) {
            carrito.push(articulos[3]);
        } else if (productoSelecionado === 5) {
            carrito.push(articulos[4])
        } else if (productoSelecionado === 6) {
            carrito.push(articulos[5]);
        } else if (productoSelecionado === 7) {
            carrito.push(articulos[6]);
        } else if (productoSelecionado === 8) {
            carrito.push(articulos[7]);
        } else {
            productoSelecionado = parseInt(prompt("Ingresa un producto existente: " + "\n" +
                "1 - Espirales Progresivos " + `\n ` +
                "2 - Suspension Fija" + `\n` +
                "3 - Suspension Regulable completa " + `\n ` +
                "4 - Suspension regulable delantera " + `\n ` +
                "5 - Suspension Neumatica 6.0 8mm" + `\n ` +
                "6 - Suspension Neumatica 6.0 10m" + `\n ` +
                "7 - Suspension Neumatica 7.0 8mm" + `\n ` +
                "8 - Suspension Neumatica 7.0 10mm"));
            continue;
        }
        Decision = parseInt(prompt("Desea seguir comprando 1-si 2-no"));
        if (Decision === 1) {
            productoSelecionado = parseInt(prompt("Sumar al carrito : " + "\n" +
                "1 - Espirales Progresivos " + `\n ` +
                "2 - Suspension Fija" + `\n` +
                "3 - Suspension Regulable completa " + `\n ` +
                "4 - Suspension regulable delantera " + `\n ` +
                "5 - Suspension Neumatica 6.0 8mm" + `\n ` +
                "6 - Suspension Neumatica 6.0 10m" + `\n ` +
                "7 - Suspension Neumatica 7.0 8mm" + `\n ` +
                "8 - Suspension Neumatica 7.0 10mm"));
        } else if (Decision === 2) {
            SeguirEnCarrito = false;
            for (elemnto of carrito) {
                totalCompra = totalCompra + elemnto.precio
            }
        }
    }

    console.log(carrito)
    return alert("el total de la compra es " + totalCompra + "$$")
}

// function buscarProducto() {
//     productoFiltrado = carrito.find(item => item.nombre === productoSelecionado);
//     alert("tu productos del carrito ," + productoFiltrado);
// }

comprar();


// filter muestra la compra del carrito
carrito.filter(elementos => alert(usuario + " los articulos de tu compra fue " + elementos.nombre + " $" + elementos.precio))

//find buscador de productos
const buscador = prompt(" Desea buscar algun producto? ")
const elementoBuscado = articulos.find(obj => obj.nombre == buscador)
if (elementoBuscado) {
    alert("Se encontro el elemento buscado : " + buscador);
} else {
    alert("no tenemos ese producto");
} */