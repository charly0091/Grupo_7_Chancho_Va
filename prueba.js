/*
 * Completa la función 'odernarPedidos' a continuación.
 *
 * La función debe retornar un ARREGLO DE OBJETOS.
 * La función recibe un ARREGLO DE OBJETOS 'pedidos' por parámetro.
 *
 * No modifiques nada por fuera del cuerpo de la función.
 */

let pedidos = [
    {nombre: "Pedro",
    pedido: {
        nombre: "Pizza",
        precio: 1000
        }
    },
    {nombre: "Juan",
    pedido: {
        nombre: "Hamburguesa",
        precio: 800
        }
    },
    {nombre: "Pablo",
    pedido: {
        nombre: "Empanada",
        precio: 200
        }
    },
    {nombre:'Franco',
     pedido: {
        nombre:'Fernet',
         precio: 260
        }
    }
]

function ordenarPedidos(pedidos) {
    // Tu código aquí:
    let pedidosOrdenados = []
    for (let i = 0; i < pedidos.length; i++) {
        let pedido = pedidos[i]
        let precio = pedido.pedido.precio
        let j = 0
        while (j < pedidosOrdenados.length && pedidosOrdenados[j].pedido.precio < precio) {
            j++
        }
        pedidosOrdenados.splice(j, 0, pedido)
    }
    return pedidosOrdenados
}

console.log(ordenarPedidos(pedidos))