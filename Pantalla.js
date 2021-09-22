class Pantalla{
    constructor(displayValorAnterior, displayValorActual){
        this.displayValorActual = displayValorActual;
        this.displayValorAnterior = displayValorAnterior;
        this.calculadora = new Calculadora();
        this.tipoOperacion = undefined;
        this.valorActual = '';
        this.valorAnterior = '';
        this.signos = {
            sumar: '+',
            restar: '-',
            multiplicar: 'x',
            dividir: '%'
        }
    }

    agregarNumero(numero){
        if (numero === '.' && this.valorActual.includes('.')){ //para no poner más de un punto
            return;
        }
        this.valorActual = this.valorActual.toString() + numero.toString();
        this.imprimirValores();
    }
    calcular(){
        const valorAnterior = parseFloat(this.valorAnterior); //volver a convertir en número
        const valorActual = parseFloat(this.valorActual);
        if(isNaN(valorActual) || isNaN(valorAnterior)){
            return;
        }
        else{
            this.valorActual = this.calculadora[this.tipoOperacion](valorAnterior, valorActual);
        }
    }
    computar(tipo){
        this.tipoOperacion !== 'igual' && this.calcular();
        this.tipoOperacion = tipo;
        this.valorAnterior = this.valorActual || this.valorAnterior; //si sucede, se queda valor actual. Si no, se queda el valora anterior
        this.valorActual = '';
        this.imprimirValores();
    }
    borrar(){
        this.valorActual = this.valorActual.toString().slice(0,-1);
        this.imprimirValores();
    }
    borrarTodo(){
        this.valorActual = '';
        this.valorAnterior = '';
        this.tipoOperacion = undefined;
        this.imprimirValores();
    }
    imprimirValores(){
        this.displayValorActual.textContent = this.valorActual;
        this.displayValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.tipoOperacion] || ''}`;
    }
}