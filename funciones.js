/******************************************************************************************
* 1- Cear una función que reciba un valor cualquiera y lo muestre ocupando console.log(), *
* llamar a la función pasando el valor 5                                                  *
******************************************************************************************/
/* CON FUNCTION ()
function valorCualquiera(parametro){
    if(parametro === 5){
        console.log(`El valor del parametro es: ${parametro}`)
    } else{
        console.log("Debe colocar el numero 5")
    }
}
*/
/* CON ARROW FUNCTION
let dato=Number(prompt("Ingrese un valor cualquiera: "))
let valorCualquiera = parametro => parametro===5 ? console.log(`El valor del parametro es: ${parametro}`):console.log("Debe colocar el numero 5")
valorCualquiera(dato)
*/

/***********************************************************************************************
* 2- La siguiente función devuelve undefined en lugar de la multiplicación, se pide arreglarla *
*                                                                                              *
* function multiply(a, b){                                                                     *
*     a * b                                                                                    *
* }                                                                                            *
***********************************************************************************************/
/*  SOLUCION FUNCTION()
function multiply(a, b){
    return a * b
  }
*/
/* SOLUCION CON ARROW FUNCTION
  let multiply = (a, b) => a * b
  let num1 = Number(prompt("Ingrese el primer número: "))
  let num2 = Number(prompt("Ingrese el segundo número: "))
  alert(`El valor de la multiplicación es: ${multiply(num1, num2)}`)
 /*

/***************************************************************************
* 3- Crear una función que reciba dos valores y devuelva la suma de ellos. *
***************************************************************************/
/*  SOLUCION FUNCTION()
function suma (a, b){
    return a + b
}
*/
/* SOLUCION CON ARROW FUNCTION
let suma = (a, b) => a + b
let num1 = Number(prompt("Ingrese el primer numero: "))
let num2 = Number(prompt("Ingrese el segundo numero: "))
alert(`El valor de la suma es: ${suma(num1, num2)}`)
*/

/*************************************************************************
* 4- Crear una función que reciba un número entero y muestre un error si *
* el tipo de dato pasado es de otro tipo.                                *
**************************************************************************
*/
/* SOLUCION FUNCTION()
function datoNumber(parametro){
    if (isNaN(parametro)){
        console.log("ERROR: Debe ingresar un dato númerico")
    } else{
        console.log("El dato ingresado es correcto")
        console.log(`El valor del numero es: ${parseInt(parametro)}`)
    }
}
*/
/* SOLUCION CON ARROW FUNCTION
let dato = Number(prompt("Ingrese su dato: "))

let datoNumber = parametro => isNaN(parametro) ? console.log("ERROR: Debe ingresar un dato númerico") 
: console.log(`El valor del numero es: ${parseInt(parametro)}`)

datoNumber(dato)
*/

/*********************************************************************
* 5- Crear una función autoejecutable que muestre "muuu" en pantalla *
*********************************************************************/
/* SOLUCIONES FUNCTION() --> BUSQUE INFORMACION PARA ENTENDER DE QUE TRATABA
(function(){
    console.log("muuu Classic")
})();A
((function(){
    console.log("muuu Crockford's")
})());
+function(){
    console.log("muuu Unary")
}();
!function(){
    console.log("muuu Facebook")
}();
!1%-+~function(){
    console.log("muuu Crazy")
}();
*/
/*ESTA VERSION LA PROBE YO PARA VER SI SERVIA Y EFECTIVAMENTE SIRVIO
(()=>console.log("muuu Arrow"))();
*/

/*********************************************
* 6- Calcular años restantes para jubilarse. *
* Datos: se jubila a los 65.                 *
* Se debe pedir el nombre y la edad          *
*********************************************/
/* SOLUCION FUNCTION()
function jubilacion(anio){
    let nombre = prompt("Ingrese su nombre: ")
    let anioNacimiento = Number(prompt("Ingrese su año de nacimiento: "))
    let edad = anio - anioNacimiento
    if (edad >= 65){
        console.log(`${nombre} puede jubilarse dado que tiene ${edad} años`)
    } else {
        let restante = 65 - edad
        console.log(`${nombre} no puede jubilarse dado que le restan ${restante} años para jubilarse`)
    }
}
let year = Number(prompt("Ingrese el año actual: "))
jubilacion(year)
*/
/*SOLUCION ARROW FUNCTION
let jubilacion = anio => edad >= 65 ? console.log(`${nombre} puede jubilarse dado que tiene ${edad} años`)
: console.log(`${nombre} no puede jubilarse dado que le restan ${restante} años para jubilarse`)

let year = Number(prompt("Ingrese el año actual: "))
let nombre = prompt("Ingrese su nombre: ")
let anioNacimiento = Number(prompt("Ingrese su año de nacimiento: "))
let edad = year - anioNacimiento
let restante = 65 - edad
jubilacion(year)
*/
