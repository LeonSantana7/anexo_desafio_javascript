//class contato
class contato {
  constructor(nome, sobrenome, email, cpf, telefone, tipoContato) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.email = email;
    this.cpf = cpf;
    this.telefone = telefone;
    this.tipoContato = tipoContato;
  }
}

function Post(form) {
  let tipoContato = form.elements.namedItem("contato").value;
  let data = new contato(
    form.elements.namedItem("nome").value,
    form.elements.namedItem("sobrenome").value,
    form.elements.namedItem("email").value,
    form.elements.namedItem("cpf").value,
    form.elements.namedItem("telefone").value,
    tipoContato
  );

  if (tipoContato !== "TELEFONE" && tipoContato !== "E-MAIL") {
    alert(
      "Por favor, selecione como deseja ser contatado: TELEFONE ou E-MAIL."
    );
    return false;
  }

  alert(`Obrigado, ${data.nome}! Seus dados foram enviados com sucesso.`);
  Enviar(data);
}

function aplicarMascaraCPF() {
    const inputCPF = document.querySelector("[name='cpf']");
  
    if (inputCPF) {
      inputCPF.addEventListener("input", () => {
        let cpf = inputCPF.value.replace(/\D/g, "");
   
        if (cpf.length > 3) cpf = cpf.replace(/^(\d{3})(\d)/, "$1.$2");
        if (cpf.length > 6) cpf = cpf.replace(/^(\d{3})\.(\d{3})(\d)/, "$1.$2.$3");
       if (cpf.length > 9) cpf = cpf.replace(/^(\d{3})\.(\d{3})\.(\d{3})(\d)/, "$1.$2.$3-$4");
   
        inputCPF.value = cpf; 
      });
    }
  }
  
function aplicarMascaraTel() {
    const inputTel = document.querySelector("[name='telefone']");
    
    if (inputTel) {
        inputTel.addEventListener("input", () => {
            let telefone = inputTel.value.replace(/\D/g, "");
            
            if (telefone.length > 2) telefone = telefone.replace(/^(\d{2})(\d)/, "($1) $2");
            
            if (telefone.length > 10) {
                telefone = telefone.replace(/(\d{5})(\d{4})/, "$1-$2"); 
            } else {
                telefone = telefone.replace(/(\d{4})(\d{4})/, "$1-$2"); 
            }
            
            inputTel.value = telefone;
        });
    }
}


function Enviar(data) {
  const nome = document.querySelector("input[name='nome']");
  // trim remove espaços em branco
  if (nome && nome.value.trim() !== "") {
    console.table({ "Dados enviados:": data });
    document.querySelector("form").reset();
  } else {
    alert("Por favor, preencha o nome.");
  }
}

function vozAcessibilidade() {
  if (responsiveVoice.voiceSupport()) {
    responsiveVoice.speak(
      "Entre em contato conosco, a Ford agradece!",
      "Brazilian Portuguese Female"
    );
  } else {
    alert("O seu navegador não suporta síntese de voz.");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  aplicarMascaraCPF();
  aplicarMascaraTel();
});
