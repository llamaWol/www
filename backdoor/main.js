console.log("Joost");

//    Colour lemon(s) on click    //
let lemons = document.querySelectorAll(".fa-lemon");

console.log(`${lemons.length} lemon(s)`)

for (let i = 0; i < lemons.length; i++) {
	let lemon = lemons[i];

	lemon.addEventListener('click', () => {
		lemon.classList.add('lemon');
	});
}