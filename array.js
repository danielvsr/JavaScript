/*Dado el array = [1,2,3,4,5,6]*/
/*let array = [1,2,3,4,5,6]*/
/*
1- Iterar por todos los elementos dentro de un array utilizando while y mostrarlos en pantalla.
let i = 0
while (i < array.length){
    i++
    console.log(array[i])
}

2- Iterar por todos los elementos dentro de un array utilizando for y mostrarlos en pantalla.
for (i = 0; i < array.length; i++){
    console.log(array[i])
}

3- Iterar por todos los elementos dentro de un array utilizando .forEach y mostrarlos en pantalla.
array.forEach(element => console.log(element))

4- Mostrar todos los elementos dentro de un array sumándole uno a cada uno.
let array2 = array.map(suma)
function suma(i){
    return i + 1
}
console.log(array2)

5- Generar una copia de un array pero con todos los elementos incrementado en 1.
let array2 = array.map(suma)
function suma(i){
    return i + 1
}
console.log(array2)
Array.prototype.push.apply(array, array2)
console.log(array)

6- Calcular el promedio
let elementos = array.length
let suma = 0
    for (i=0; i < elementos; i++){
        suma = suma + array[i];
    }
console.log(suma)
console.log(elementos)    
let promedio = (suma / elementos)
console.log(promedio)

7- Crear un array vacío, luego generar 20 números al azar y guardarlos en un array.
let random = []
console.log(random)
function getNumeros(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
getNum = (min, max)=> {return Math.floor(Math.random() * (max - min)) + min} --> CON ARROW FUNCTION

for(i = 0; i < 20; i ++){
    random[i]=getNumeros(0,100)
} 
console.log(random)

8- Crear un array vacío, luego generar N números al azar y guardarlos en un array, 
N es introducido por el usuario a través de un prompt.
let random = []
let cantidad = Number(prompt("Ingrese la cantidad de numeros en su Array: "))
getNum = (min, max)=> {return Math.floor(Math.random() * (max - min)) + min}
for(i = 0; i < cantidad; i ++){
    random[i]=getNum(0,100)
} 
 console.log(random)

9- Dado un array que contiene ["azul", "amarillo", "rojo", "verde", "café", "rosa"] 
determinar si un color introducido por el usuario a través de un prompt 
se encuentra dentro del array o no.
let colores = ["azul", "amarillo", "rojo", "verde", "café", "rosa"]
console.log(colores)
let color = prompt("Ingrese un color: ")
color = color.toLowerCase()
console.log(color)

console.log(colores.includes(color))
if(colores.includes(color)){
    console.log(`Usted a ingresado un color valido: ${color}`)
}else{
    console.log("El color ingresado no es valido")
}
*/
/*
10- El usuario ingrese un string con varias palabras separadas por coma en un popup y se deben convertir 
en un array, (el usuario ingresa: "1,2,3,4,5" y se convierte en [1,2,3,4,5])
let dato = "1,2,3,4,5"
let array = dato.split(',');
console.log(array)
*/

/*
11- Convertir un array ingresado dentro del código en un string (existe un método en javascript para hacerlo)
let array = [1,2,3,4,5,6]
let str =  array.toString()
console.log(str)
*/

