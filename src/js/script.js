const f_number=document.getElementById("f_number");
const val_1=document.getElementById("val_in");
const val_2=document.getElementById("val_fin");
const res=document.getElementById("res");
const reset=document.getElementById("btn_reset");
//let arraycriado=false;

const criar_array=(val_1,val_2)=>{
 
    const val1=parseInt(val_1.value);
    const val2=parseInt(val_2.value);
    let listNumber=[];
    for(let i=val1;i<=val2;i++){//cria array dos intervalos dos numeros 
      listNumber.push(i);
    }
    const iAleatorio=Math.floor(Math.random()*listNumber.length)//um indice aleatorio dos numeros gerados 
    const valor_posInd=listNumber[iAleatorio]// captura o valor no indice aleatorio 
  // consult_array(posInd);//envia o valor que esta na posicao do indice para comparação 
    comparaResult(valor_posInd)

}

const comparaResult=(vpi)=>{
 const numero_sorte=parseInt(f_number.value)
 const posval=vpi;
 console.log(posval +' '+ numero_sorte)
 if(numero_sorte!=vpi){
  res.style.display ="flex";
  res.innerHTML = "Não foi dessa vez! Seu número não foi sorteado no intervalo informado."
  setTimeout(()=>{
    res.style.display="none";
    },5000);
 }else{
  res.style.display ="flex";
  res.innerHTML = "Parabéns! Seu número foi sorteado!"
  setTimeout(()=>{
    res.style.display="none";
    },5000);
 }
}

const imprime_erros=(n)=>{
  res.style.display ="flex";

  switch(n){
    case 0:
       res.innerHTML = "Por favor, preencha o número da sorte."
    break;  
    case 1:
       res.innerHTML = "Informe o valor inicial do intervalo."
   break;  
   case 2:
       res.innerHTML = "Informe o valor final do intervalo."
   break;
   case 3:
    res.innerHTML = "O valor inicial deve ser menor que o valor final."
  break; 
   case 4:
       res.innerHTML = "O número da sorte está abaixo do intervalo escolhido."
   break;
   case 5:
 
     default:
    break
  }

  setTimeout(()=>{
    res.style.display="none";
    },5000);
}

const Erros=(f_number,val_1,val_2)=>{

  if(f_number.value==""){
     imprime_erros(0)
     return
  }else if(val_1.value==""){
    imprime_erros(1)
    return
  }else if(val_2.value==""){
    imprime_erros(2)
    return
  }
  
  const n_aposta=parseInt(f_number.value);
  const f_val1=parseInt(val_1.value);
  const f_val2=parseInt(val_2.value);
  if(f_val1>f_val2){
    imprime_erros(3)
    return
  }else if(n_aposta<f_val1){
    imprime_erros(4)
    return
  } else if(n_aposta >f_val2){
    imprime_erros(5)
    return
  }
  else{
    criar_array(val_1,val_2)
    return;
  }
}

 reset.addEventListener("click",()=>{
    location.reload()
})
document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault(); //  Impede o submit automático
  }
});

document.addEventListener('keyup',(event)=>{

  if(event.key === "Enter"){
     // event.preventDefault();
     
       Erros(f_number,val_1,val_2)
  };
});
