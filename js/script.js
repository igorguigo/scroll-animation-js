window.addEventListener("scroll", function() {

  // Obtém a posição atual do usuário na página
  var posicaoAtual = window.pageYOffset;
  
  // Obtém todos os elementos de seção do site
  var secoes = document.querySelectorAll('section');
  
  //offsetTop retorna a posição de deslocamento superior do elemento
  //offsetHeight retorna a altura total de um elemento em px
  
  // Itera sobre as seções para determinar em qual o usuário está navegando
  for (var i = 0; i < secoes.length; i++) {
    var secao = secoes[i];
    var posicaoTopo = secao.offsetTop;
    var posicaoFim = posicaoTopo + secao.offsetHeight;
    var engrenagem = document.querySelector(".engrenagem");
    var circleLeft = document.querySelector(".circle-left");
    var circleRight = document.querySelector(".circle-right");

  
    // Verifica se a posição atual do usuário está dentro da seção atual
    if (posicaoAtual >= posicaoTopo && posicaoAtual < posicaoFim) {
      // Adiciona a classe "ativo" à seção atual
      secao.classList.add('ativo');

      switch (true) {
        case secao.classList.contains('bg-1'):
          posicaoSecao = posicaoAtual - posicaoTopo;
          alturaSecao = secao.offsetHeight;
          porcentagem = posicaoSecao/alturaSecao * 100;
          engrenagem.style.transition = "all ease-in-out";
          engrenagem.style.transform = "translate(-50%, -50%) rotate(" + porcentagem + "deg)";

          circleLeft.style.display = "none";
          circleRight.style.display = "none";
        break;

        case secao.classList.contains('bg-2'):
          posicaoSecao = posicaoAtual - posicaoTopo;
          alturaSecao = secao.offsetHeight;
          indice = (posicaoSecao/alturaSecao * 8) + 1;
          engrenagem.style.transform = "translate(-50%, -50%) scale(" + indice + ")";

          circleLeft.style.display = "none";
          circleRight.style.display = "none";
        break;

        case secao.classList.contains('bg-3'):
          circleLeft.style.display = "block";
          circleLeft.style.position = "fixed";
          circleRight.style.display = "block";
          circleRight.style.position = "fixed";

          circleLeft.style.animation = "left 4s";
          circleRight.style.animation = "right 4s";

          posicaoSecao = posicaoAtual - posicaoTopo;
          alturaSecao = secao.offsetHeight;

          indice = (posicaoSecao/alturaSecao * 2) + 8;
          engrenagem.style.transform = "translate(-50%, -50%) scale(" + indice + ")";

          
          porcentagem = posicaoSecao/alturaSecao * 100;

          engrenagem.style.left = 50 + porcentagem + "%";
          engrenagem.style.top =  50+ porcentagem + "%";

          // engrenagem.style.left = "80%";
          // engrenagem.style.top = "10%";
          // engrenagem.style.transition = "left 2s, top 2s"
          


          
        break;

        case secao.classList.contains("bg-4"):
          posicaoSecao = posicaoAtual - posicaoTopo;
          alturaSecao = secao.offsetHeight;
          indiceScale = (posicaoSecao/alturaSecao * 8) + 1;
          indiceRotate = (posicaoSecao/alturaSecao * 1000);
          indiceDeslocamento = posicaoSecao/alturaSecao * 100;
          engrenagem.style.transform = "translate(-50%, -50%) scale(" + indiceScale + ") rotate(" + indiceRotate + "deg)";
          engrenagem.style.left = 100 - indiceDeslocamento + "%";
          engrenagem.style.top = 100 - indiceDeslocamento + "%";


          circleLeft.style.display = "none";
          circleRight.style.display = "none";
        break;
      
        default:
          circleLeft.style.display = "none";
          circleRight.style.display = "none";

          // circleLeft.style.animation = "left 4s";
          // circleRight.style.animation = "right 4s";

          break;
      }

    } else {
      // Remove a classe "ativo" de outras seções
      secao.classList.remove('ativo');
    }
  }
});


