//Array de objetos:

const productos = [
    {
        nombre: 'Almohadon Terracota',
        imagen: './img/Productos/almohadon-liso-2.png',
        valor: 1200
    },
    {
        nombre: 'Canasto de Yute',
        imagen: './img/Productos/canasto-yute-1.png',
        valor: 3000
    },
    {
        nombre: 'Difusor y Spray',
        imagen: './img/Productos/combo-aromas-1.png',
        valor: 1500
    },
    {
        nombre: 'Manta Waffle',
        imagen: './img/Productos/manta-waffle-1.png',
        valor: 2400
    },
    {
        nombre: 'Home Spray',
        imagen: './img/Productos/spray-1.png',
        valor: 900
    },
    {
        nombre: 'Velon Bombe',
        imagen: './img/Productos/velon-bombe-2.png',
        valor: 1500
    },
    {
        nombre: 'Almohadon Flowers',
        imagen: './img/Productos/almohadon-spring-1.jpg',
        valor: 1200
    },
    {
        nombre: 'Cubre Edredon',
        imagen: './img/Productos/almohadon-liso-2.png',
        valor: 15000
    },
    {
        nombre: 'Manta Corderito',
        imagen: './img/Productos/manta-corderito-3.png',
        valor: 3000
    },
    {
        nombre: 'Manta XXL',
        imagen: './img/Productos/manta-xxl-1.jpg',
        valor: 3600
    },
    {
        nombre: 'Alfombra Light',
        imagen: './img/Productos/alfombra-5.jpg',
        valor: 4500
    },
    {
        nombre: 'Individual Antimancha',
        imagen: './img/Productos/mantel-antimancha-5.png',
        valor: 900
    }
]

//DOM - Creo cards de productos utilizando Bootstrap:
const contenedorProductos = document.getElementById("contenedorProductos");


productos.forEach( productos => {
    let div = document.createElement("div");
    div.innerHTML = ` <div class="col">
                        <div class="card h-100">
                            <img src=" ${productos.imagen} " class="card-img-top" alt=" ${productos.nombre} ">
                            <div class="card-body">
                                <h5 class="card-title"> ${productos.nombre} </h5>
                                <h6 class="card-title"> $${productos.valor} </h6>
                                <a href="#" class="btn btn-secondary">Agregar al carrito</a>
                            </div>
                        </div>
                    </div> `

    contenedorProductos.appendChild(div);
})