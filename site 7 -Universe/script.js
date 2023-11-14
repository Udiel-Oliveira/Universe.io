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



