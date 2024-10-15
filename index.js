const flip = document.querySelector(".cardBack");
flip.addEventListener("click", () => {
	alert("Check");
});

/////////////////////////////////
/////////////////////////////////
/////////////////////////////////
const cardBack = document.querySelector(".cardBack");

const campus = [
	{
		name: "Emeric L",
		bootcamp: "Dev",
		project: "Poursuite en alternance",
		hobbies: ["Jeux vidéo", "Cinéma", "Sport"],
		quote: "Pour chaque fin, il y a toujours un nouveau départ",
		githublink: "https://github.com/lesage-emeric",
		linkedin: "www.linkedin.com/in/emeric-lesage-610934285",
		imgpro: "photos-pro/imgProEmericL.jpeg",
		imgfun: "photos-fun/imgFunEmericL.jpg",
	},
	{
		name: "Louis V",
		bootcamp: "Dev",
		project: "Poursuite en alternance",
		hobbies: ["E-commmerce", "Business", "Sport"],
		quote: "",
		githublink: "https://github.com/LouisNoizar",
		linkedin: "",
		imgpro: "",
		imgfun: "",
	},
];

function createCard(people) {
	const { name, /* bootcamp, */ imgpro } = people;

	const card = document.createElement("cardBack");
	card.classList.add("cardBack");
	cardBack.append(card);

	const cardTitle = document.createElement("h6");
	cardTitle.textContent = name;
	cardBack.append(cardTitle);

	// const cardBoot = document.createElement("h6");
	// cardBoot.classList.add("");
	// cardBoot.textContent = bootcamp;
	// cardBack.append(cardBoot);

	const cardImg = document.createElement("img");
	cardImg.src = imgpro;
	cardImg.alt = `Photo professionnelle de ${name}`;
	cardImg.classList.add("photoPro");
	cardBack.append(cardImg);
}
for (const people of campus) {
	createCard(people);
}
