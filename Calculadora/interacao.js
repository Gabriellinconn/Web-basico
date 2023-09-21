function calculo(){
    var num1 = parseFloat(prompt ("Informe o primeiro número: "));
    var operacao = prompt ("Informe a operação: ");
    var num2 = parseFloat(prompt ("Informe o segundo número: "));

    if(operacao == '+'){
        let resultadoSoma = document.createElement('p');
        Soma = num1 + num2;
        resultadoSoma.textContent = ('O resultado da soma de '+num1+' e '+num2+' é '+Soma);
        document.body.appendChild(resultadoSoma);
    }

    else if(operacao == '-'){

        let resultadoMenos = document.createElement('p');
        Menos = num1 - num2;
        resultadoMenos.textContent = ('O resultado da subtração de '+num1+' e '+num2+' é '+Menos);
        document.body.appendChild(resultadoMenos);
    }

    else if(operacao == '/'){

        let resultadoDivisao = document.createElement('p');
        Divisao = (num1 / num2);
        resultadoDivisao.textContent = ('O resultado da Divisão de '+num1+' e '+num2+' é '+Divisao);
        document.body.appendChild(resultadoDivisao);
}

else if (operacao == '*'){

    let resultadoVezes = document.createElement('p');
    Vezes = (num1 * num2);
    resultadoVezes.textContent = ('O resultado da Multiplicação de '+num1+' e '+num2+' é '+Vezes);
    document.body.appendChild(resultadoVezes);
}

}