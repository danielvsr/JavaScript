/*****************************************************************************************
* 1- Crear un programa que determine si un número introducido en un Prompt es par o no,  *
* la respuesta será mostrada en una alerta.                                              *
******************************************************************************************
let num1=Number(prompt("Ingrese el número deseado: "))
let resultado = num1 % 2

if (resultado == 0){
    alert("El numero es par")
}else{
    alert("El numero es impar")
}
*/

/*****************************************************************************************
* 2- Crear un programa que determine si un número introducido en un Prompt es divisible  *
* por 5 o no, mostrar el resultado con console.log                                       *
******************************************************************************************
let num1=Number(prompt("Ingrese el número deseado: "))
let resultado = num1 % 5

if (resultado == 0){
    alert("El numero elegido es divisible por 5")
}else{
    alert("El numero elegido no es divisible por 5")
}
*/

/****************************************************************************************
* 3- Crear un programa que determine si un número introducido en un popup es divisible  *
* por 11 y 5 o no, mostrar el resultado con console.log --> BUSQUE AYUDA EN INTERNET    *
*****************************************************************************************
let num1=Number(prompt("Ingrese el número deseado: "))

if (num1 % 5 === 0){
    console.log("El número elegido es divisible por 5")
} else if(num1 % 11 === 0){
    console.log("El número elegido es divisible por 11")
}else{
    console.log("El número elegido no es divisible ni por 11 ni por 5")
}
*/

/***************************************************************************************
* 4- Crear un programa que le pida al usuario dos números en un Prompt y luego muestre *
* en un alerta el número mayor.                                                        *
****************************************************************************************
let num1=Number(prompt("Ingrese el primer número: "))
let num2=Number(prompt("Ingrese el segundo número: "))

if(num1 > num2){
    alert("El primer numero: " + num1 + ", es mayor")
} else if (num1 < num2){
    alert("El segundo numero: " + num2 + ", es mayor") 
} else{
    alert("Los numeros son iguales")
}
*/

/*************************************************************************************
* 5-Crear un programa que le pida al usuario primero un números al usuario a través  * 
* de un prompt y luego un segundo número para luego mostrar en un alerta el número   *
* mayor, esta vez realizar el ejercicio ocupando un if ternario.                     *
**************************************************************************************

let num1=Number(prompt("Ingrese el primer número: "))
let num2=Number(prompt("Ingrese el segundo número: "))

let mayor= (num1 > num2) ? "El primer numero es el mayor" : "El segundo numero es el mayor"

alert(mayor)
*/

/************************************************************************************
* 6-Crear un programa que determine si un string introducido por un usuario empieza *
* con un número o con una letra.                                                    *   
*************************************************************************************

let dato = prompt("Ingrese un dato: ")
let newDato=(dato.charAt(0))

let indice=(isNaN(newDato)) ? "El dato introducido empieza con un String" : "El dato introducido es un Número"

console.log(indice)
*/

/**************************************************************************************
* 7-Crear un programa donde se introduzcan los tres ángulos internos de un triángulo  *
* y se determine si el triángulo es válido o no.                                      *
***************************************************************************************

let ang1=Number(prompt("Ingrese el primer angulo: "))
let ang2=Number(prompt("Ingrese el segundo angulo: "))
let ang3=Number(prompt("Ingrese el tercer angulo: "))

let resultado=((ang1 + ang2 + ang3)===180)?"Los angulos ingresados forman un triángulo":"Los angulos ingresados no forman un triángulo"

console.log(resultado)
*/

/**********************************************************
* 7-Determinar si una palabra empieza con mayúscula o no. *
***********************************************************
let dato = prompt("Ingrese un palabra: ")
let newDato=(dato.charAt(0))
let newDato2= (newDato.toUpperCase())
console.log(newDato)
console.log(newDato2)

if(newDato === newDato2){
    console.log("La palabra ingresada empieza con Mayuscula")
}else{
    console.log("La palabra ingresada empieza con Minuscula")
}
*/

/********************************************
* 8-Determinar si un año dado es bisiesto.  *
*********************************************
let anio=Number(prompt("Ingrese el año deseado: "))
if(anio % 4 ===0){
    console.log("Es bisiesto")
}else{
    console.log("No es bisiesto")
}
console.log(anio)
*/

/*****************************************************************************************
* 9-Escribir un programa JavaScript en el que el programa escoge al azar un entero       *
* entre 1 y 10, el usuario , luego a el usuario se le pedirá que introduzca un número    *
* en un popup para intentar adivinarlo. Si la entrada del usuario coincide con el        *
* número de conjetura, el programa mostrará un mensaje de "buen trabajo" de lo contrario *
* mostrará un mensaje de "No corresponde".      math.random                                            *
******************************************************************************************/

/*************************************************************************
* 10-El siguiente código tiene un error que se produce en algunos casos  *
* especiales, descubrirlo y arreglarlo:                                  *
**************************************************************************
/* 
// Obtener edad

 if(edad < 13) {
 	console.log("Es niño");
 }if(edad < 18 ){
  	console.log("Es adolecente");
 } else{
  	console.log("Es adolecente");
 }
 EN LA SEGUNDA CONDICION DEL IF FALTO EL ELSE
 */

/******************************************************************************
* 11- Negar las siguientes expresión de forma de mantener la tabla de verdad, *
* crear el programa que muestre el valor de la expresión a medida que se      *
* cambia los valores de a y b.                                                *
*******************************************************************************
!a && !b
!a || !b
*/
/*
Pablo --> 14, 8, 16 
Maria --> 12, 18, 10
Promedio de cada alumno?
Quien tiene mayor promedio?
Esta aprobado? Debe ser mayor a 13
*/

