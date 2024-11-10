const productos = [
    {
      id: 1,
      nombre: "Camiseta FC Barcelona",
      precio: 50000,
      equipo: "FC Barcelona",
      marca: "Nike",
      imagen: "https://fenixdeportes.com.co/products/camiseta-barcelona-2024",
    },
    {
      id: 2,
      nombre: "Camiseta Real Madrid",
      precio: 55000,
      equipo: "Real Madrid",
      marca: "Adidas",
      imagen:
        "https://www.adidas.co/camiseta-uniforme-local-real-madrid-23-24-ninos/IB0011.html",
    },
    {
      id: 3,
      nombre: "Camiseta Manchester United",
      precio: 52000,
      equipo: "Manchester United",
      marca: "Adidas",
      imagen:
        "https://www.adidas.co/camiseta-local-manchester-united-23-24-ninos/IP1736.html",
    },
    {
      id: 4,
      nombre: "Camiseta Bayern Munich",
      precio: 53000,
      equipo: "Bayern Munich",
      marca: "Adidas",
      imagen:
        "https://www.adidas.co/camiseta-uniforme-local-fc-bayern-23-24-ninos/IB1480.html",
    },
    {
      id: 5,
      nombre: "Camiseta Juventus",
      precio: 54000,
      equipo: "Juventus",
      marca: "Adidas",
      imagen: "https://www.adidas.co/camiseta-local-juventus-24-25/IS8002.html",
    },
    {
      id: 6,
      nombre: "Camiseta Paris Saint-Germain",
      precio: 56000,
      equipo: "Paris Saint-Germain",
      marca: "Nike",
      imagen:
        "https://www.nike.com/es/t/primera-equipacion-stadium-paris-saint-germain-2024-25-camiseta-de-futbol-replica-dri-fit-z3f5Nq/FN8795-411",
    },
    {
      id: 7,
      nombre: "Camiseta Liverpool",
      precio: 51000,
      equipo: "Liverpool",
      marca: "Nike",
      imagen:
        "https://www.nike.com/es/t/primera-equipacion-stadium-liverpool-fc-2024-25-camiseta-de-futbol-replica-dri-fit-QrNMjf/FN8798-688",
    },
    {
      id: 8,
      nombre: "Camiseta Chelsea",
      precio: 52000,
      equipo: "Chelsea",
      marca: "Nike",
      imagen:
        "https://www.nike.com/es/t/primera-equipacion-match-chelsea-fc-2024-25-camiseta-de-futbol-authentic-dri-fit-adv-xD4lRc/FN8760-496",
    },
    {
      id: 9,
      nombre: "Camiseta Manchester City",
      precio: 53000,
      equipo: "Manchester City",
      marca: "Puma",
      imagen:
        "https://eu.puma.com/es/es/pd/camiseta-original-manchester-city-1.%C2%AA-equipacion-24%2F25-para-hombre/775050.html?dwvar_775050_color=01",
    },
    {
      id: 10,
      nombre: "Camiseta Arsenal",
      precio: 54000,
      equipo: "Arsenal",
      marca: "Adidas",
      imagen: "https://www.adidas.co/camiseta-local-arsenal-24-25/IT6141.html",
    },
    {
      id: 11,
      nombre: "Camiseta Tottenham Hotspur",
      precio: 55000,
      equipo: "Tottenham Hotspur",
      marca: "Nike",
      imagen:
        "https://www.nike.com/es/t/primera-equipacion-stadium-tottenham-hotspur-2024-25-camiseta-de-futbol-replica-dri-fit-WVSKR3/FN8794-101",
    },
    {
      id: 12,
      nombre: "Camiseta Inter Milan",
      precio: 56000,
      equipo: "Inter Milan",
      marca: "Nike",
      imagen:
        "https://www.nike.com/es/t/primera-equipacion-stadium-inter-de-milan-2024-25-camiseta-de-futbol-replica-dri-fit-73FWDV/FN8787-440",
    },
    {
      id: 13,
      nombre: "Camiseta AC Milan",
      precio: 57000,
      equipo: "AC Milan",
      marca: "Puma",
      imagen:
        "https://eu.puma.com/es/es/pd/camiseta-original-ac-milan-1.%C2%AA-equipacion-24%2F25-para-hombre/774949.html?dwvar_774949_color=01",
    },
    {
      id: 14,
      nombre: "Camiseta Borussia Dortmund",
      precio: 58000,
      equipo: "Borussia Dortmund",
      marca: "Puma",
      imagen:
        "https://eu.puma.com/es/es/pd/camiseta-borussia-dortmund-copa-24%2F25-para-hombre/775680.html?dwvar_775680_color=01",
    },
    {
      id: 15,
      nombre: "Camiseta Atletico Madrid",
      precio: 59000,
      equipo: "Atletico Madrid",
      marca: "Nike",
      imagen:
        "https://www.nike.com/es/t/primera-equipacion-stadium-atletico-de-madrid-2024-25-camiseta-de-futbol-replica-dri-fit-w0T5DC/FN8790-406",
    },
    {
      id: 16,
      nombre: "Camiseta Sevilla",
      precio: 60000,
      equipo: "Sevilla",
      marca: "Castore",
      imagen:
        "https://shop.sevillafc.es/products/camiseta-2%C2%AA-champions-sevilla-fc-23-24-nino",
    },
    {
      id: 17,
      nombre: "Camiseta Roma",
      precio: 61000,
      equipo: "Roma",
      marca: "Adidas",
      imagen: "https://www.adidas.co/camiseta-local-as-roma-23-24-/IK7166.html",
    },
    {
      id: 18,
      nombre: "Camiseta Napoli",
      precio: 62000,
      equipo: "Napoli",
      marca: "EA7",
      imagen:
        "https://futboldeprimera.com.co/producto/camiseta-napoli-2023-2024-local-azul-version-jugador/",
    },
    {
      id: 19,
      nombre: "Camiseta Lazio",
      precio: 63000,
      equipo: "Lazio",
      marca: "Mizuno",
      imagen:
        "https://shopee.com.co/S.S-.-Camiseta-Lazio-23-24-F%C3%BAtbol-Casa-Fuera-De-Hombres-Deportes-Calidad-Superior-S-4XL-Fans-Versi%C3%B3n-i.887386923.19856633376",
    },
    {
      id: 20,
      nombre: "Camiseta Ajax",
      precio: 64000,
      equipo: "Ajax",
      marca: "Adidas",
      imagen:
        "https://www.adidas.co/camiseta-local-ajax-amsterdam-23-24/HZ7725.html",
    },
    {
      id: 21,
      nombre: "Camiseta Benfica",
      precio: 65000,
      equipo: "Benfica",
      marca: "Adidas",
      imagen:
        "https://www.slbenfica.pt/es-es/loja/equipamentos/principal/replica-da-camisola-principal-do-sl-benfica-20242025",
    },
    {
      id: 22,
      nombre: "Camiseta Porto",
      precio: 66000,
      equipo: "Porto",
      marca: "New Balance",
      imagen:
        "https://www.r21imports.com.br/pe/productos/camiseta-porto-local-24-25-azul-y-blanca-aficionado-hombre-new-balance/",
    },
    {
      id: 23,
      nombre: "Camiseta Sporting CP",
      precio: 67000,
      equipo: "Sporting CP",
      marca: "Nike",
      imagen:
        "https://shopee.com.co/2024-25-Temporada-Sporting-CP-Home-F%C3%BAtbol-Camiseta-De-Manga-Corta-Deportiva-i.871501433.28300985006",
    },
    {
      id: 24,
      nombre: "Camiseta Celtic",
      precio: 68000,
      equipo: "Celtic",
      marca: "Adidas",
      imagen:
        "https://www.adidas.es/camiseta-primera-equipacion-celtic-fc-23-24/HY3343.html",
    },
    {
      id: 25,
      nombre: "Camiseta Rangers",
      precio: 69000,
      equipo: "Rangers",
      marca: "Castore",
      imgaen:
        "https://shopee.com.co/Ranger.s-Camiseta-De-F%C3%BAtbol-Deportiva-Camisetas-De-Hombre-2024-25-Calidad-Superior-S-4XL-Versi%C3%B3n-De-Los-Aficionados-i.1356729325.29361493617?sp_atk=559e853f-2714-4adf-b43b-c9136bc6a7b6&xptdk=559e853f-2714-4adf-b43b-c9136bc6a7b6",
    },
    {
      id: 26,
      nombre: "Camiseta Galatasaray",
      precio: 70000,
      equipo: "Galatasaray",
      marca: "Puma",
      imagen:
        "https://shopee.com.co/Camiseta-Galatasaray-24-25-Home-Away-De-F%C3%BAtbol-Para-Hombre-i.1346573854.25485605644",
    },
    {
      id: 27,
      nombre: "Camiseta Fenerbahce",
      precio: 71000,
      equipo: "Fenerbahce",
      marca: "Puma",
      imagen:
        "https://shopee.com.co/Camiseta-De-F%C3%BAtbol-De-La-Mejor-Calidad-2024-2025-Fenerbah%C3%A7e-S.K-i.968543119.18876136102",
    },
    {
      id: 28,
      nombre: "Camiseta Besiktas",
      precio: 72000,
      equipo: "Besiktas",
      marca: "Adidas",
      imagen:
        "https://planetafobal.com/2023/06/camisetas-adidas-del-besiktas-2023-24/#gallery-82164-1",
    },
    {
      id: 29,
      nombre: "Camiseta Olympique Lyon",
      precio: 73000,
      equipo: "Olympique Lyon",
      marca: "Adidas",
      imagen:
        "https://planetafobal.com/2023/06/camisetas-adidas-del-besiktas-2023-24/#gallery-82164-1",
    },
    {
      id: 30,
      nombre: "Camiseta Olympique Marsella",
      precio: 74000,
      equipo: "Olympique Marsella",
      marca: "Puma",
      imagen:
        "https://www.footballkitarchive.com/es/olympique-marseille-2023-24-home-kit/",
    },
    {
      id: 31,
      nombre: "Camiseta Monaco",
      precio: 75000,
      equipo: "Monaco",
      marca: "Kappa",
      imagen: "https://www.kappa-col.com/deportes/futbol/as-monaco",
    },
    {
      id: 32,
      nombre: "Camiseta PSV Eindhoven",
      precio: 76000,
      equipo: "PSV Eindhoven",
      marca: "Puma",
      imagen:
        "https://www.amazon.com/-/es/PUMA-Camiseta-Eindhoven-Home-23-XL/dp/B0B782DFJF",
    },
    {
      id: 33,
      nombre: "Camiseta Feyenoord",
      precio: 77000,
      equipo: "Feyenoord",
      marca: "Castore",
      imagen: "https://es.castore.com/products/heren-feyenoord-thuisshirt-2324",
    },
    {
      id: 34,
      nombre: "Camiseta Anderlecht",
      precio: 78000,
      equipo: "Anderlecht",
      marca: "Joma",
      imagen:
        "https://www.footballkitarchive.com/es/rsc-anderlecht-2023-24-third-kit/",
    },
    {
      id: 35,
      nombre: "Camiseta Club Brugge",
      precio: 79000,
      equipo: "Club Brugge",
      marca: "Castore",
      imagen:
        "https://es.castore.com/products/club-brugge-mens-24-25-home-ss-shirt",
    },
    {
      id: 36,
      nombre: "Camiseta Shakhtar Donetsk",
      precio: 80000,
      equipo: "Shakhtar Donetsk",
      marca: "Puma",
      imagen:
        "https://www.footballkitarchive.com/es/shakhtar-donetsk-2022-23-home-kit/",
    },
    {
      id: 37,
      nombre: "Camiseta Dynamo Kyiv",
      precio: 81000,
      equipo: "Dynamo Kyiv",
      marca: "New Balance",
      imagen:
        "https://www.tradeinn.com/goalinn/es/new-balance-camiseta-de-manga-corta-primera-equipacion-fc-dynamo-kyiv-22-23/139043270/p",
    },
    {
      id: 38,
      nombre: "Camiseta Zenit",
      precio: 82000,
      equipo: "Zenit",
      marca: "Kelme",
      imagen:
        "https://www.footballkitarchive.com/es/zenit-saint-petersburg-2023-24-home-kit/",
    },
    {
      id: 39,
      nombre: "Camiseta Spartak Moscow",
      precio: 83000,
      equipo: "Spartak Moscow",
      marca: "Jogel",
      imagen:
        "https://www.footballkitarchive.com/es/spartak-moscow-2-2024-home-kit/",
    },
    {
      id: 40,
      nombre: "Camiseta Red Bull Salzburg",
      precio: 84000,
      equipo: "Red Bull Salzburg",
      marca: "Puma",
      imagen:
        "https://www.footballkitarchive.com/es/red-bull-salzburg-2022-23-away-kit/",
    },
  ];

