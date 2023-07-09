fetch('http://localhost:4000/ux-productos/servicio-al-cliente/v1/mostrar-productos')
  .then(response => response.json())
  .then(data => {
    // Manipula los datos recibidos
    console.log(data);
    // Utiliza los datos en tu frontend
    const productos = data.productos;
    // ...
    // Realiza las operaciones necesarias con los datos en tu frontend
    // Por ejemplo, puedes recorrer los productos y mostrarlos en tu página HTML
    const productosContainer = document.getElementById('container_bd');

    productos.forEach(producto => {
        const nombre = producto.nombre;
        const precioVenta = producto.precio_venta;
        const imagen = producto.imagen;

        const productoDiv = document.createElement('div');
  
        // Crea elementos HTML para mostrar los datos del producto
        const nombreElement = document.createElement('h3');
        nombreElement.textContent = producto.nombre;
        
        const precioElement = document.createElement('p');
        precioElement.textContent = `Precio de venta: ${producto.precio_venta}`;
        precioElement.style.background = 'red'
     
        
                // Agrega los elementos al productoDiv
        productoDiv.appendChild(nombreElement);
        productoDiv.appendChild(precioElement);
        productoDiv.appendChild(stockElement);
        
        // Agrega el productoDiv al contenedor en tu HTML
        productosContainer.appendChild(productoDiv);
    });
  })
  .catch(error => {
    console.error('Error al obtener los datos:', error);
    // Maneja el error en tu frontend
  });