function insert(num) {
  var preview = document.getElementById('result').innerHTML
  if (preview == Infinity) {
    document.getElementById('result').innerHTML = ''
  } else {
    document.getElementById('result').innerHTML = preview + num
  }
}

function insertOp(num) {
  var preview = document.getElementById('result').innerHTML
  if (preview == Infinity) {
    document.getElementById('result').innerHTML = ''
  } else {
    if (preview == '' || preview == '-' || preview == '+') {
    } else {
      document.getElementById('result').innerHTML = preview + num
    }
  }
}

function calc() {
  var resultado = document.getElementById('result').innerHTML

  // trocando os simbolos de multiplicação e divisao
  var divisao = resultado.replace(/÷/, '/')
  var calcu = divisao.replace(/x/, '*')

  // calculando o resultado
  if (calcu) {
    document.getElementById('result').innerHTML = eval(calcu)
  }
}

function limpar() {
  document.getElementById('result').innerHTML = ''
}

function apagar() {
  var preview = document.getElementById('result').innerHTML
  if (preview == Infinity) {
    document.getElementById('result').innerHTML = ''
  } else {
    document.getElementById('result').innerHTML = preview.substring(
      0,
      preview.length - 1
    )
  }
}
