let cursor = document.querySelector('.cursor');

window.addEventListener('mousemove', e => {
	cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
	cursor.style.opacity = "1";
});

document.body.addEventListener('mouseleave', () => {
	cursor.style.opacity = "0";
});

let ghost = document.querySelector('.fa-ghost');
let gc = 0

// Move ghost to a random position when it is clicked
ghost.addEventListener('click', () => {
	if (gc == 1) {
		location.href = "/egg";
	}
	else {
		ghost.style.opacity = "0";
		ghost.style.top = `${Math.floor(Math.random() * (100 - gc - 1) + gc)}%`;
		ghost.style.left = `${Math.floor(Math.random() * (100 - gc - 1) + gc)}%`;
		gc++
	}
});

// Image button stuff
let bc = 1;
const n = Math.floor(Math.random() * (11 - 3) + 2);

document.querySelector(".button").addEventListener('click', () => {
	if (bc == n) {
		location.href = "/home";
	} else {
		document.querySelector(".counter").innerHTML = `Failed attempts: ${bc++}`;
	}
	document.querySelector(".button").src = "backdoor/img/button_pressed.png";
	setTimeout(returnOriginal, 100);
})

function returnOriginal() {
	document.querySelector(".button").src = "backdoor/img/button.png"
}