function typingWriteNumber(num){ //recebe o numero clicado por parametro e escreve no visor.
    let numero = num;

    let visor = document.getElementById("painel");
    
    if(visor.innerText == 0){
        visor.innerText = num;     
    }else{
        visor.innerText += num;
    } 
}

function limpa(){ //quando o botão C é acionado, ele limpa o visor.
   document.getElementById("painel").innerText = "0";
}

function corrige(){ //caso o número do visor seja diferente de zero, o ultimo algarismo é apagada
    let corrige = document.getElementById("painel").innerText;
    let newCorrige ="";
   
    for(let i=0; i<(corrige.length-1);i++){
        newCorrige += corrige[i];
    }

    document.getElementById("painel").innerText = newCorrige;

    if(newCorrige = ""){
        limpa();
    }
}


function virgula(){ //adiciona virgula
    let virgula = document.getElementById("painel").innerText;
    let lastChar = virgula.length -1; // armazena o ultimo elemento do vetor
    let cont=false;

    

    for(i=0; i<virgula.length;i++){ //verifica se há mais de uma virgula no visor, caso haja: cont = true.
        if(virgula[i]==','){
            cont=true;
        }else if(virgula[i]=="+" || virgula[i]=="-"){ //cont = false caso haja uma operação, pois assim possibilita a inserção de mais um numero com virgula nos elementos à direita da operação.
            cont = false;
        }else if(virgula[i]=="/" || virgula[i]=="x"){
            cont = false;
        }
    }

    if(cont==false){
        if(virgula[lastChar]>=0 && virgula[lastChar]<=9){ //verifica se o ultimo elemento é um numero e não uma operação.
            virgula = document.getElementById("painel").innerText + ',';
            document.getElementById("painel").innerText = virgula;
        }    
    }
}

function operacao(operacao){
    let op = operacao;
    let cont = false; //quando for true, significa que tem algo que impossibilita de uma nova operação ser lançada.

    let visor = document.getElementById("painel");
    
    let lastChar = visor.innerText.length-1; //armazena o ultimo elemento da string do visor.
    
    //verifica se ultimo elemento da string impossibilita a adição de uma operação.
    if(visor.innerText[lastChar] == ','|| visor.innerText[lastChar] == '/'){
        cont = true;
    }else if(visor.innerText[lastChar] == 'x' ||visor.innerText[lastChar] == '-'){
        cont = true;
    }else if(visor.innerText[lastChar] == "+"){
        cont = true;
    }

    if(cont==false){ //adiciona operação no visor.
        visor.innerText += op;
    }
}

function resultado(){//calcula o resultado da operação no visor. 
    let visor = document.getElementById('painel').innerText;
    let num1 = '';
    let num2 = '';
    let operacao = 'nada';
    let result = 0;

    for(i=0; i<visor.length;i++){ //separando os elementos da operação
        if(visor[i] == "/" || visor[i] == "x"){
            operacao = visor[i];
        }else if(visor[i] == "-" || visor[i] == "+"){
            operacao = visor[i];
        }else if(operacao == 'nada'){
            num1 += visor[i];
        }else{
            num2 += visor[i];
        }
    }
    //num1 = trataVirgula(num1);
    //num2 = trataVirgula(num2);

    alert(num1)
    alert(num2)

    switch(operacao){
        case '+':
        //result = parseFloat(num1)+Number.parseFloat(num2);
            break;
        case '-':
            result = Number(num1)-Number(num2);
            break;
        case 'x':
            result = Number(num1)*Number(num2);
            break;
        case '/':
            result = Number(num1)/Number(num2);
            break;
        default:
            alert("error");
    }
    alert(result)
}

function trataVirgula(num){ //troca a virgula por ponto.
    let numero = num;
    for(let i=0; i<numero.length;i++){
        if(numero[i]==','){
            numero[i]='.';
        }
    }
    return numero;
}

