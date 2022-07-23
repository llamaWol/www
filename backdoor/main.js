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
var counter = 0;

logo.onclick = () => {
	if (counter == 0) {
		logo.src = "assets/coolcup.png"
		counter++
	}
	else if (counter == 1) {
		logo.src = "assets/duccup.png"
		counter++
	}
	else {
		logo.src = "assets/cup.png"
		counter = 0
	}
}