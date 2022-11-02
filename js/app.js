let respuesta = document.getElementById("aws")
let boton = document.getElementById("bt")
let botonSalir = document.getElementById("btn")
let contador = 0
let total = 0

function juego() {

    let dinero = document.getElementById("pl").value
    dinero = parseInt(dinero)
    let moneda = document.getElementById("op").value
    moneda = parseInt(moneda)
    let aleatorio = 1 + parseInt((Math.random() * 2))
    let continuar = true

    do {

        if (moneda == aleatorio) {
            contador = contador + 1
            total += dinero + dinero
            respuesta.innerHTML = `<p> <i class="fa-solid fa-check"></i> Excelente has ganado la cantidad de dinero que llevas en este momento es ${total}</p>`
        }

        else {
            contador = contador + 1
            total = dinero - dinero
            respuesta.innerHTML = `<p> <i class="fa-solid fa-xmark"></i> Lastima perdistes la cantidad de dinero que llevas en este momento es ${total}</p>`
        }

        continuar = false

    }

    while (continuar != false)

}

boton.addEventListener('click', juego)

function salida() {

    respuesta.innerHTML = `<p> <i class="fa-solid fa-triangle-exclamation"></i> El dinero que ganaste jugando fue ${total} y la cantidad de partidas que jugaste fue ${contador}</p>`

}

botonSalir.addEventListener('click', salida)