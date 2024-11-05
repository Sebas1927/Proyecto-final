const productos = [
    {
      id: 1,
      nombre: "Camiseta FC Barcelona",
      precio: 50000,
      equipo: "FC Barcelona",
      imagen: "https://fenixdeportes.com.co/products/camiseta-barcelona-2024",
    },
    {
      id: 2,
      nombre: "Camiseta Real Madrid",
      precio: 55000,
      equipo: "Real Madrid",
      imagen:
        "https://www.adidas.co/camiseta-uniforme-local-real-madrid-23-24-ninos/IB0011.html",
    },
    {
      id: 3,
      nombre: "Camiseta Manchester United",
      precio: 52000,
      equipo: "Manchester United",
      imagen:
        "https://www.adidas.co/camiseta-local-manchester-united-23-24-ninos/IP1736.html",
    },
    {
      id: 4,
      nombre: "Camiseta Bayern Munich",
      precio: 53000,
      equipo: "Bayern Munich",
      imagen:
        "https://www.adidas.co/camiseta-uniforme-local-fc-bayern-23-24-ninos/IB1480.html",
    },
    {
      id: 5,
      nombre: "Camiseta Juventus",
      precio: 54000,
      equipo: "Juventus",
      imagen: "https://www.adidas.co/camiseta-local-juventus-24-25/IS8002.html",
    },
    {
      id: 6,
      nombre: "Camiseta Paris Saint-Germain",
      precio: 56000,
      equipo: "Paris Saint-Germain",
      imagen:
        "https://www.nike.com/es/t/primera-equipacion-stadium-paris-saint-germain-2024-25-camiseta-de-futbol-replica-dri-fit-z3f5Nq/FN8795-411",
    },
    {
      id: 7,
      nombre: "Camiseta Liverpool",
      precio: 51000,
      equipo: "Liverpool",
      imagen:
        "https://www.nike.com/es/t/primera-equipacion-stadium-liverpool-fc-2024-25-camiseta-de-futbol-replica-dri-fit-QrNMjf/FN8798-688",
    },
    {
      id: 8,
      nombre: "Camiseta Chelsea",
      precio: 52000,
      equipo: "Chelsea",
      imagen:
        "https://www.nike.com/es/t/primera-equipacion-match-chelsea-fc-2024-25-camiseta-de-futbol-authentic-dri-fit-adv-xD4lRc/FN8760-496",
    },
    {
      id: 9,
      nombre: "Camiseta Manchester City",
      precio: 53000,
      equipo: "Manchester City",
      imagen:
        "https://eu.puma.com/es/es/pd/camiseta-original-manchester-city-1.%C2%AA-equipacion-24%2F25-para-hombre/775050.html?dwvar_775050_color=01",
    },
    {
      id: 10,
      nombre: "Camiseta Arsenal",
      precio: 54000,
      equipo: "Arsenal",
      imagen: "https://www.adidas.co/camiseta-local-arsenal-24-25/IT6141.html",
    },
    {
      id: 11,
      nombre: "Camiseta Tottenham Hotspur",
      precio: 55000,
      equipo: "Tottenham Hotspur",
      imagen:
        "https://www.nike.com/es/t/primera-equipacion-stadium-tottenham-hotspur-2024-25-camiseta-de-futbol-replica-dri-fit-WVSKR3/FN8794-101",
    },
    {
      id: 12,
      nombre: "Camiseta Inter Milan",
      precio: 56000,
      equipo: "Inter Milan",
      imagen:
        "https://www.nike.com/es/t/primera-equipacion-stadium-inter-de-milan-2024-25-camiseta-de-futbol-replica-dri-fit-73FWDV/FN8787-440",
    },
    {
      id: 13,
      nombre: "Camiseta AC Milan",
      precio: 57000,
      equipo: "AC Milan",
      imagen:
        "https://eu.puma.com/es/es/pd/camiseta-original-ac-milan-1.%C2%AA-equipacion-24%2F25-para-hombre/774949.html?dwvar_774949_color=01",
    },
    {
      id: 14,
      nombre: "Camiseta Borussia Dortmund",
      precio: 58000,
      equipo: "Borussia Dortmund",
      imagen:
        "https://eu.puma.com/es/es/pd/camiseta-borussia-dortmund-copa-24%2F25-para-hombre/775680.html?dwvar_775680_color=01",
    },
    {
      id: 15,
      nombre: "Camiseta Atletico Madrid",
      precio: 59000,
      equipo: "Atletico Madrid",
      imagen:
        "https://www.nike.com/es/t/primera-equipacion-stadium-atletico-de-madrid-2024-25-camiseta-de-futbol-replica-dri-fit-w0T5DC/FN8790-406",
    },
    {
      id: 16,
      nombre: "Camiseta Sevilla",
      precio: 60000,
      equipo: "Sevilla",
      imagen:
        "https://shop.sevillafc.es/products/camiseta-2%C2%AA-champions-sevilla-fc-23-24-nino",
    },
    {
      id: 17,
      nombre: "Camiseta Roma",
      precio: 61000,
      equipo: "Roma",
      imagen: "https://www.adidas.co/camiseta-local-as-roma-23-24-/IK7166.html",
    },
    {
      id: 18,
      nombre: "Camiseta Napoli",
      precio: 62000,
      equipo: "Napoli",
      imagen:
        "https://futboldeprimera.com.co/producto/camiseta-napoli-2023-2024-local-azul-version-jugador/",
    },
    {
      id: 19,
      nombre: "Camiseta Lazio",
      precio: 63000,
      equipo: "Lazio",
      imagen:
        "https://shopee.com.co/S.S-.-Camiseta-Lazio-23-24-F%C3%BAtbol-Casa-Fuera-De-Hombres-Deportes-Calidad-Superior-S-4XL-Fans-Versi%C3%B3n-i.887386923.19856633376",
    },
    {
      id: 20,
      nombre: "Camiseta Ajax",
      precio: 64000,
      equipo: "Ajax",
      imagen:
        "https://www.adidas.co/camiseta-local-ajax-amsterdam-23-24/HZ7725.html",
    },
    {
      id: 21,
      nombre: "Camiseta Benfica",
      precio: 65000,
      equipo: "Benfica",
      imagen:
        "https://www.slbenfica.pt/es-es/loja/equipamentos/principal/replica-da-camisola-principal-do-sl-benfica-20242025",
    },
    {
      id: 22,
      nombre: "Camiseta Porto",
      precio: 66000,
      equipo: "Porto",
      imagen:
        "https://www.r21imports.com.br/pe/productos/camiseta-porto-local-24-25-azul-y-blanca-aficionado-hombre-new-balance/",
    },
    {
      id: 23,
      nombre: "Camiseta Sporting CP",
      precio: 67000,
      equipo: "Sporting CP",
      imagen:
        "https://shopee.com.co/2024-25-Temporada-Sporting-CP-Home-F%C3%BAtbol-Camiseta-De-Manga-Corta-Deportiva-i.871501433.28300985006",
    },
    {
      id: 24,
      nombre: "Camiseta Celtic",
      precio: 68000,
      equipo: "Celtic",
      imagen:
        "https://www.adidas.es/camiseta-primera-equipacion-celtic-fc-23-24/HY3343.html",
    },
    {
      id: 25,
      nombre: "Camiseta Rangers",
      precio: 69000,
      equipo: "Rangers",
      imgaen:
        "https://shopee.com.co/Ranger.s-Camiseta-De-F%C3%BAtbol-Deportiva-Camisetas-De-Hombre-2024-25-Calidad-Superior-S-4XL-Versi%C3%B3n-De-Los-Aficionados-i.1356729325.29361493617?sp_atk=559e853f-2714-4adf-b43b-c9136bc6a7b6&xptdk=559e853f-2714-4adf-b43b-c9136bc6a7b6",
    },
    {
      id: 26,
      nombre: "Camiseta Galatasaray",
      precio: 70000,
      equipo: "Galatasaray",
      imagen:
        "https://shopee.com.co/Camiseta-Galatasaray-24-25-Home-Away-De-F%C3%BAtbol-Para-Hombre-i.1346573854.25485605644",
    },
    {
      id: 27,
      nombre: "Camiseta Fenerbahce",
      precio: 71000,
      equipo: "Fenerbahce",
      imagen:
        "https://shopee.com.co/Camiseta-De-F%C3%BAtbol-De-La-Mejor-Calidad-2024-2025-Fenerbah%C3%A7e-S.K-i.968543119.18876136102",
    },
    {
      id: 28,
      nombre: "Camiseta Besiktas",
      precio: 72000,
      equipo: "Besiktas",
      imagen:
        "https://planetafobal.com/2023/06/camisetas-adidas-del-besiktas-2023-24/#gallery-82164-1",
    },
    {
      id: 29,
      nombre: "Camiseta Olympique Lyon",
      precio: 73000,
      equipo: "Olympique Lyon",
      imagen:
        "https://planetafobal.com/2023/06/camisetas-adidas-del-besiktas-2023-24/#gallery-82164-1",
    },
    {
      id: 30,
      nombre: "Camiseta Olympique Marseille",
      precio: 74000,
      equipo: "Olympique Marseille",
      imagen:
        "https://www.footballkitarchive.com/es/olympique-marseille-2023-24-home-kit/",
    },
    {
      id: 31,
      nombre: "Camiseta Monaco",
      precio: 75000,
      equipo: "Monaco",
      imagen: "https://www.kappa-col.com/deportes/futbol/as-monaco",
    },
    {
      id: 32,
      nombre: "Camiseta PSV Eindhoven",
      precio: 76000,
      equipo: "PSV Eindhoven",
      imagen:
        "https://www.amazon.com/-/es/PUMA-Camiseta-Eindhoven-Home-23-XL/dp/B0B782DFJF",
    },
    {
      id: 33,
      nombre: "Camiseta Feyenoord",
      precio: 77000,
      equipo: "Feyenoord",
      imagen: "https://es.castore.com/products/heren-feyenoord-thuisshirt-2324",
    },
    {
      id: 34,
      nombre: "Camiseta Anderlecht",
      precio: 78000,
      equipo: "Anderlecht",
      imagen:
        "https://www.footballkitarchive.com/es/rsc-anderlecht-2023-24-third-kit/",
    },
    {
      id: 35,
      nombre: "Camiseta Club Brugge",
      precio: 79000,
      equipo: "Club Brugge",
      imagen:
        "https://es.castore.com/products/club-brugge-mens-24-25-home-ss-shirt",
    },
    {
      id: 36,
      nombre: "Camiseta Shakhtar Donetsk",
      precio: 80000,
      equipo: "Shakhtar Donetsk",
      imagen:
        "https://www.footballkitarchive.com/es/shakhtar-donetsk-2022-23-home-kit/",
    },
    {
      id: 37,
      nombre: "Camiseta Dynamo Kyiv",
      precio: 81000,
      equipo: "Dynamo Kyiv",
      imagen:
        "https://www.tradeinn.com/goalinn/es/new-balance-camiseta-de-manga-corta-primera-equipacion-fc-dynamo-kyiv-22-23/139043270/p",
    },
    {
      id: 38,
      nombre: "Camiseta Zenit",
      precio: 82000,
      equipo: "Zenit",
      imagen:
        "https://www.footballkitarchive.com/es/zenit-saint-petersburg-2023-24-home-kit/",
    },
    {
      id: 39,
      nombre: "Camiseta Spartak Moscow",
      precio: 83000,
      equipo: "Spartak Moscow",
      imagen:
        "https://www.footballkitarchive.com/es/spartak-moscow-2-2024-home-kit/",
    },
    {
      id: 40,
      nombre: "Camiseta Red Bull Salzburg",
      precio: 84000,
      equipo: "Red Bull Salzburg",
      imagen:
        "https://www.footballkitarchive.com/es/red-bull-salzburg-2022-23-away-kit/",
    },
  ];

  
