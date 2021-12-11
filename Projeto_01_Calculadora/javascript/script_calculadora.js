/* Variáveis Globais que irão guradar os dados dos cálculos (numeros, operações e resultados) */
var numero_1 = null;
var numero_2 = null;
var numero = "";
var resultado = null;
var operacao = '';

/* Função que captura todos os numeros e operações para o cálculo */
function inserir(num){
    if(document.getElementById('tela').innerHTML == operacao){
        document.getElementById('tela').innerHTML = "";
    }
    numero = document.getElementById('tela').innerHTML;
    if(num == '+' || num == '-' || num == '/' || num =='*'){
        operacao = num;
        document.getElementById('tela').innerHTML = num;
        if(resultado == null){
            capturar_numero(); // captura numero 1, inserido antes da operacao
        }
    } else {
        document.getElementById('tela').innerHTML = numero + num;
        numero = numero + num;
    }
}

/* Função responsável por alocar os numeros inseridos para as devidas variáveis e converte-los de String para Float*/
function capturar_numero(){
    if(resultado == null){
        if(numero_1 == null){
            numero_1 = Number.parseFloat(numero);
        } else {
            if(numero_2 == null){
                numero_2 =  Number.parseFloat(numero);
            }
        }
    } else {
        numero_2 = parseFloat(numero);
    }
}

/* Função que limpa a tela e todas as variáveis globais */
function limpar_visor(){
    numero_1 = null;
    numero_2 = null;
    numero = "";
    resultado = null;
    operacao = '';
    document.getElementById('tela').innerHTML = "";
}

/* Função que realiza o cálculo de fato e exibe o resultado na tela */
function calcular(){
    capturar_numero();

    if(resultado == null){
        resultado = numero_1;
    }
    if (operacao == '+'){
        resultado = resultado + numero_2;
    } else if (operacao == '-'){
        resultado = resultado - numero_2;
    } else if (operacao == '*') {
        resultado = resultado * numero_2;
    } else if (operacao == '/') {
        resultado = resultado / numero_2;
    }

    document.getElementById('tela').innerHTML = resultado.toFixed(6);
}