
function inserir(num)
{
    var numero = document.getElementById('entrada').innerHTML;
    document.getElementById('entrada').innerHTML = numero + num;
}
function limpar()
{
    document.getElementById('entrada').innerHTML = "";
    document.getElementById('total').innerHTML = "";
}
function voltar()
{
    var entrada = document.getElementById('entrada').innerHTML;
    document.getElementById('entrada').innerHTML = entrada.substring(0, entrada.length -1);
}
function calcular()
{
    var resultado = document.getElementById('entrada').innerHTML;
    
    if(resultado)
    {
        document.getElementById('total').innerHTML = eval(resultado);
    }
    else
    {
        document.getElementById('entrada').innerHTML = "Você precisa inserir dois ou mais valores..."
    }
}
﻿