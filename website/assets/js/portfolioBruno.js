const cafes = [
    { id: 1, nombre: "Café Mocha", precio: 4.50, imagen: "/website/assets/img/moccha.jpeg" },
    { id: 2, nombre: "Café Americano", precio: 3.00, imagen: "/website/assets/img/americano.jpeg" },
    { id: 3, nombre: "Café con Leche", precio: 3.50, imagen: "/website/assets/img/latte.jpg" },
    { id: 4, nombre: "Cappuccino", precio: 4.00, imagen: "/website/assets/img/capuchino.avif" },
    { id: 5, nombre: "Latte Vainilla", precio: 4.80, imagen: "/website/assets/img/latte_vainilla.jpeg"},
    { id: 6, nombre: "Cold Brew", precio: 5.00, imagen: "/website/assets/img/cold_brew.jpg"},
]

const pasteleria = [
    { id: 7, nombre: "Croissant de Mantequilla", precio: 2.50, imagen: "/website/assets/img/croissant.jpg"},
    { id: 8, nombre: "Tarta de Queso", precio: 3.80, imagen: "/website/assets/img/cheese_cake.jpg"},
    { id: 9, nombre: "Brownie de Chocolate", precio: 3.00, imagen: "/website/assets/img/brownie.jpeg"},
    { id: 10, nombre: "Muffin de Arándanos", precio: 2.80, imagen: "/website/assets/img/cupcake_blueberry.jpg"},
    { id: 11, nombre: "Cinnamon Roll", precio: 3.50, imagen: "/website/assets/img/cinnamon_roll.jpg"},
    { id: 12, nombre: "Tarta de Limón", precio: 4.00, imagen: "/website/assets/img/lemon_pie.jpg"},
];


function renderizarProductos(lista, contenedorId) {
    const contenedor = document.getElementById(contenedorId);
    contenedor.innerHTML = ""; 

    lista.forEach(producto => {
        const col = document.createElement("div");
        col.classList.add("col");
        col.innerHTML = `
            <div class="card h-100 border-0 p-2 shadow-sm rounded-4">
                <img src="${producto.imagen}" class="card-img-top rounded-4 imagen-card">
                <div class="card-body px-1 py-3 d-flex flex-column">
                    <h6 class="fw-bold mb-1 text-dark">${producto.nombre}</h6>
                    <p class="text-muted small mb-3">Freshly made for you.</p>
                    <div class="d-flex justify-content-between align-items-center mt-auto">
                        <span class="fw-bold text-dark fs-5">$${producto.precio.toFixed(2)}</span>
                        <button class="btn btn-primary rounded-pill px-3 py-1 btn-sm btn-agregar">
                            Agregar
                        </button>
                    </div>
                </div>
            </div>
        `;

        const boton = col.querySelector(".btn-agregar");
        boton.addEventListener("click", () => {
            agregarAlCarrito(producto);
        });

        contenedor.appendChild(col);
    });
}

let carrito = [];

function agregarAlCarrito(producto) {
    let estaEnCarrito = carrito.find(p => p.id === producto.id);

    if (estaEnCarrito) {
        estaEnCarrito.cantidad++;
        estaEnCarrito.total = estaEnCarrito.precio * estaEnCarrito.cantidad;
    } else {
        carrito.push({ ...producto, cantidad: 1, total: producto.precio });
    }

    const toastLiveExample = document.getElementById("toastAgregar");
    const toast = new bootstrap.Toast(toastLiveExample);
    toast.show();

    console.log(carrito);  
    renderizarCarrito();
}

