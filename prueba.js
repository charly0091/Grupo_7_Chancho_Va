function sumarLikesDeUsuario(objetoUsuario) {
    // El parámetro "objetoUsuario" tiene una propiedad llamada "posts" que es un arreglo.
    // Este arreglo contiene objetos (post).
    // Cada post posee una propiedad llamada "likes". Esta propiedad es un número.
    // Debes sumar los likes de todos los post y retornar el resultado.
    // Tu código:
    let contador = 0
    for (let i = 0; i < objetoUsuario.posts.length; i++) {
       contador = contador + objetoUsuario.posts[i].likes
    }
    return contador;
}
let objetoUsuario = {
    posts : [{
        likes: 4
    },
    {
        likes: 3
    },
    {
        likes: 2
    },
    {
        likes: 1
    },     
    ]
}

console.log(sumarLikesDeUsuario(objetoUsuario))