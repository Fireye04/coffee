window.onload = function () {
	const b = document.querySelector("body");

	let set = sessionStorage.getItem("rainbow");
	if (set === null) {
		set = "false";
		sessionStorage.setItem("rainbow", "false");
	}
	if (set === "true") {
		b.style.backgroundImage = 'url("../Assets/rainbow.svg")';
		b.style.backgroundSize = "100% 600px";
		b.style.animation = "bgScroll 5s linear infinite";
	} else {
		b.style.background = "";
		b.style.animation = "";
	}
};
