//car
let carArr = [];

class Car {
    constructor(nome, preco, alturaCacamba, alturaVeiculo, alturaSolo, capacidadeCarga, motor, potencia, volumeCacamba, roda, image) {
        this.nome = nome;
        this.preco = preco;
        this.alturaCacamba = alturaCacamba;
        this.alturaVeiculo = alturaVeiculo;
        this.alturaSolo = alturaSolo;
        this.capacidadeCarga = capacidadeCarga;
        this.motor = motor;
        this.potencia = potencia;
        this.volumeCacamba = volumeCacamba;
        this.roda = roda;
        this.image = image;
    }
}

// search on array if exist carClass returning 1 if not return -1
function GetCarArrPosition(arr, carClass) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].nome === carClass.nome)
            return i;
    }
    return -1;
}

function SetCarToCompare(el, carClass) {
    try {
        if (!(carClass instanceof Car)) {
            throw new Error("Você precisa passar um objeto da classe Car");
        }

        if (el.checked) {
            if (carArr.length >= 2) {
                alert("Você só pode comparar dois carros!");
                el.checked = false;
                return;
            }
            carArr.push(carClass);
        } else {
            let index = GetCarArrPosition(carArr, carClass);
            if (index !== -1) {
                carArr.splice(index, 1);
            }
        }
    } catch (error) {
        alert(error.message);
    }

    updateCheckboxesState();
}

function updateCheckboxesState() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.disabled = !checkbox.checked && carArr.length >= 2;
    });
}

function ShowCompare() {
    if (carArr.length < 2) {
        alert("Precisa marcar 2 carros para apresentar a comparação");
        return;
    }

    UpdateCompareTable();
    document.getElementById("compare").style.display = "block";
}

function HideCompare() {
    document.getElementById("compare").style.display = "none";
}

function UpdateCompareTable() {

    carArr.forEach((car, index) => {
        if (index < 2) {
            document.getElementById(`compare_image_${index}`).innerHTML = `<img src="${car.image}" width="200" alt="Imagem do ${car.nome}">`;
            document.getElementById(`compare_modelo_${index}`).textContent = car.nome;
            document.getElementById(`compare_alturacacamba_${index}`).textContent = car.alturaCacamba;
            document.getElementById(`compare_alturaveiculo_${index}`).textContent = car.alturaVeiculo;
            document.getElementById(`compare_alturasolo_${index}`).textContent = car.alturaSolo;
            document.getElementById(`compare_capacidadecarga_${index}`).textContent = car.capacidadeCarga;
            document.getElementById(`compare_motor_${index}`).textContent = car.motor;
            document.getElementById(`compare_potencia_${index}`).textContent = car.potencia;
            document.getElementById(`compare_volumecacamba_${index}`).textContent = car.volumeCacamba;
            document.getElementById(`compare_roda_${index}`).textContent = car.roda;
            document.getElementById(`compare_preco_${index}`).textContent = `R$ ${car.preco.toLocaleString('pt-BR')}`;
        }
    });
}

