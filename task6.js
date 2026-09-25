// ¡Escribe tu código debajo de esta línea!


function DescribirLista(lista) {
  this.lista = lista;
  this.imprimirLista = function(){
    
    lista.forEach(element => {
      console.log(element)
    });

    
  }
}

let cantidad = parseInt(process.argv[2]) //leo tamaño de la lista
let arreglo = [];

let posicion = 3

for (let i = 0 ; i< cantidad ;i++ ){

    const cantidadItem = Number(process.argv[posicion]);
    const nombre = process.argv[posicion + 1];

  arreglo.push({
    cantidad: cantidadItem,
    nombre: nombre
  })
    posicion +=2

}



const listaCompras = new DescribirLista(arreglo);

listaCompras.imprimirLista()
// ¡Escribe tu código encima de esta línea!