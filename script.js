let entrada1 = 0;
let entrada2 = 0;
let operador = "";
let resultado = 0;
let textareaSuperior = document.getElementById("textComplete");
let textareaInferior = document.getElementById("input");

function limparTudoTextArea(){
    textareaSuperior.textContent = "";
    textareaInferior.textContent = "";
}

function apagarUltimaEntrada(){
    textareaInferior.textContent = "";
}

function apagarUltimoNumero(){
    textareaInferior.textContent = textareaInferior.textContent.slice(0, textareaInferior.textContent.length - 1);
}

 //clicar no botão
 //se o operador nao tiver sido escolhido
 //mostra o valor na tela
 //se o operador for selecionado
 //mostra o valor formado pra tela de cima junto com o operador
 //proximo passo é selecionar o segundo valor da operação
 
function clicarButton(id){
    if(!operador){
        if(id === "zero"){
            textareaInferior.textContent += "0";
        }
        if(id === "um"){
            textareaInferior.textContent += "1";
        }
        if(id === "dois"){
            textareaInferior.textContent += "2";
        }
        if(id === "tres"){
            textareaInferior.textContent += "3";
        }
        if(id === "quatro"){
            textareaInferior.textContent += "4";
        }
        if(id === "cinco"){
            textareaInferior.textContent += "5";
        }
        if(id === "seis"){
            textareaInferior.textContent += "6";
        }
        if(id === "sete"){
            textareaInferior.textContent += "7";
        }
        if(id === "oito"){
            textareaInferior.textContent += "8";
        }
        if(id === "nove"){
            textareaInferior.textContent += "9";
        }
        if(id === "virgula"){
            textareaInferior.textContent += ".";
        }
        if(id === "somar"){
            operador = "+";
            entrada1 = Number(textareaInferior.textContent);
            textareaSuperior.textContent = textareaInferior.textContent + " + ";
            textareaInferior.textContent = "";
        }
        if(id === "subtrair"){
            operador = "-";
            entrada1 = Number(textareaInferior.textContent);
            textareaSuperior.textContent = textareaInferior.textContent + " - ";
            textareaInferior.textContent = "";
        }
        if(id === "dividir"){
            operador = "/";
            entrada1 = Number(textareaInferior.textContent);
            textareaSuperior.textContent = textareaInferior.textContent + " / ";
            textareaInferior.textContent = "";
        }
        if(id === "multiplicar"){
            operador = "*";
            entrada1 = Number(textareaInferior.textContent);
            textareaSuperior.textContent = textareaInferior.textContent + " * ";
            textareaInferior.textContent = "";
        }
    }

    if(operador !== ""){
        if(id === "zero"){
            textareaInferior.textContent += "0";
        }
        if(id === "um"){
            textareaInferior.textContent += "1";
        }
        if(id === "dois"){
            textareaInferior.textContent += "2";
        }
        if(id === "tres"){
            textareaInferior.textContent += "3";
        }
        if(id === "quatro"){
            textareaInferior.textContent += "4";
        }
        if(id === "cinco"){
            textareaInferior.textContent += "5";
        }
        if(id === "seis"){
            textareaInferior.textContent += "6";
        }
        if(id === "sete"){
            textareaInferior.textContent += "7";
        }
        if(id === "oito"){
            textareaInferior.textContent += "8";
        }
        if(id === "nove"){
            textareaInferior.textContent += "9";
        }
        if(id === "virgula"){
            textareaInferior.textContent += ".";
        }
        entrada2 = Number(textareaInferior.textContent);

        if(id === "somar"){
            botaoIgualdade();
            operador = "+";
            textareaSuperior.textContent = textareaInferior.textContent + " + ";
            textareaInferior.textContent = "";
        }
        if(id === "subtrair"){
            botaoIgualdade();
            operador = "-";
            textareaSuperior.textContent = textareaInferior.textContent + " - ";
            textareaInferior.textContent = "";
        }
        if(id === "dividir"){
            botaoIgualdade();
            operador = "/";
            textareaSuperior.textContent = textareaInferior.textContent + " / ";
            textareaInferior.textContent = "";
        }
        if(id === "multiplicar"){
            botaoIgualdade();
            operador = "*";
            textareaSuperior.textContent = textareaInferior.textContent + " * ";
            textareaInferior.textContent = "";
        }
    }
}

//se clicar no botão de igual
 //executar a operação de acordo com o operador
 //acrescenta o segundo valor na tela de cima
 //mostra o resultado da operação na tela de baixo
function botaoIgualdade(){
    textareaSuperior.textContent += textareaInferior.textContent + " = ";

    if(operador === "+"){
        resultado = entrada1 + entrada2;
    }
    if(operador === "-"){
        resultado = entrada1 - entrada2;
    }
    if(operador === "/"){
        resultado = entrada1 / entrada2;
    }
    if(operador === "*"){
        resultado = entrada1 * entrada2;
    }

    operador = "";
    textareaInferior.textContent = resultado;
}