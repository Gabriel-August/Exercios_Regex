//prettier-ignore
let produtos = [
    { nome: 'Fone', diretorio: 'fone', textoDescritivo: 'Fone de Ouvido Philips com Microfone - Branco', imagens: ['01.jpg', '02.jpg', '03.jpg'] },
    { nome: 'Mouse', diretorio: 'mouse', textoDescritivo: 'Mouse Gamer Acer Nitro 7200 DPI - Preto', imagens: ['01.jpg', '02.jpg', '03.jpg'] },
    { nome: 'HeadSet', diretorio: 'headSet', textoDescritivo: 'Headset Gamer Com Mic Quantum Jbl  - Preto', imagens: ['01.jpg', '02.jpg', '03.jpg'] },
    { nome: 'Teclado', diretorio: 'teclado', textoDescritivo: 'Teclado Mecânico Gamer Phantom, ABNT2 - Preto', imagens: ['01.jpg', '02.jpg', '03.jpg'] },
  ];

  function inicializarproduto(){
    let containerPrincipal = document.getElementById('produtos');
    if(containerPrincipal instanceof HTMLDivElement){
      produtos.forEach((produto) => {
        let containerProduto = criarContainerProduto(produto);
         containerPrincipal.appendChild(containerProduto);
      });
    }  
  }
  function criarContainerProduto(produto){
    let quadro = document.createElement('div');
    quadro.className = 'container';

    produto.imagens.forEach((item) => {
      let imagem = document.createElement('img');
      imagem.src = `img/${produto.diretorio}/${item}`

      quadro.appendChild(imagem);
    });
    return quadro;
  }
  document.addEventListener('DOMContentLoaded', inicializarproduto);