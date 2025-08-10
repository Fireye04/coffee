window.onload = function () {
	var a = document.getElementById("they");

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

	a.onclick = function () {
		if (set === "false") {
			alert(
				"Hey look you found an easter egg! " +
					"You can click the same spot to spare your eyes.",
			);

			b.style.backgroundImage = 'url("../Assets/rainbow.svg")';
			b.style.backgroundSize = "100% 600px";
			b.style.animation = "bgScroll 5s linear infinite";

			set = "true";
			sessionStorage.setItem("rainbow", "true");
		} else {
			b.style.background = "";
			b.style.animation = "";

			set = "false";
			sessionStorage.setItem("rainbow", "false");
		}
	};

	loadTODO();
};

async function loadTODO() {
	try {
		const response = await fetch(
			"https://api.github.com/repos/Fireye04/coffee/issues",
			{
				method: "GET",
				headers: {
					"Content-Type": "application/vnd.github.text+json",
					"X-GitHub-Api-Version": "2022-11-28",
				},
			},
		);
		var list = document.getElementById("todo-list");
		let vals = await response.json();
		let todo_html = "";
		for (let i = 0; i < vals.length; i++) {
			todo_html +=
				'<li><a href="' +
				vals[i]["html_url"] +
				'">' +
				vals[i]["title"] +
				"</a></li>";
			// console.log(vals[i]);
		}
		list.innerHTML = todo_html;
	} catch (error) {
		console.error(error.message);
	}
}
