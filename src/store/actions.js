
import axios from "axios";

export const agregarAcarrito = ({commit},{ id, producto, precio, cantidad, contador }) => {
    commit('ADD_A_CARRITO', { id, producto, precio, cantidad, contador});
}

export const sumarItem = ({commit}, producto ) => {
    commit('SUMAR_ITEM', producto );
}

export const restarItem = ({commit}, producto ) => {
    commit('RESTAR_ITEM', producto );
}

export const traerProductos = ({commit}) => {
    let url = 'arrayProductos';
    axios.get(url)
    .then(response=>{
        commit('CARGAR_PRODUCTOS',response.data)
    })

}

export const eliminarProductoEnCarrito = ({commit},producto) => {
    commit('ELIMINAR_PROD_DE_CARRITO', producto);
}