/*
Unión, intersección y conteo
12- Existen dos arrays, cada uno con 5 palabras, generar un nuevo array con la intersección de ambos elementos. 
(Ejemplo: [1,2,3] unión [1,2,4] = [1,2]

let array = [1,2,3]
let array1 = [1,2,4]
let union = array.concat(array1)
let resultado = union.filter((valor, indice) =>{
    return union.indexOf(valor) === indice
})
console.log(resultado)
let buscar = resultado.filter(element => element< 3)
console.log(buscar)
*/
/*
13- Existen dos arrays, cada uno con 5 palabras, generar un nuevo array con la unión de ambos elementos, 
(Ejemplo: [1,2,3] unión [1,2,4] = [1,1,2,2,3,4])
let array = [1,2,3]
let array1 = [1,2,4]
let union = array.concat(array1)
union.sort()
console.log(union)
*/
/*
14- El usuario ingresa dos conjuntos de números separados por coma, el programa debe determinar si 
ambos conjuntos tienen la misma cantidad de números.

15- El usuario ingresa dos conjuntos de números separados por coma, si ambos conjuntos tienen la misma 
cantidad de elementos mostrar un arreglo que contenga la suma de cada elemento. 
(Ejemplo: [1,2,3] + [2,3,4] = [3,5,7])
let array = [1,2,3]
let array1 = [2,3,4]
var suma = []

for(x=0; x< array.length; x++){
    suma[x] = array[x]+array1[x]
}
console.log(suma)
*/
/*
16- Crear una función que reciba un arreglo con números y devuelva un nuevo arreglo con solo los números pares, 
hint: utilizar reduce() COMO HACER CON REDUCE()??
function arreglo(){
    let dato = Number(prompt("Ingrese la cantidad de numeros que desea tener su lista: "))
    var array = []
    var pares = []
    for(i=0; i< dato; i++){
        array[i]=Number(prompt("Ingrese numero: "))
        if(array[i] % 2 == 0){
            pares.push(array[i]);
        }
    }
    console.log(pares) 
}
arreglo()
*/
/*
17- Crear una función que reciba un arreglo con palabras, crear un nuevo arreglo que contenga solo las 
palabras que empiezan con una vocal.
function arreglo(){
    let dato = Number(prompt("Ingrese la cantidad de palabras que desea tener su lista: "))
    var array = []
    var vocal =['a', "e", "i", "o", "u"]
    var nuevo = []
    for(i=0; i< dato; i++){
        array[i]=prompt("Ingrese su palabra: ")
        console.log(array[i].charAt(0))
        //Aca comparo la primer letra con la lista de vocales --> si es true, se agrega.
        if(array[i].charAt(0) === vocal[0] || array[i].charAt(0) === vocal[1] 
        || array[i].charAt(0) === vocal[2] || array[i].charAt(0) === vocal[3] 
        || array[i].charAt(0) === vocal[4]){
            nuevo.push(array[i])
        }
    }
    console.log(nuevo)
}
arreglo()
*/
/*
18- Crear un método que permite intercambiar las posiciones de dos elementos de un arreglo en base a sus índices 
ej:

 arr = [1,2,3]
 swap(arr, 0, 1)
 console.log(arr) // [2,1,3]

19- Realizar el mismo ejercicio anterior pero que en esta ocasión devuelva un arreglo nuevo con los datos cambiados.

 arr = [1,2,3]
 new_arr = swap(arr, 0, 1)
 console.log(arr) // [1,2,3]
 console.log(new_arr) // [2,1,3]
/*
20- Crear una función que reciba un arreglo y que cree uno nuevo con todos los elementos 
ordenados de menor a mayor, (sin ocupar el método .sort)
function lista(){
    let dato = Number(prompt("Ingrese la cantidad de numeros que desea tener su lista: "))
    var array = []
    var nuevoArray = []
    for(i=0; i< dato; i++){
        array[i]=Number(prompt("Ingrese numero: "))
        nuevoArray.push(array[i]);   
    }
    console.log(nuevoArray.sort()) 
}
lista()
*/
/*
21- Crear una función que reciba un arreglo y que cree uno nuevo con todos los elementos 
ordenados de mayor a menor.
function lista(){
    let dato = Number(prompt("Ingrese la cantidad de numeros que desea tener su lista: "))
    var array = []
    var nuevoArray = []
    for(i=0; i< dato; i++){
        array[i]=Number(prompt("Ingrese numero: "))
        nuevoArray.push(array[i]);   
    }
    console.log(nuevoArray.sort(function(a, b){return b - a})) 
}
lista()
*/
/*
Arreglos de arreglos
Crear una función que permite aplanar un arreglo dado, Ejemplo:

 var arr = [[1,2,3],[4,5,6],[7,8,9]];
 console.log(aplanar(arr)); // [1,2,3,4,5,6,7,8,9]

 Crear una función que divida un arreglo en dos partes con la misma cantidad de elementos (o una diferencia de máximo un elemento) y devuelva un arreglo que contenga al grupo1 y al grupo2

 var arr = [1,2,3,4,5,6,7,8];
 console.log(split(arr)); // [[1,2,3,4], [5,6,7,8]]
 */