console.log("よーすと");

//    Colour lemon(s) on click    //
let lemons = document.querySelectorAll(".fa-lemon");

console.log(`${lemons.length} lemon(s)`)

for (let i = 0; i < lemons.length; i++) {
	let lemon = lemons[i];

	lemon.addEventListener('click', () => {
		lemon.classList.add('lemon');
	});
}


// 		Return to homepage 		//
document.querySelector(".dir").onclick = function () {
    location.href = "index.html";
};


// 		Change logo on click 	//
let logo = document.querySelector(".logo")

logo.onclick = () => {
	logo.src = "assets/coolcup.png"
}


let pipe = document.querySelector(".pipe")
let sh = document.querySelector(".shell")
let c = 1

pipe.onclick = () => {
	if (c >= 8) {
		sh.style.animation = "smash 3500ms steps(8, jump-none) forwards"
	}
	else {
		c++
	}
}