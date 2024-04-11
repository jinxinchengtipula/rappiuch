const compras = [
    {   
        "id": "12",
        "uuid": "15414581asda1a1x",
        "nombre": "Compra en Real Plaza",
        "monto": "S/. 14.25",
        "detalle": "La compra se realizo en Real plaza La Marina a las 9:30pm",
        "productos": [
            {
                "SKU": "14815",
                "nombre": "Cuerda de pescador - 1m",
                "monto": "S/ 10.25",
                "imagen": "cuerda.jpg" // Ruta de la imagen de la cuerda
            },
            {
                "SKU": "145811",
                "nombre": "Gaseosa Inka Cola",
                "monto": "S/ 2.00",
                "imagen": "incacola.jpg" // Ruta de la imagen de la Inka Cola
            },
            {
                "SKU": "148112",
                "nombre": "Gaseosa Coca Cola",
                "monto": "S/ 2.00",
                "imagen": "cocacola.jpg" // Ruta de la imagen de la Coca Cola
            }
        ]
    },
    {
        "id": "16",
        "uuid": "15414581ytytaaddq1",
        "nombre": "Compra en Monterrico",
        "monto": "S/. 48.25",
        "detalle": "La compra se realizo en Monterrico a las 7:20pm",
        "productos": [
            {
                "SKU": "177774",
                "nombre": "Pala de montar",
                "monto": "S/ 20.25",
                "imagen": "pala.jpg" // Ruta de la imagen de la Inka Cola

            },
            {
                "SKU": "177771",
                "nombre": "Pintura SoldiMix",
                "monto": "S/ 9.00",
                "imagen": "pintura.jpg" // Ruta de la imagen de la Inka Cola

            },
            {
                "SKU": "177779",
                "nombre": "Terrocal en Pomo",
                "monto": "S/ 11.00",
                "imagen": "terrocal.jpg" // Ruta de la imagen de la Inka Cola

            }
        ]
    },
    {
        "id": "17",
        "uuid": "1566664514aa",
        "nombre": "Compra en Azangaro",
        "monto": "S/. 200",
        "detalle": "La compra se realizo en Azangaro a las 6:06pm",
        "productos": [
            {
                "SKU": "666",
                "nombre": "Vela negra",
                "monto": "S/ 200",
                "imagen": "vela.jpg" // Ruta de la imagen de la vela
            }
        ]
    }

];
// Imprimir esa lista de compras
const $misProductos = $("#misProductos");

compras.forEach((compra) => {
    const link = "producto.html?idcompra=" + compra.id;
    const template = `
        <li class="collection-item avatar" data-id="${compra.id}" data-uuid="${compra.uuid}">
            <i class="material-icons circle red">play_arrow</i>
            <span class="title">${compra.nombre}</span>
            <p>
                ${compra.detalle}        
            </p>
            <p class="precio">
                ${compra.monto}
            </p>
            <a href="${link}" class="waves-effect waves-light btn btnIcon">
                <i class="material-icons">grade</i>
                Ver producto
            </a>
        </li>
    `;
    $misProductos.append(template);
});

/*
    En esa URL vamos a leer el parametro 
    e imprimir los datos de los productos
*/
const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const idcompra = parseInt(params.get("idcompra"));

if (idcompra) {
    compras.forEach((compra) => {
        if (parseInt(compra.id) === idcompra) { 
            const mytitle = "Historial de productos de " + compra.nombre;
            $("#myTitle").html(mytitle);

            compra.productos.forEach((producto) => {
                const template = `
                    <li class="collection-item">
                        <p class="sku">SKU: ${producto.SKU}</p>
                        <div class="producto-info">
                            <img src="images/${producto.imagen}" alt="${producto.nombre}">
                            <p class="nombre">${producto.nombre}</p>
                        </div>
                        <p class="monto">${producto.monto}</p>
                    </li>
                `;
                $("#myProducts").append(template);
            });
        }
    });
}
