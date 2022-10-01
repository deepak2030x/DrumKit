let listofButton = document.querySelectorAll('button');
for (let btn of listofButton){
    btn.addEventListener('click',function(){
        makesound(btn.textContent);
        applyAnimation(btn.textContent);


            
        //let song = new Audio('sounds/tom-2.mp3');
        //song.play();
    })
}

document.addEventListener('keydown',function(event){
    makesound(event.key);
    applyAnimation(event.key);
    
})
function makesound(e){
    switch(e){
        case 'w':
            var song = new Audio('sounds/crash.mp3');
            song.play(); 
            break; 
        case 'a':
            song = new Audio('sounds/kick-bass.mp3');
            song.play();
            break;
        case 's':
            song = new Audio('sounds/snare.mp3');
            song.play();
            break;
        case 'd':
            song = new Audio('sounds/tom-1.mp3');
            song.play();
            break;
        case 'j':
            song = new Audio('sounds/tom-2.mp3');
            song.play();
            break;
        case 'k':
            song = new Audio('sounds/tom-3.mp3');
            song.play();
            break;
        case 'l':
            song = new Audio('sounds/tom-4.mp3');
            song.play();
            break;
        default:
            console.log(btn.textContent)
    }

}
function applyAnimation(key){
    var activebutton = document.querySelector(`.${key}`);
    activebutton.classList.add('pressed');
    setTimeout(function(){
        activebutton.classList.remove('pressed');
    },100);

}
