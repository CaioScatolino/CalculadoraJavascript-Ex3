function calculoIF() {
    var numeroA = document.getElementById("numeroA").value;
    var numeroB = document.getElementById("numeroB").value;
    var operacao = document.getElementById("operacao").value;
    if (operacao == "soma") {
        document.getElementById("resultado").value = parseFloat(numeroA) + parseFloat(numeroB)
    }
    else if (operacao == "subtracao") {
        document.getElementById("resultado").value = parseFloat(numeroA) - parseFloat(numeroB)
    }
    else if (operacao == "multiplicacao") {
        document.getElementById("resultado").value = parseFloat(numeroA) * parseFloat(numeroB)
    }
    else if (operacao == "divisao") {
        document.getElementById("resultado").value = parseFloat(numeroA) / parseFloat(numeroB)
    }else {
        alert("Favor selecionar o tipo de operação!")
    }
}

function calculoSwitch() {

    var numeroA = document.getElementById("numeroA").value;
    var numeroB = document.getElementById("numeroB").value;
    var operacao = document.getElementById("operacao").value;
    
    switch(operacao) {

    case "soma":
        document.getElementById("resultado").value = parseFloat(numeroA) + parseFloat(numeroB)
    break

    case "subtracao":
        document.getElementById("resultado").value = parseFloat(numeroA) - parseFloat(numeroB)
    break

    case "multiplicacao":
        document.getElementById("resultado").value = parseFloat(numeroA) * parseFloat(numeroB)
    break

    case "divisao":
        document.getElementById("resultado").value = parseFloat(numeroA) / parseFloat(numeroB)
    break
    
    default:
        alert("Favor selecionar o tipo de operação!")
    break

}

}