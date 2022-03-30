export const CARGAR_PRODUCTOS = (state, productos) => {
    state.productos = productos;
}

export const SUMAR_ITEM = (state, producto) => {
    let productoBuscado = state.carrito.find(item => {
        return item.id == producto.id
    })

    let productoOriginal = state.productos.find(item => {
        return item.id == producto.id
    })
    if(productoBuscado){
        productoBuscado.contador += 1;
        productoBuscado.precio = productoOriginal.precio * productoBuscado.contador;
        productoBuscado.cantidad = productoOriginal.cantidad * productoBuscado.contador;  
    }
    
}

export const RESTAR_ITEM = (state, producto) => {
    let productoBuscado = state.carrito.find(item => {
        return item.id == producto.id
    })
    let productoOriginal = state.productos.find(item => {
        return item.id == producto.id
    })
    if(productoBuscado){
        if(productoBuscado.contador <= 1){
            ELIMINAR_PROD_DE_CARRITO(state, producto);
        } else {
            productoBuscado.contador -= 1;
            productoBuscado.precio = productoOriginal.precio * productoBuscado.contador;
            productoBuscado.cantidad = productoOriginal.cantidad * productoBuscado.contador; 
        }
    }
}

export const ADD_A_CARRITO = (state, { id, producto, precio, cantidad, contador }) => {
    
    let productoEnCarrito = state.carrito.find(item => {
        return item.id == id
    })

    if(productoEnCarrito){
        productoEnCarrito.cantidad += cantidad;
        productoEnCarrito.contador += 1;
        productoEnCarrito.precio += precio;
        return
    }

    state.carrito.push({
        id,
        producto,
        precio,
        cantidad,
        contador
    })
    
}

export const ELIMINAR_PROD_DE_CARRITO = (state, producto) => {
    state.carrito = state.carrito.filter(item => {
        return item.id !== producto.id 
    })
}

