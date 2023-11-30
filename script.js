let entrada1 = 0;
let entrada2 = 0;
let operador = "";
let resultado = 0;
let textareaSuperior = document.getElementById("textComplete");
let textareaInferior = document.getElementById("input");

function limparTudoTextArea(){
    textareaSuperior.textContent = "";
    textareaInferior.textContent = "";
    entrada1 = 0;
    entrada2 = 0;
    operador = "";
    resultado = 0;
}

function apagarUltimaEntrada(){
    textareaInferior.textContent = "";
}

function apagarUltimoNumero(){
    textareaInferior.textContent = textareaInferior.textContent.slice(0, textareaInferior.textContent.length - 1);
}

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
        
        if(!textareaInferior.textContent){
            entrada1 = 0;
        }
        entrada1 = Number(textareaInferior.textContent);
        
        if(id === "somar"){
            operador = "+";
            textareaSuperior.textContent = textareaInferior.textContent + " + ";
            textareaInferior.textContent = "";
        }
        if(id === "subtrair"){
            operador = "-";
            textareaSuperior.textContent = textareaInferior.textContent + " - ";
            textareaInferior.textContent = "";
        }
        if(id === "dividir"){
            operador = "/";
            textareaSuperior.textContent = textareaInferior.textContent + " / ";
            textareaInferior.textContent = "";
        }
        if(id === "multiplicar"){
            console.log("multiplicar 1")
            operador = "*";
            textareaSuperior.textContent = textareaInferior.textContent + " * ";
            textareaInferior.textContent = "";
        }
        return;
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
        if(!textareaInferior.textContent){
            textareaInferior.textContent = "0";
        }
        entrada2 = Number(textareaInferior.textContent);

        if(id === "somar"){
            botaoIgualdade();
            operador = "+";
            entrada1 = Number(resultado);
            textareaSuperior.textContent = textareaInferior.textContent + " + ";
            textareaInferior.textContent = "";
        }
        if(id === "subtrair"){
            botaoIgualdade();
            operador = "-";
            entrada1 = Number(resultado);
            textareaSuperior.textContent = textareaInferior.textContent + " - ";
            textareaInferior.textContent = "";
        }
        if(id === "dividir"){
            botaoIgualdade();
            operador = "/";
            entrada1 = Number(resultado);
            textareaSuperior.textContent = textareaInferior.textContent + " / ";
            textareaInferior.textContent = "";
        }
        if(id === "multiplicar"){
            botaoIgualdade();
            operador = "*";
            entrada1 = Number(resultado);
            textareaSuperior.textContent = textareaInferior.textContent + " * ";
            textareaInferior.textContent = "";
        }
    }
}

function botaoIgualdade(){
    if(!entrada1 || !entrada2) return;

    if(textareaSuperior.textContent !== "" && operador == ""){
        textareaSuperior.textContent = "0";
        entrada1 = 0;
        entrada2 = 0;
        resultado = "";
        textareaInferior.textContent = resultado;
        return;
    }

    textareaSuperior.textContent += textareaInferior.textContent + " =";
    
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