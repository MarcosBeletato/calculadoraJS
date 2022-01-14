// Limpar a calculadora
// Não usar 'clear' - é método do JS, não irá funcionar!
function clean() {
    let answer = document.querySelector('#resolution')
    let holder = document.querySelector('#holder')

    holder.innerHTML = ""
    answer.innerHTML = ""
}

// Apagar o último dígito
function backspace() {
    let answer = document.querySelector('#resolution').innerHTML
    let answerArray = Array.from(answer)
    answerArray.pop()
    answer = answerArray.join('')
    document.querySelector('#resolution').innerHTML = answer
}

// Inserir dígito
function insert(num) {
    let answer = document.querySelector('#resolution')
    answer.innerHTML += num

    let ratioSignal = document.querySelector('#ratio')
    let productSignal = document.querySelector('#product')
    let subtractionSignal = document.querySelector('#subtraction')
    let sumSignal = document.querySelector('#sum')

    if (num == ratioSignal.innerHTML || num == productSignal.innerHTML || num == subtractionSignal.innerHTML || num == sumSignal.innerHTML) {
        ratioSignal.setAttribute("disabled", "disabled")
        productSignal.setAttribute("disabled", "disabled")
        subtractionSignal.setAttribute("disabled", "disabled")
        sumSignal.setAttribute("disabled", "disabled")
    }
}

// Calcular e mostrar no visor
function calculate() {
    let ratioSignal = document.querySelector('#ratio')
    let productSignal = document.querySelector('#product')
    let subtractionSignal = document.querySelector('#subtraction')
    let sumSignal = document.querySelector('#sum')

    ratioSignal.disabled = false
    productSignal.disabled = false
    subtractionSignal.disabled = false
    sumSignal.disabled = false

    ratioSignal.removeAttribute

    let holder = document.querySelector('#holder')
    let answer = document.querySelector('#resolution')

    holder.innerHTML = answer.innerHTML

    let answerArray = Array.from(answer.innerHTML)

    if(answerArray.indexOf('+') != -1) {                // SOMA
        answerArray = answerArray.join('')
        answerArray = answerArray.split('+')
        let res = 0
        for (let pos in answerArray) {
            res += Number(answerArray[pos])
        }
        answer.innerHTML = res
    } else if (answerArray.indexOf('-') != -1) {        // SUBTRAÇÃO
        answerArray = answerArray.join('')
        answerArray = answerArray.split('-')
        let res
        for (let pos in answerArray) {
            if (pos == 0) {
                res = Number(answerArray[pos])
            } else {
                res -= Number(answerArray[pos])
            }
        }
        answer.innerHTML = res
    } else if (answerArray.indexOf('/') != -1) {        // DIVISÃO
        answerArray = answerArray.join('')
        answerArray = answerArray.split('/')
        let res = ""
            if (answerArray[1] == 0) {
                alert('[ERRO] Divisão por zero!')
            } else {
                res = Number(answerArray[0]) / Number(answerArray[1])
            }
        answer.innerHTML = res
    } else if (answerArray.indexOf('*') != -1) {        // MULTIPLICAÇÃO
        answerArray = answerArray.join('')
        answerArray = answerArray.split('*')
        for (let pos in answerArray) {
            if (pos == 0) {
                res = Number(answerArray[pos])
            } else {
                res *= Number(answerArray[pos])
            }
        }
        answer.innerHTML = res
    }
}