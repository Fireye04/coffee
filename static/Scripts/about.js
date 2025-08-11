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
		let uncat = [];
		let high_prio = [];
		let mod_prio = [];
		let low_prio = [];
		let content = [];
		let todo_html = "";
		for (let i = 0; i < vals.length; i++) {
			if (vals[i]["pull_request"]) {
				continue;
			}
			let labels = [];
			for (let j = 0; j < vals[i]["labels"].length; j++) {
				labels.push(vals[i]["labels"][j]["name"]);
			}

			if (labels.indexOf("content") !== -1) {
				content.push(vals[i]);
			} else if (labels.indexOf("High Priority") !== -1) {
				high_prio.push(vals[i]);
			} else if (labels.indexOf("Moderate Priority") !== -1) {
				mod_prio.push(vals[i]);
			} else if (labels.indexOf("Low Priority") !== -1) {
				low_prio.push(vals[i]);
			} else {
				uncat.push(vals[i]);
			}
			// console.log(vals[i]);
		}

		if (high_prio.length > 0) {
			todo_html += "<h3>High Priority</h3><ul>";

			for (let i = 0; i < high_prio.length; i++) {
				todo_html +=
					'<li><a href="' +
					high_prio[i]["html_url"] +
					'">' +
					high_prio[i]["title"] +
					"</a></li>";
			}
			todo_html += "</ul>";
		}

		if (mod_prio.length > 0) {
			todo_html += "<h3>Moderate Priority</h3><ul>";

			for (let i = 0; i < mod_prio.length; i++) {
				todo_html +=
					'<li><a href="' +
					mod_prio[i]["html_url"] +
					'">' +
					mod_prio[i]["title"] +
					"</a></li>";
			}
			todo_html += "</ul>";
		}

		if (low_prio.length > 0) {
			todo_html += "<h3>Low Priority</h3><ul>";

			for (let i = 0; i < low_prio.length; i++) {
				todo_html +=
					'<li><a href="' +
					low_prio[i]["html_url"] +
					'">' +
					low_prio[i]["title"] +
					"</a></li>";
			}
			todo_html += "</ul>";
		}

		if (content.length > 0) {
			todo_html += "<h3>Content</h3><ul>";

			for (let i = 0; i < content.length; i++) {
				todo_html +=
					'<li><a href="' +
					content[i]["html_url"] +
					'">' +
					content[i]["title"] +
					"</a></li>";
			}
			todo_html += "</ul>";
		}

		if (uncat.length > 0) {
			todo_html += "<h3>Uncategorized</h3><ul>";

			for (let i = 0; i < uncat.length; i++) {
				todo_html +=
					'<li><a href="' +
					uncat[i]["html_url"] +
					'">' +
					uncat[i]["title"] +
					"</a></li>";
			}
			todo_html += "</ul>";
		}

		list.innerHTML = todo_html;
	} catch (error) {
		console.error(error.message);
	}
}
