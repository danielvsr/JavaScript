/*
*************************************************************************************
* 1- Escribir un programa que muestre un prompt donde el usuario ingresa un número, *
*    luego muestra otro prompt pidiendo otro número, finalmente el programa muestra *
*    una alerta con el resultado de la suma.                                        *
*************************************************************************************

let num1 = Number(prompt("Ingrese su primer numero"))
let num2 = Number(prompt("Ingrese su segundo numero"))

resultado = num1 + num2

alert(resultado)
document.write(resultado)


/*
********************************************************************************
* 2- Crear un programa donde el usuario ingrese en un prompt la temperatura en *
* Celcius y el programa muestre en una alerta la temperatura en Fahrenheit.    *
********************************************************************************

let celcius = Number(prompt("Ingrese la temperatura Celcius"))
let fahrenheit=(celcius * 9/5)+32

alert("La temperatura Fahrenheit es de:" + fahrenheit)
document.write(fahrenheit)
console.log(fahrenheit)
*/

/*
***********************************************************************************
* 3- Pedir un número a un usuario a través de un prompt y luego dividirlo por 10, *
* ejemplo: 5 / 10 igual 0.5                                                       *
***********************************************************************************

let num1 = Number(prompt("Ingrese su número"))
let resultado = num1 / 10

alert("Su resultado es: " + resultado)
*/

/*
***********************************************************************************
* 4- Si a = [1,2,3] crear un script que determine de muestre un alert del         *
* tipo de dato de a.                                                              *
***********************************************************************************

let a = [1, 2 , 3]

alert("Nuestra variable 'a' es un tipo de variable: " + typeof a)
*/