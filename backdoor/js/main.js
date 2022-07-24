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
    location.href = "/";
};


let pipe = document.querySelector(".pipe")
let sh = document.querySelector(".shell")
let c = 1

pipe.addEventListener('click', () => {
	if (c >= 8) {
		sh.style.animation = "smash 3500ms steps(8, jump-none) forwards"
	}
	else {
		c++
	}
})

let cmt = document.querySelector(".comment")

cmt.addEventListener('click', () => {
	// cmt.style.display = "none"
	cmt.innerHTML = '<i class="fa-solid fa-arrow-right-long"></i>'
})