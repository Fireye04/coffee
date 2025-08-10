window.onload = function () {
	const b = document.querySelector("body");

	initGuestbook();

	let set = sessionStorage.getItem("rainbow");
	if (set === null) {
		set = "false";
		sessionStorage.setItem("rainbow", "false");
	}

	if (set === "true") {
		b.style.backgroundImage = 'url("./Assets/rainbow.svg")';
		b.style.backgroundSize = "100% 600px";
		b.style.animation = "bgScroll 5s linear infinite";
	} else {
		b.style.background = "";
		b.style.animation = "";
	}
};

async function initGuestbook() {
	try {
		const response = await fetch(
			"https://fireye-coffee-guestbook.codekai16.workers.dev/api",
			{ method: "GET" },
		);
		if (!response.ok) {
			throw new Error(`Response status: ${response.status}`);
		}

		const jsonResp = await response.json();

		const table = document.getElementsByClassName("guestbook")[0];

		var feedback = document.getElementsById("gbload");
		feedback.toggleAttribute("hidden");

		document.getElementsByClassName("gbhide")[0].toggleAttribute("hidden");

		const columnHeaders = document.createElement("tr");
		columnHeaders.innerHTML = `<th>Name</th>
        <th>Message</th>
        <th class="dt">Timestamp</th>`;
		table.appendChild(columnHeaders);
		const hr = document.createElement("tr");
		hr.innerHTML = `<td><hr></td><td><hr></td><td class="dt"><hr></td>`;
		table.appendChild(hr);

		// add table data rows
		for (let i = jsonResp.length - 1; i >= 0; i--) {
			let dt = formatDatetime(new Date(Number(jsonResp[i]["timestamp"])));
			const tableRow = document.createElement("tr");
			if (jsonResp[i]["domain"] === null) {
				tableRow.innerHTML = `<td>${jsonResp[i]["name"]}</td>
    <td>${jsonResp[i]["message"]}</td>
    <td class="dt">${dt}</td>`;
			} else {
				tableRow.innerHTML = `<td>${
					jsonResp[i]["name"]
				}<br><a href="https://${jsonResp[i]["domain"]}">${
					jsonResp[i]["domain"]
				}</a></td>
    <td>${jsonResp[i]["message"]}</td>
    <td class="dt">${dt}</td>`;
			}
			table.appendChild(tableRow);
			const hr = document.createElement("tr");
			hr.innerHTML = `<td><hr></td><td><hr></td><td class="dt"><hr></td>`;
			table.appendChild(hr);
		}
	} catch (error) {
		console.error(error.message);
	}
}

function formatDatetime(date) {
	let dt = date.toString().split(" ");
	// let time = dt[4].split(":");
	return dt[1] + " " + dt[2] + " - " + dt[3];
}

function guestbookClick() {
	const form = document.getElementsByClassName("gbform")[0];
	if (form.hasAttribute("hidden")) {
		// Show form!
		form.toggleAttribute("hidden");
		document.getElementsByClassName("gbutton")[0].innerHTML =
			"I change my mind, cancel please!";
	} else {
		// Hide again
		form.toggleAttribute("hidden");
		document.getElementsByClassName("gbutton")[0].innerHTML =
			"Leave a message!";
	}
}

async function guestbookSubmit() {
	const Name = document
		.getElementsByClassName("gbName")[0]
		.value.toString()
		.trim();
	document.getElementsByClassName("gbName")[0].value = "";

	const Domain = document
		.getElementsByClassName("gbDomain")[0]
		.value.toString()
		.trim();
	document.getElementsByClassName("gbDomain")[0].value = "";

	const Message = document
		.getElementsByClassName("gbMessage")[0]
		.value.toString()
		.trim();
	document.getElementsByClassName("gbMessage")[0].value = "";

	if (Name.length === 0 || Message.length === 0) {
		document.getElementsByClassName("gbload")[0].innerHTML =
			"Empty name or message detected :(";
		return;
	}

	const body = {
		Name: Name,
		Message: Message,
		Domain: Domain,
	};
	try {
		const response = await fetch(
			"https://fireye-coffee-guestbook.codekai16.workers.dev/api",
			{
				headers: {
					"Content-Type": "application/json",
				},
				method: "POST",
				body: JSON.stringify(body),
			},
		);

		if (!response.ok) {
			throw new Error(`Response status: ${response.status}`);
		}
		//TODO: replace with item on page
		feedback.innerHTML = await response.text();
		feedback.toggleAttribute("hidden");

		const table = document.getElementsByClassName("guestbook")[0];
		const tableRow = document.createElement("tr");
		if (Domain === "") {
			tableRow.innerHTML = `<td>${Name}</td>
<td>${Message}</td>
<td class="dt">${formatDatetime(new Date())}</td>`;
		} else {
			tableRow.innerHTML = `<td>${Name}<br><a href="https://${Domain}">${Domain}</a></td>
<td>${Message}</td>
<td class="dt">${formatDatetime(new Date())}</td>`;
		}
		table.appendChild(tableRow);
		const hr = document.createElement("tr");
		hr.innerHTML = `<td><hr></td><td><hr></td><td class="dt"><hr></td>`;
		table.appendChild(hr);
	} catch (err) {
		feedback.innerHTML = err.message;
		feedback.toggleAttribute("hidden");
	}
	guestbookClick();
}
