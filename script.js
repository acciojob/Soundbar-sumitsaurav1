//your JS code here. If required.
let currentMusic;

let buttons = document.querySelectorAll(".btn");

for(let i=0;i<buttons.length;i++){
	buttons[i].addEventListener('click',(e)=>{
		// console.log(buttons[i].innerText)
		let musicToPlay = document.getElementById(`${buttons[i].innerText}`)
		if(currentMusic){
			currentMusic.pause();
		}
		if(musicToPlay){
			musicToPlay.play();
			currentMusic=musicToPlay;
		}
	})
}

let stop = document.getElementById("stop");
stop.addEventListener('click',(e)=>{
	if(currentMusic){
		currentMusic.pause();
	}
})