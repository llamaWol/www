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

// 		Epic circle cursor thing	//
let cursor = document.querySelector('.cursor');

window.addEventListener('mousemove', e => {
	cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
	cursor.style.opacity = "1";
});

document.body.addEventListener('mouseleave', () => {
	cursor.style.opacity = "0";
});

// 		Return to homepage 		//
document.querySelector(".dir").addEventListener('click', () => {
	location.href = "/home"
})