var bird = document.getElementById("bird")
var bird_emoji = "🐦"


bird.onclick = function(){
    console.log(bird_emoji)
	if(bird.innerHTML.includes(bird_emoji)){
		bird.innerHTML = "bird"
	} else {
		bird.innerHTML = bird.innerHTML + bird_emoji
	}
}