
const cuerpo = document.body;
const carrito = []

/// Modo oscuro
const toggle = document.getElementById('toggle');
const label_toggle = document.getElementById('label_toggle');

toggle.addEventListener('change', (event) => {
    const checked = event.target.checked
    document.body.classList.toggle('dark')
    if (checked == true) {
        label_toggle.innerHTML = '<i class="bi bi-brightness-low-fill"></i>';
    } else {
        label_toggle.innerHTML = '<i class="bi bi-moon-stars-fill"></i>';
    }
})
//Creo un menu de navegacion desde DOM
document.addEventListener("DOMContentLoaded", function () {
    const navContainer = document.getElementById('nav-container');

    const nav = document.createElement('nav');
    const ul = document.createElement('ul');

    const menuItems = [
        { text: 'Inicio', href: '#home' },
        { text: 'Servicios', href: '#services' },
        { text: 'Acerca de', href: '#about' },
        { text: 'Contacto', href: '#contact' }
    ];
    menuItems.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.textContent = item.text;
        a.href = item.href;
        li.appendChild(a);
        ul.appendChild(li);
    });

    nav.appendChild(ul);
    navContainer.appendChild(nav);
});


const productos = [
    {
        id: 1,
        nombre: 'Samsung A33',
        img: '/assets/producto/A33.jpg',
        precio: 300000,
    },
    {
        id: 2,
        nombre: 'Samsung S24',
        img: '/assets/producto/S24.jpg',
        precio: 250000,
    },
    {
        id: 3,
        nombre: 'Samsung A54',
        img: '/assets/producto/A54.jpg',
        precio: 350000,
    },
    {
        id: 4,
        nombre: 'Samsung S21',
        img: '/assets/producto/S21.jpg',
        precio: 500000,
    },
    {
        id: 5,
        nombre: 'Samsung Z Fold4',
        img: '/assets/producto/Zfold4.jpg',
        precio: 550000,
    }
];


function addtoCart(nombreProducto) {
    let product = productos.find(p => p.nombre === nombreProducto);
    productos.push({
        nombre: product.nombre,
        precio: product.precio,
    });
    localStorage.setItem('carrito', JSON.stringify(productos));   ///localStorage y JSON
}

function CardInicio(productos) {
    const productosRow = document.getElementById('productosRow');

    productos.forEach(producto => {
        const nuevoProducto = document.createElement("div");
        nuevoProducto.classList.add("col-md-4");

        nuevoProducto.innerHTML = `
            <div class="card mb-4 shadow-sm">
                <img src="${producto.img}" class="card-img-top" alt="${producto.nombre}">
                <div class="card-body">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <p class="card-text">Precio: $${producto.precio}</p>
                    <button class="btn btn-primary" onclick="addtoCart('${producto.nombre}')">Añadir al Carrito</button>
                </div>
            </div>
        `;

        productosRow.appendChild(nuevoProducto);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    CardInicio(productos);
});
