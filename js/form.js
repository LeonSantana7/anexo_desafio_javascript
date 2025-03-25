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


    if (tipoContato !== "TELEFONE" && tipoContato !== "E-MAIL") {
        alert('Por favor, selecione como deseja ser contatado: TELEFONE ou E-MAIL.');
        return false;
    }
    let data = new contato(
        form.elements.namedItem("nome").value,
        form.elements.namedItem("sobrenome").value,
        form.elements.namedItem("email").value,
        form.elements.namedItem("cpf").value,
        form.elements.namedItem("telefone").value,
        form.elements.namedItem("contato").value
    );
    console.log("Dados enviados:", data);

    alert(`Obrigado, ${data.nome}! Seus dados foram enviados com sucesso.`);
}

function Enviar() {
    var nome = document.querySelector("input[name='nome']");

    if (nome && nome.value.trim() !== "") {
        alert('Obrigado, ' + nome.value + '! Seus dados foram encaminhados com sucesso.');
    } else {
        alert('Por favor, preencha o nome.');
    }
}