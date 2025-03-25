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
        form.elements.namedItem("contato").value
    );

    if (tipoContato !== "TELEFONE" && tipoContato !== "E-MAIL") {
        alert('Por favor, selecione como deseja ser contatado: TELEFONE ou E-MAIL.');
        return false;
    }

    alert(`Obrigado, ${data.nome}! Seus dados foram enviados com sucesso.`);
    Enviar();
    console.log("Dados enviados:", data);

}

function Enviar() {
    var nome = document.querySelector("input[name='nome']");

    if (nome && nome.value.trim() !== "") {
        document.location = 'index.html';
    } else {
        alert('Por favor, preencha o nome.');
    }
}