let productosMostrados = 0;
let mensajeFinalMostrado = false;

function cargarProductos() {
    const listaProductos = document.getElementById('listaProductos');
    setTimeout(() => {
        for (let i = productosMostrados; i < productosMostrados + 20 && i < productos.length; i++) {
            const producto = productos[i];
            const tarjetaProducto = document.createElement('div');
            tarjetaProducto.classList.add('tarjeta');
            tarjetaProducto.innerHTML = `
                <h3>${producto.nombre}</h3>
                <p>Precio: $${producto.precio.toLocaleString()}</p>
                <p>Descripción: ${producto.descripcion}</p>
                <button onclick="verDetalle(${producto.id})">Ver Detalle</button>
            `;
            listaProductos.appendChild(tarjetaProducto);
        }
        productosMostrados += 20;
        if (productosMostrados >= productos.length && !mensajeFinalMostrado) {
            const mensajeFinal = document.createElement('p');
            mensajeFinal.textContent = 'No hay más productos por cargar.';
            listaProductos.appendChild(mensajeFinal);
            mensajeFinalMostrado = true;
        }
    }, 1000); // Retraso de 1000 milisegundos (1 segundo)
}

document.getElementById('listaProductos').addEventListener('scroll', function () {
    const { scrollTop, scrollHeight, clientHeight } = this;
    if (scrollTop + clientHeight >= scrollHeight) {
        cargarProductos();
    }
});

