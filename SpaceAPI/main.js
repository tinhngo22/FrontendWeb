let container = document.getElementById("container");
async function getData() {
	const rawData = await fetch("http://api.open-notify.org/astros.json");
	const people = await rawData.json();
	return people;
}

getData().then((data) => {
	const people = data.people || [];
	container.innerHTML = people
		.map((p) => `<div>${p.name} — ${p.craft}</div>`)
		.join("");
});