function renderizarCarrito() {
    const contenedorCarrito = document.getElementById("lista-carrito");
    const totalElemento = document.getElementById("precio-total");
    
    contenedorCarrito.innerHTML = "";
    let totalGeneral = 0;

    if (carrito.length === 0) {
        contenedorCarrito.innerHTML = '<p class="text-center text-muted py-4">Tu carrito está vacío</p>';
        totalElemento.textContent = "0.00";
        return;
    }

    carrito.forEach(item => {
        totalGeneral += item.total;

        const fila = document.createElement("div");
        fila.classList.add("mb-3");
        fila.innerHTML = `
            <div class="d-flex align-items-center justify-content-between p-2 bg-light rounded-3 border">
                <div class="d-flex align-items-center">
                    <img src="${item.imagen}" class="rounded-circle me-3 imagen-carrito">          
                    <p class="mb-0 fw-bold" >${item.nombre}</p>
                    <div class="d-flex align-items-center border rounded-pill bg-white px-2 mx-3">
                        <button class="btn btn-sm btn-restar p-0 border-0 text-secondary">-</button>
                        <span class="mx-2 fw-bold small">${item.cantidad}</span>
                        <button class="btn btn-sm btn-sumar p-0 border-0 text-secondary">+</button>
                    </div>            
                    <p class="mb-0"> $${item.precio.toFixed(2)}</p>
                </div>

                <div class="d-flex align-items-center gap-3"> 
                    <p class="mb-0 fw-bold text-dark">$ ${item.total.toFixed(2)}</p>
                    <button class="btn btn-sm text-danger p-0 btn-eliminar">
                        <i class="bi bi-trash"></i> Eliminar
                    </button>
                </div>
            </div>
        `;

        const botonRestar = fila.querySelector(".btn-restar");
        botonRestar.addEventListener("click", () => {
            if (item.cantidad > 1) {
                item.cantidad--;
                item.total = item.cantidad * item.precio;
                renderizarCarrito();
            }    
            renderizarCarrito(); 
        });


        const botonSumar = fila.querySelector(".btn-sumar");
        botonSumar.addEventListener("click", () => {
            item.cantidad++
            item.total = item.cantidad * item.precio;
            renderizarCarrito(); 
        });


        const botonEliminar = fila.querySelector(".btn-eliminar");
        botonEliminar.addEventListener("click", () => {
            eliminarDelCarrito(item.id);
        });

        contenedorCarrito.appendChild(fila);
    });

    totalElemento.textContent = totalGeneral.toFixed(2);
}


function eliminarDelCarrito(id) {
    carrito = carrito.filter(item => item.id !== id);
    renderizarCarrito(); 
}

document.addEventListener("DOMContentLoaded", () => {
    const intervalo = setInterval(() => {
        const listaCafes = document.getElementById("lista-cafes");
        const modalPago = document.getElementById("modalPago");

        if (listaCafes && modalPago) {
            clearInterval(intervalo);

            renderizarProductos(cafes, "lista-cafes");
            renderizarProductos(pasteleria, "lista-pasteleria");
            renderizarCarrito();

            modalPago.addEventListener("show.bs.modal", () => {
                const listaResumen = document.getElementById("lista-resumen-pago");
                const totalCarrito = document.getElementById("precio-total").innerText;
                const totalPago = document.getElementById("precio-total-pago");

                totalPago.innerText = totalCarrito;
                listaResumen.innerHTML = "";

                carrito.forEach(item => {
                    const div = document.createElement("div");
                    div.className = "d-flex justify-content-between small mb-2";
                    div.innerHTML = `
                        <span>${item.cantidad}x ${item.nombre}</span>
                        <span class="text-dark fw-medium">$${item.total.toFixed(2)}</span>
                    `;
                    listaResumen.appendChild(div);
                });
            });

    document.getElementById("btn-finalizar").addEventListener("click", function() {

        const nombre = document.getElementById("input-nombre").value;
        const numero = document.getElementById("input-numero").value;
        const vencimiento = document.getElementById("input-vencimiento").value;
        const cvv = document.getElementById("input-cvv").value;

        if (!nombre || !numero || !vencimiento || !cvv) {
            document.getElementById("error-pago").classList.remove("d-none");
            return;
        }

        document.getElementById("error-pago").classList.add("d-none");
        
        carrito = [];
        renderizarCarrito();

        const modalPagoInstancia = bootstrap.Modal.getInstance(document.getElementById("modalPago"));
        modalPagoInstancia.hide();

        document.getElementById("modalPago").addEventListener("hidden.bs.modal", () => {
            const modalCarritoInstancia = bootstrap.Modal.getInstance(document.getElementById("modalCarrito"));
            if (modalCarritoInstancia) modalCarritoInstancia.hide();
        }, { once: true });

        document.getElementById("modalCarrito").addEventListener("hidden.bs.modal", () => {
            const toast = new bootstrap.Toast(document.getElementById("toastExito"));
            toast.show();
        }, { once: true });
});
           
        }
    }, 100);
});

