const displayValorAnterior = document.getElementById('valor-anterior');
const displatValorActual = document.getElementById('valor-actual');
const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('.operador');
//const calculadora = new Calculadora();
//console.log(calculadora.sumar(2,3)) prueba de funcionamiento en consola

const pantalla = new Pantalla(displayValorAnterior, displatValorActual);
botonesNumeros.forEach(boton => {
    boton.addEventListener('click', ()=> pantalla.agregarNumero(boton.innerHTML));
});

botonesOperadores.forEach(boton => {
    boton.addEventListener('click', ()=> pantalla.computar(boton.value))
});