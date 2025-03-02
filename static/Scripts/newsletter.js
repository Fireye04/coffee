window.onload = function () {

 const b = document.querySelector('body');

  let set = sessionStorage.getItem("rainbow");
  if (set === null) {
    set = "false"
    sessionStorage.setItem("rainbow", "false");
  }
  if (set === "true"){
        b.style.backgroundImage = 'url("/Assets/rainbow.svg")';
        b.style.backgroundSize = "100% 600px";
        b.style.animation = "bgScroll 5s linear infinite";

  } else {
      b.style.background = "";
      b.style.animation = "";
  }
}

async function newsletterSubmit() {
    const Email = document.getElementsByClassName("nsEmail")[0].value.toString().trim();
    document.getElementsByClassName("nsEmail")[0].value = "";

    const Newsletters = [];

    if (document.getElementsByClassName("nsProjects")[0].checked) {
        Newsletters.push("Projects")
    }
    document.getElementsByClassName("nsProjects")[0].checked = false;

    if (document.getElementsByClassName("nsBlog")[0].checked) {
        Newsletters.push("Blog")
    }
    document.getElementsByClassName("nsBlog")[0].checked = false;

    if (document.getElementsByClassName("nsWriting")[0].checked) {
        Newsletters.push("Writing")
    }
    document.getElementsByClassName("nsWriting")[0].checked = false;

    if (document.getElementsByClassName("nsWebUpdate")[0].checked) {
        Newsletters.push("Website Updates")
    }
    document.getElementsByClassName("nsWebUpdate")[0].checked = false;


    if (Email.length === 0) {
        alert("Email is empty :(")
        return;
    }

    const body = {
        Email: Email,
        Newsletters: Newsletters
    };
    try {
        const response = await fetch("https://coffee-newsletter.codekai16.workers.dev/api", {headers: {
            'Content-Type': 'application/json',
        }, method: 'POST', body: JSON.stringify(body)});

        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        //TODO: replace with item on page
        alert(await response.text())

    } catch (err) {
        alert(err.message);
    }
}
