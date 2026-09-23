// ¡Escribe tu código debajo de esta línea!
function FriendList(lista){
    this.listaAmigos = lista
    this.imprimir = function(){
        console.log(lista)
    }
    
}
let cantidad = parseInt(process.argv[3])
let array = [];
for (let i = 4; i<= cantidad+3;i++ ){
    array.push(process.argv[i])
}
const listaAmigos = new FriendList(array)
listaAmigos.imprimir()

// ¡Escribe tu código encima de esta línea!