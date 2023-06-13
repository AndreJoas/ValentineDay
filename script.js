function flipCard() {
    var card = document.querySelector('.card');
    card.classList.toggle('flipped');
}

function calcularAmor() {
    var question1 = document.getElementById("questao1").value;
    var question2 = document.getElementById("questao2").value;

    // Verificar se os campos estão preenchidos
    if (question1 === "" || question2 === "") {
        alert("Por favor, preencha todas as perguntas antes de calcular.");
        return;
    }

    // Realizar cálculos para determinar o nível de amor com base nas respostas
    var loveLevel = Math.floor(Math.random() * 101); // Nível de amor aleatório (0-100)

    document.getElementById("nivelamor").innerHTML = loveLevel + "%" + "  EiTAAA!";
    document.getElementById("resultado").style.display = "block";
}       