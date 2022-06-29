function insert(num) {
  var preview = document.getElementById('result').innerHTML
  if (resultError()) {
    document.getElementById('result').innerHTML = ''
  } else {
    document.getElementById('result').innerHTML = preview + num
  }
}

function insertOp(operator) {
  var preview = document.getElementById('result').innerHTML

  var lengthPreview = preview.length
  var lastCharacter = preview[lengthPreview - 1]

  var char = preview[lengthPreview - 2]

  if (resultError()) {
    document.getElementById('result').innerHTML = ''
  } else if (preview === '' || preview === '-' || preview === '+') {
  } else if (
    (lastCharacter === 'x' ||
      lastCharacter === '÷' ||
      lastCharacter === '+' ||
      lastCharacter === '-') &&
    (char === '+' || char === 'x' || char === '-' || char === '÷')
  ) {
    preview = preview.substring(0, preview.length - 2)
    document.getElementById('result').innerHTML = preview + operator
  } else if (
    lastCharacter === 'x' ||
    lastCharacter === '÷' ||
    lastCharacter === '+' ||
    lastCharacter === '-'
  ) {
    preview = preview.substring(0, preview.length - 1)
    document.getElementById('result').innerHTML = preview + operator
  } else {
    document.getElementById('result').innerHTML = preview + operator
  }
}

function insertSoma(Op) {
  var preview = document.getElementById('result').innerHTML

  var lengthPreview = preview.length
  var lastCharacter = preview[lengthPreview - 1]
  var char = preview[lengthPreview - 2]

  if (resultError()) {
    document.getElementById('result').innerHTML = ''
  } else if (lastCharacter === '+') {
  } else if (lastCharacter === '-' && char === '+') {
  } else if (
    lastCharacter === '-' &&
    (char === 'x' || char === '÷' || char === '')
  ) {
    preview = preview.substring(0, preview.length - 1)
    document.getElementById('result').innerHTML = preview + Op
  } else {
    document.getElementById('result').innerHTML = preview + Op
  }
}

function insertSub(Ope) {
  var preview = document.getElementById('result').innerHTML

  var lengthPreview = preview.length
  var lastCharacter = preview[lengthPreview - 1]
  var char = preview[lengthPreview - 2]

  if (resultError()) {
    document.getElementById('result').innerHTML = ''
  } else if (lastCharacter === '-') {
  } else if (lastCharacter === '+' && char === '-') {
  } else if (
    lastCharacter === '+' &&
    (char === 'x' || char === '÷' || char === '')
  ) {
    preview = preview.substring(0, preview.length - 1)
    document.getElementById('result').innerHTML = preview + Ope
  } else {
    document.getElementById('result').innerHTML = preview + Ope
  }
}

function calc() {
  var resultado = document.getElementById('result').innerHTML

  // trocando os simbolos de multiplicação e divisao
  var divisao = resultado.replace(/÷/g, '/')
  var calcu = divisao.replace(/x/g, '*')

  var preview = document.getElementById('result').innerHTML
  calcuConfirm = calcu
  previewConfirm = document.getElementById('result').innerHTML

  var lengthPreview = preview.length
  var lastCharacter = preview[lengthPreview - 1]
  var char = preview[lengthPreview - 2]

  // calculando o resultado

  try {
    if (resultError()) {
      document.getElementById('result').innerHTML = ''
    } else if (
      (lastCharacter === '-' ||
        lastCharacter === 'x' ||
        lastCharacter === '+' ||
        lastCharacter === '÷') &&
      (char === '+' || char === 'x' || char === '-' || char === '÷')
    ) {
      document.getElementById('result').innerHTML = calcu.substring(
        0,
        calcu.length - 2
      )
      document.getElementById('result').innerHTML = eval(
        document.getElementById('result').innerHTML
      )
    } else if (
      lastCharacter === '-' ||
      lastCharacter === 'x' ||
      lastCharacter === '+' ||
      lastCharacter === '÷'
    ) {
      document.getElementById('result').innerHTML = calcu.substring(
        0,
        calcu.length - 1
      )
      document.getElementById('result').innerHTML = eval(
        document.getElementById('result').innerHTML
      )
    } else {
      document.getElementById('result').innerHTML = eval(calcu)
    }
  } catch (error) {
    document.getElementById('result').innerHTML = 'Valor invalido!'
  }
}

function limpar() {
  document.getElementById('result').innerHTML = ''
}

function apagar() {
  var preview = document.getElementById('result').innerHTML
  if (resultError()) {
    document.getElementById('result').innerHTML = ''
  } else {
    document.getElementById('result').innerHTML = preview.substring(
      0,
      preview.length - 1
    )
  }
}

const resultError = () => {
  var preview = document.getElementById('result').innerHTML
  if (
    preview == Infinity ||
    preview == -Infinity ||
    preview == 'Valor invalido!'
  ) {
    return true
  }
}
