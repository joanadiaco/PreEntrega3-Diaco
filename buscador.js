const resultado = document.getElementById("resultado");

const searchform = document.getElementById("searchForm");


const filtrar = () => {

    resultado.innerHTML = '';

    const nombre = searchForm.value.toUpperCase();
    for ( let nombre of productos ){
        let nombre = productos.nombre.toUpperCase();

        if ( nombre.indexOf(productos) !== -1){
            resultado.innerHTML += `
                                    <div class="col">
                                        <div class="card h-100">
                                            <img src=" ${productos.imagen} " class="card-img-top" alt=" ${productos.nombre} ">
                                            <div class="card-body">
                                                <h5 class="card-title"> ${productos.nombre} </h5>
                                                <h6 class="card-title"> $${productos.valor} </h6>
                                                <a href="#" class="btn btn-secondary">Agregar al carrito</a>
                                            </div>
                                        </div>
                                    </div>
                                    `
        }

    }
    if ( resultado.innerHTML === '' ){
        resultado.innerHTML = `<li>No encontramos este producto!</li>`
    }
}

searchform.addEventListener("keyup", filtrar);
filtrar();