document.addEventListener('DOMContentLoaded', function() {
    cargarProductos();
});

function verDetalle(idProducto) {
  const producto = productos.find(prod => prod.id === idProducto);
  const detalleContainer = document.getElementById('productoSeleccionado');
  detalleContainer.innerHTML = `
      <h3>${producto.nombre}</h3>
      <p>Precio: $${producto.precio.toLocaleString()}</p>
      <p>${producto.descripcion}</p>
      <div class="detalle-cantidad-talla">
          <div class="cantidad">
              <label for="cantidadProducto">Cantidad:</label>
              <input type="number" id="cantidadProducto" min="1">
          </div>
          <div class="talla">
              <label for="tallaProducto">Talla:</label>
              <select id="tallaProducto">
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
              </select>
          </div>
      </div>
      <button onclick="agregarAlCarrito(${producto.id})">Agregar al Carrito</button>
  `;
}


function filtrarProductos() {
    const marcaSeleccionada = document.getElementById('filtroTipo').value;
    const listaProductos = document.getElementById('listaProductos');
    listaProductos.innerHTML = '';
    productosMostrados = 0;
    const productosFiltrados = marcaSeleccionada === '' ? productos : productos.filter(producto => producto.marca === marcaSeleccionada);
    productosFiltrados.forEach((producto, index) => {
        const tarjetaProducto = document.createElement('div');
        tarjetaProducto.classList.add('tarjeta');
        tarjetaProducto.innerHTML = `
            <h3>${producto.nombre}</h3>
            <p>Precio: $${producto.precio.toLocaleString()}</p>
            <p>Descripción: ${producto.descripcion}</p>
            <button onclick="verDetalle(${producto.id})">Ver Detalle</button>
        `;
        listaProductos.appendChild(tarjetaProducto);
    });
}

