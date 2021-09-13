/*
1- Mostrar todos los números de 1 a n aumentando de 1 en 1 donde n lo ingresa el usuario en un prompt.
*/

/*
let n=Number(prompt("Ingrese un numero: "))
let i=0
while(i<n){
    i++    
    console.log(i)
}
*/

/*
2- Mostrar todos los números de 1 a N aumentando de 2 en 2 donde n lo ingresa el usuario en un prompt.
*/

/*
let n=Number(prompt("Ingrese un numero: "))
let i=0
while(i<n){
    i=i+2    
    console.log(i)
}
/*

/*
3- Mostrar todos los números de N a 1 disminuyendo de 1 en 1 donde n lo ingresa el usuario en un prompt.
*/

/*
let n=Number(prompt("Ingrese un numero: "))
let i=0
while(i<n){
    n=--n   
    console.log(n)
}
*/

/*
4- Escribir utilizando console.log la tabla del 9 hasta 9x10.
*/

/*
let i=0
let x=90
while(i<=x){
    i=i+9
    console.log(i)
}
*/

/*
5- Pedir al usuario que ingrese un número en un prompt, hacer la suma de todos los dígitos, 
validar que el número ingresado no contenga letras.
*/
let num1=prompt("Ingrese su numero: ")
let i=0
let newNum1 = 0
let newNum2 = 0
let valoresAceptados = 0
do{
    if (num1.match(valoresAceptados)){
        let valoresAceptados = /^[0-9]+$/    
    } else {
        console.log("No es numerico")
    }
    let newNum1=(num1.charAt(0))
    let newNum2=(num1.charAt(1))
    let resultado= newNum1 + newNum2
    i++
} while(i < 1){

}
console.log(resultado)
/*
Realizar la suma de todos los números pares entre N y M donde N y M los ingresa un usuario.

Realizar la sumatoria de los primeros N números, donde N es ingresado por el usuario.

Realizar el factorial de los primeros N números.
*/