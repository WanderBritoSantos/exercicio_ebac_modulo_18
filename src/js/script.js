
const f_number = document.getElementById("f_number");
//const clicado = 


/*
const function_cliacado = document.addEventListener('keyup',(event)=>{
    event.preventDefault();

  if (event.key === 13) { 
    event.preventDefault();
   
    console.log('Tecla Enter pressionada');
    /*console.log(valor_aposta)
    */
 /* }
});


*/

/**

const analizar_number=()=>{
  const valor_aposta = f_number.value;
  if(valor_aposta == ""){
      p.innerHTML =" oi"
  }

}



*/





const cliacado = document.addEventListener('keyup', function(event) {
  event.preventDefault();
 
  if (event.keyCode === 13) { 
    
  //  let valor_aposta = f_number.value;
    console.log('Tecla Enter pressionada');
    //console.log(valor_aposta);
  }

  event.preventDefault();
});

/***
const f_number=document.getElementById("f_number");// pega o campo de numero enviado pelo usuario
const p=document.getElementById("res");

/***
 *    <p id="res"> Os campos de faixa não foram prenchidos, favor preencher.</p>
                    <!-- <1<p id="res"> O número escolhido e superior a faixa de possivel número sorteado.</p>
                    <p id="res"> O número escolhido e inferior a faixa de possiveis números sorteado.<p>

                    <p id="res"> Lamento! O números  "var" escolhido não condiz com o número secreto</p> -->
                    <!--
 */
                 //   res.innerHTML += '<p>Outro parágrafo aqui</p>';




/*
btn_C.addEventListener("click", () => {
    if (C_nome.value == "" || C_tel.value == "") {
      alert(" Os campos de nome ou telefone não pode esta vazios!");
      C_nome.value = "";
      C_tel.value = " ";
    } else {
      const nome = C_nome.value;
      const tel = C_tel.value;
      C_nome.value = "";
      C_tel.value = " ";
      registro_nomo_tel(nome, tel);
    }
  });
  
  const registro_nomo_tel = (n, t) => {
    const nome = n;
    const tel = t;
    p_back.innerHTML = `Nome: ${nome} e Telefone: ${tel} adicionados com sucesso!`;
  
    if (i % 2 === 0) {
      let trow = document.createElement("tr");
      trow.className = "section table tr";
  
      let tdado_nome = document.createElement("td");
      let tdado_tel = document.createElement("td");
  
      tdado_nome.textContent = nome;
      tdado_tel.textContent = tel;
  
      trow.appendChild(tdado_nome);
  
      trow.appendChild(tdado_tel);
  
      t_boby.appendChild(trow);
      console.log(i);
    } else {
      let trow = document.createElement("tr");
      trow.className = "tr2";
  
      let tdado_nome = document.createElement("td");
      let tdado_tel = document.createElement("td");
  
      tdado_nome.textContent = nome;
      tdado_tel.textContent = tel;
  
      trow.appendChild(tdado_nome);
  
      trow.appendChild(tdado_tel);
  
      t_boby.appendChild(trow);
    }
    i++;
    setTimeout(() => (p_back.innerHTML = ""), 3000);
  };**/ 



/*
btn_C.addEventListener("click", () => {
    if (C_nome.value == "" || C_tel.value == "") {
      alert(" Os campos de nome ou telefone não pode esta vazios!");
      C_nome.value = "";
      C_tel.value = " ";
    } else {
      const nome = C_nome.value;
      const tel = C_tel.value;
      C_nome.value = "";
      C_tel.value = " ";
      registro_nomo_tel(nome, tel);
    }
  });
  
  const registro_nomo_tel = (n, t) => {
    const nome = n;
    const tel = t;
    p_back.innerHTML = `Nome: ${nome} e Telefone: ${tel} adicionados com sucesso!`;
  
    if (i % 2 === 0) {
      let trow = document.createElement("tr");
      trow.className = "section table tr";
  
      let tdado_nome = document.createElement("td");
      let tdado_tel = document.createElement("td");
  
      tdado_nome.textContent = nome;
      tdado_tel.textContent = tel;
  
      trow.appendChild(tdado_nome);
  
      trow.appendChild(tdado_tel);
  
      t_boby.appendChild(trow);
      console.log(i);
    } else {
      let trow = document.createElement("tr");
      trow.className = "tr2";
  
      let tdado_nome = document.createElement("td");
      let tdado_tel = document.createElement("td");
  
      tdado_nome.textContent = nome;
      tdado_tel.textContent = tel;
  
      trow.appendChild(tdado_nome);
  
      trow.appendChild(tdado_tel);
  
      t_boby.appendChild(trow);
    }
    i++;
    setTimeout(() => (p_back.innerHTML = ""), 3000);
  };**/