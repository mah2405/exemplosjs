const swap = (vetor, i, j) => {
    [vetor[i], vetor[j]] = [vetor[j], vetor[i]];
  };
  
  const shuffle = (vetor) => {
    for (let i = vetor.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      swap(vetor, i, j);
    }
  };
  
  const bubble_sort = vetor => {
    let len = vetor.length;
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len - i - 1; j++) {
        if (vetor[j] > vetor[j + 1]) {
          swap(vetor, j, j + 1);
        }
      }
    }
  };
  
  const selection_sort = vetor => {
    let len = vetor.length;
    for (let i = 0; i < len; i++) {
      let min = i;
      for (let j = i + 1; j < len; j++) {
        if (vetor[j] < vetor[min]) {
          min = j;
        }
      }
      if (min !== i) {
        swap(vetor, i, min);
      }
    }
  };
  
  const quick_sort = (vetor, inicio, fim) => {
    if (inicio < fim) {
      let pivotIndex = particionamento(vetor, inicio, fim);
      quick_sort(vetor, inicio, pivotIndex - 1);
      quick_sort(vetor, pivotIndex + 1, fim);
    }
  };
  
  const particionamento = (vetor, inicio, fim) => {
    let pivot = vetor[fim];
    let i = inicio - 1;
    for (let j = inicio; j < fim; j++) {
      if (vetor[j] < pivot) {
        i++;
        swap(vetor, i, j);
      }
    }
    swap(vetor, i + 1, fim);
    return i + 1;
  };

  function add() {
    var valorInput = document.getElementById('valor').value;
    var ul = document.getElementById('valores');
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(valorInput));
    ul.appendChild(li);
  }
  
  function ordenar() {
    var lista = document.getElementById('valores');
    var algoritmoOrdenacao = document.getElementById('algoritmoOrdenacao').value;
    var itens = lista.children;
    var valores = Array.from(itens).map(item => parseInt(item.textContent, 10));
  
    switch (algoritmoOrdenacao) {
      case 'bubblesort':
        bubble_sort(valores);
        break;
      case 'selectionsort':
        selection_sort(valores);
        break;
      case 'quicksort':
        quick_sort(valores, 0, valores.length - 1);
        break;
      default:
        console.log('Algoritmo de ordenação não reconhecido.');
    }
  
    lista.innerHTML = valores.map(valor => `<li>${valor}</li>`).join('');
  }
  
  function misturar() {
    var lista = document.getElementById('valores');
    var itens = lista.children;
    var valores = Array.from(itens).map(item => parseInt(item.textContent, 10));
    shuffle(valores);
    lista.innerHTML = valores.map(valor => `<li>${valor}</li>`).join('');
  }
  
