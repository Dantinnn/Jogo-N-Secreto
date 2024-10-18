let listasMensagemSorteadas = [];
let numeroLimite = 10;
let numeroSecreto = numeroAleatorio();
let tentativas = 1;
let palavraTentativa = tentativas >= 1 ? "tentaviva" : "tentativas";



function exibirTextoNaTela(tag,texto){
    let campo = document.querySelector(tag);
campo.innerHTML = texto;
responsiveVoice.speak(texto, "Brazilian Portuguese Female", 
    {rate:1.2});
}






function mensagemInicial(){
    exibirTextoNaTela('h1','jogo do Numero secreto');
    exibirTextoNaTela('p','escolha um numero entre 1 e 10');  
}

mensagemInicial()





function verificarChute(){
    let chute = document.querySelector('input').value;
    if(chute == numeroSecreto){
        exibirTextoNaTela('h1',"Acertou");
        let mensagemTentativas = `voce descobriu o numero secreto com ${tentativas} ${palavraTentativa}! `;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(chute > numeroSecreto){
            exibirTextoNaTela('p',"o numero secreto e menor");
        }else{
            exibirTextoNaTela('p',"o numero secreto e maior") ;
        }
        tentativas++;
        limparcampo();
    }
    
} 




function numeroAleatorio() {
    let numeroEscolido = parseInt(Math.random() * numeroLimite +1);
    let quantidadeDeNumerosNaLista = listasMensagemSorteadas.length;
    if(quantidadeDeNumerosNaLista = numeroLimite){
        listasMensagemSorteadas = [];

    }



    if(listasMensagemSorteadas.includes(numeroEscolido)){
       return numeroAleatorio();
    }else{
        listasMensagemSorteadas.push(numeroEscolido);
        console.log(listasMensagemSorteadas);
        return numeroEscolido;
    }
    
}

function limparcampo(){
    chute = document.querySelector('input');
    chute.value = '';
}




function reiniciarJogo(){
    numeroSecreto = numeroAleatorio();
    limparcampo();
    tentativas = 1
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}