// Detectar scroll para cargar más productos
document
.getElementById("listaProductos")
.addEventListener("scroll", function () {
  const { scrollTop, scrollHeight, clientHeight } = this;
  if (scrollTop + clientHeight >= scrollHeight) {
    cargarProductos();
  }
});

// Función para mostrar el detalle del producto seleccionado
function mostrarDetalleProducto(idProducto) {
const producto = productos.find((prod) => prod.id === idProducto);
const detalleContainer = document.getElementById("productoSeleccionado");
detalleContainer.innerHTML = `
      <h3>${producto.nombre}</h3>
      <p>Equipo: ${producto.equipo}</p>
      <p>Precio: $${producto.precio}</p>
  `;
}
let producto = []; // Array que contiene todos los productos
let productosMostrados = 0; // Contador de productos mostrados

function cargarProductos() {
    const listaProductos = document.getElementById('listaProductos');
    for (let i = productosMostrados; i < productosMostrados + 15 && i < productos.length; i++) {
        const producto = productos[i];
        const tarjetaProducto = document.createElement('div');
        tarjetaProducto.classList.add('tarjeta');
        tarjetaProducto.innerHTML = `
            <h3>${producto.nombre}</h3>
            <p>Precio: ${producto.precio}</p>
            <p>Descripción: ${producto.descripcion}</p>
            <button onclick="verDetalle(${i})">Ver Detalle</button>
        `;
        listaProductos.appendChild(tarjetaProducto);
    }
    productosMostrados += 15;
    if (productosMostrados >= productos.length) {
        const mensajeFinal = document.createElement('p');
        mensajeFinal.textContent = 'No hay más productos por cargar.';
        listaProductos.appendChild(mensajeFinal);
    }
}

window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        cargarProductos();
    }
});

function verDetalle(index) {
    const producto = productos[index];
    const verDetalle = document.getElementById('verDetalle');
    verDetalle.innerHTML = `
        <h3>${producto.nombre}</h3>
        <p>${producto.descripcion}</p>
        <label for="cantidadProducto">Cantidad:</label>
        <input type="number" id="cantidadProducto" min="1">
        <button onclick="agregarAlCarrito(${index})">Agregar al Carrito</button>
    `;
}

function agregarAlCarrito(index) {
    const cantidad = document.getElementById('cantidadProducto').value;
    if (cantidad > 0) {
        // Añadir al carrito y mostrar confirmación
        alert('Producto agregado al carrito.');
    } else {
        alert('La cantidad debe ser un número positivo.');
    }
}