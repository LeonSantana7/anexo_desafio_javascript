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
        alert('Por favor, selecione como deseja ser contatado: TELEFONE ou E-MAIL.');
        return false;
    }

    alert(`Obrigado, ${data.nome}! Seus dados foram enviados com sucesso.`);
    Enviar(data);

}

function Enviar(data) {
    const nome = document.querySelector("input[name='nome']");
    // trim remove espaços em branco
    if (nome && nome.value.trim() !== "") {
        console.table({"Dados enviados:": data});
        document.querySelector("form").reset();
    } else {
        alert('Por favor, preencha o nome.');
    }

}

function vozAcessibilidade() {
    if (responsiveVoice.voiceSupport()) {
        responsiveVoice.speak("Entre em contato conosco, a Ford agradece!", "Brazilian Portuguese Female");
    } else {
        alert("O seu navegador não suporta síntese de voz.");
    }
}
