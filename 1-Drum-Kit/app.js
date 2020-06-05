window.addEventListener('keydown',function(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return;
    audio.currentTime=0;
    audio.play();
    key.classList.toggle('playing');
    setTimeout(() => {
        key.classList.toggle('playing');
    }, 70);
    
   
});

function play(element){
    const audio = document.querySelector(`audio[data-key="${element.dataset.key}"]`);
    audio.currentTime=0;
    audio.play();
    element.classList.toggle('playing');
    setTimeout(() => {
        element.classList.toggle('playing');
    }, 70);

}