function filtrarPorEquipo() {
    const equipoSeleccionado = document.getElementById('filtroEquipo').value.toLowerCase();
    const listaProductos = document.getElementById('listaProductos');
    listaProductos.innerHTML = '';
    productosMostrados = 0;
    const productosFiltrados = equipoSeleccionado === '' ? productos : productos.filter(producto => producto.equipo.toLowerCase().includes(equipoSeleccionado));
    productosFiltrados.forEach((producto, index) => {
        const tarjetaProducto = document.createElement('div');
        tarjetaProducto.classList.add('tarjeta');
        tarjetaProducto.innerHTML = `
            <h3>${producto.nombre}</h3>
            <p>Precio: $${producto.precio.toLocaleString()}</p>
            <p>Descripción: ${producto.descripcion}</p>
            <button onclick="verDetalle(${producto.id})">Ver Detalle</button>
        `;
        listaProductos.appendChild(tarjetaProducto);
    });
}

function limpiarFiltros() {
    document.getElementById('filtroTipo').value = '';
    document.getElementById('filtroEquipo').value = '';
    cargarProductos();
}
function agregarAlCarrito(idProducto) {
  const cantidad = document.getElementById('cantidadProducto').value;
  
  if (cantidad > 0) {
      // Lógica para agregar el producto al carrito
      const producto = productos.find(prod => prod.id === idProducto);
      
      if (producto) {
          // Asumiendo que tienes un array llamado `carrito` para almacenar los productos
          carrito.push({ ...producto, cantidad: Number(cantidad) });
          alert('Producto agregado al carrito.');
          console.log('Carrito actual:', carrito);
      } else {
          alert('Error: Producto no encontrado.');
      }
  } else {
      alert('La cantidad debe ser un número positivo.');
  }
}
// Función para generar el catálogo dinámicamente
function generarCatalogo() {
  const catalogoContainer = document.getElementById("catalogo"); // Contenedor donde se van a agregar los productos
  
  productos.forEach(producto => {
      const productoDiv = document.createElement("div");
      productoDiv.classList.add("producto");
      productoDiv.setAttribute("data-id", producto.id);
      
      productoDiv.innerHTML = `
          <h3>${producto.nombre}</h3>
          <p>Precio: $${producto.precio}</p>
          <button onclick="agregarAlCarrito(${producto.id})">Agregar al carrito</button>
      `;
      
      catalogoContainer.appendChild(productoDiv);
  });
}