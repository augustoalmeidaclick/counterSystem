let botao = document.querySelector('.btn');


botao.addEventListener('click', function contar() {
  let inicio = document.getElementById('numero1');
  let fim = document.getElementById('numero2');
  let passo = document.getElementById('passo');
  let res = document.querySelector('.resultado');
  if (isNaN(inicio.value) || isNaN(fim.value) || isNaN(passo.value) || passo <= 0) {
    res.innerHTML = 'Por favor, insira valores válidos para todos os campos!';
    return;
  } else {
    res.innerHTML = 'Contando: '
    let i = Number(inicio.value);
    let f = Number(fim.value);
    let p = Number(passo.value);
    if (p <= 0) {
      res.innerHTML = 'Passo inválido, passo vai passar a valer 1.';
      p = 1;
    }
    if (i < f) {
      for (let c = i; c <= f; c += p) {
        res.innerHTML += `\u{1F449} ${c} `;
      }
      res.innerHTML += `\u{1F3C1}`;
    } else {
      for(let c = i; c >= f; c -= p) {
        res.innerHTML += `\u{1F449} ${c} `;
      }
      res.innerHTML += `\u{1F3C1}`;
    }
  }
})