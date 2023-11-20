var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
player = new YT.Player('meuPlayer', {
    height: '390',
    width: '640',
    videoId: 'S7TUe5w6RHo', // Altere o ID do vídeo aqui
});
}
   document.getElementById('meuBotao').addEventListener('click', function() {
var video = document.getElementById('meuPlayer');
var closes = document.getElementById('close');
var modals = document.getElementById('modal');
modals.style.display = 'block'
closes.style.display = 'block';
video.style.display = 'block';
player.playVideo();
});

document.getElementById('meuBotao').addEventListener('click', function(){
    var closes = document.getElementById('close');
    var video = document.getElementById('meuPlayer');
    var modals = document.getElementById('modal');
    closes.onclick = function() {
    modals.style.display = 'none'
    video.style.display = "none";
    closes.style.display = "none";
    player.stopVideo();
    }
})

var counter1 = document.getElementById('num1');
var counter2 = document.getElementById('num2');
var hasScrolled = false;

function increment(i, max, element){
    if(i > max) {
      if(element === counter2) {
        element.innerText += " Km";
      }
      return;
    }
    setTimeout(function(){
      element.innerText = Math.round(i).toLocaleString('pt-BR');
      increment(i+(max/100), max, element);
    },10)
  }


window.addEventListener('scroll', function() {
    if(!hasScrolled) {
        increment(0,15000000000, counter1 );
        increment(0,1600000000, counter2 );
      hasScrolled = true;
    }
  });



  function explorePlanet(planetId) {
    // Oculta todos os conteúdos dos planetas
    var planetContents = document.querySelectorAll('.planet-content');
    var planetasContets = document.querySelectorAll('.planetas_content')
    for (var i = 0; i < planetContents.length; i++) {
      planetContents[i].classList.remove('active');
    }

    // Exibe o conteúdo do planeta específico
    var selectedPlanet = document.getElementById(planetId);
    selectedPlanet.classList.add('active');
  }
  