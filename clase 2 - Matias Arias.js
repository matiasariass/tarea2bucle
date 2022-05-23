debugger
let username = prompt("Ingrese su nombre: ")
let numero = parseInt(prompt("Ingresar clave de apertura"))
for(let i = 0; i < numero; i++){
    console.log("hola")

    if(numero == 6){
        console.log("Bienvenido!")
    } else{
        alert("El " + numero + " ingresado es incorrecto")
        console.log("ERRRRRRRRROR")
    }
}
