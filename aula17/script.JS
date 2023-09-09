let num = document.getElementById("fnum")
let lista = document.getElementById("flista")
let res = document.getElementById("res")
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else{
        return false
    }
}
function isLista(n, l) {
    if(l.indexOf(Number(n)) != -1){
        return true
    } else{ 
        return false
    }
}

function adicionar() {
    if(isNumero(num.value) && !isLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement("option")
        item.text = "valor " + num.value + " adicionado"
        lista.appendChild(item)
        res.innerHTML = ""
    } else {
        alert("Valor invalido ou ja inserido")
    }
    num.value = "" //apaga dps de inserir
    num.focus() // deixa o foco la, nao precisa clicar dnv
}
function finalizar() {
    if (valores.length == 0) {
        alert("Adicione os valores")
    } else {
        let tot = valores.length
        let maior = valores[0] 
        let menor = valores[0] 
        let soma = 0

        for(let pos in valores){
            soma += valores[pos]
            if (valores[pos]> maior)
            maior = valores[pos]
            if(valores[pos] < menor)
            menor = valores [pos]

            
        }
        res.innerHTML = ""
        res.innerHTML += "Ao todo temos " + tot + " elementos. "
        res.innerHTML += " O maior valor informado foi " + maior
        res.innerHTML += ". O menor valor informado foi " + menor
        res.innerHTML += ". Somando todos os valores temos " + soma + "."
    }
}