// const case1 = document.getElementsByClassName("case1");
// case1.classList.add()
// case1.append()

// POUR LES PAGES QUI TOURNENT
class FlipBook {
	constructor(bookElem) {
		this.elems = {
			book: bookElem,
			leaves: bookElem.querySelectorAll(".leaf"),
			buttons: {
				next: document.getElementById("nextPage"),
				prev: document.getElementById("prevPage"),
			},
		};
		this.setupEvents();
		this.currentPagePosition = 0;
		this.turnPage(0);
	}
	setPagePosition(page, position, index) {
		var transform = "";

		transform =
			"translate3d(0,0," + (position < 0 ? 1 : -1) * Math.abs(index) + "px)";

		if (position < 0) {
			transform += "rotate3d(0,1,0,-180deg)";
			page.classList.add("turned");
		} else {
			page.classList.remove("turned");
		}
		if (page.style.transform != transform) {
			page.style.transform = transform;
		}
	}
	turnPage(delta) {
		this.currentPagePosition += delta;
		if (this.currentPagePosition < 0) {
			this.currentPagePosition = 0;
			return;
		}
		if (this.currentPagePosition > this.elems.leaves.length) {
			this.currentPagePosition = this.elems.leaves.length;
			return;
		}
		this.elems.leaves.forEach((page, index) => {
			var pageNumber = index;
			this.setPagePosition(page, pageNumber - this.currentPagePosition, index);
		});

		if (this.currentPagePosition == 0) {
			this.elems.buttons.prev.setAttribute("disabled", "disabled");
		} else if (this.currentPagePosition == this.elems.leaves.length) {
			this.elems.buttons.next.setAttribute("disabled", "disabled");
		} else {
			this.elems.buttons.next.removeAttribute("disabled");
			this.elems.buttons.prev.removeAttribute("disabled");
		}
	}
	setupEvents() {
		document.getElementById("nextPage").addEventListener("click", () => {
			this.turnPage(1);
		});
		document.getElementById("prevPage").addEventListener("click", () => {
			this.turnPage(-1);
		});
	}
}

//An example of how to extend the flip book!
class PlugBook extends FlipBook {
	/* This is turning out to be way too popular to not plug myself in, The flipbook class is still intact though*/
	constructor(...args) {
		super(...args);
		this.pluggable = false;
	}
	turnPage(...args) {
		super.turnPage(...args);

		if (args[0] == 1 && this.pluggable) {
			this.plug();
			return;
		}
		if (args[0] == 1 && this.currentPagePosition == this.elems.leaves.length) {
			this.elems.buttons.next.removeAttribute("disabled");
			this.pluggable = true;
			return;
		}

		this.pluggable = false;
	}
	plug() {
		window.open(document.getElementById("myStuff").href);
	}
}

var flipBook = new FlipBook(document.getElementById("flipbook"));

///////////////////////////////////
///////test event on click/////////
///////////////////////////////////
const flip = document.querySelector(".cardBack");
flip.addEventListener("click", () => {
	alert("Check");
});

/////////////////////////////////////
//test add every card from array/////
/////////////////////////////////////
const cardBack = document.querySelector(".cardBack");

// const allCampus = require("./data.json");

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
		imgpro: "photos-pro/imgProLouisV.png",
		imgfun: "",
	},
	{
		name: "Claire M",
		bootcamp: "Data",
		project: "",
		hobbies: ["Biologie", "Jeux de société", ""],
		quote: "",
		githublink: "",
		linkedin:
			"https://www.linkedin.com/in/clairemercier/ et https://github.com/SeaJayEm",
		imgpro: "photos-pro/imgProClaireM.png",
		imgfun: "",
	},
	{
		name: "Nicolas D",
		bootcamp: "Data",
		project: "",
		hobbies: ["Cyclisme", "", ""],
		quote: "",
		githublink: "",
		linkedin: "https://fr.linkedin.com/in/nicolas-durant-51b41b140",
		imgpro: "photos-pro/imgProNicolasD.png",
		imgfun: "",
	},
	{
		name: "Mathieu P",
		bootcamp: "Dev",
		project: " Poursuite en Alternance",
		hobbies: ["Football", "Musique", "Cinéma "],
		quote: "Le gras c'est la vie",
		githublink: "htpps://https://github.com/Supremebatmat",
		linkedin: "https://www.linkedin.com/in/",
		imgpro: "imgProMathieuP.png",
		imgfun: "",
	},
	{
		name: "Julien I",
		bootcamp: "Dev",
		project:
			"C'est encore vague mais du coup dans le dev a 90%. On ne sait pas de quoi est demain fait",
		hobbies: ["Sport", "Animaux", "Voitures"],
		quote: "",
		githublink: "",
		linkedin: "",
		imgpro: "",
		imgfun: "",
	},
	{
		name: "Benjamin R",
		bootcamp: "Data",
		project: "",
		hobbies: ["La data", "Course à pied", ""],
		quote: "Qui veut aller loin ménage sa monture",

		githublink: "",
		linkedin: "https://www.linkedin.com/in/benjamin-regnier-56708b91/",
		imgpro: "",
		imgfun: "",
	},
];

// function createCard(people, index) {
// 	console.log(index);
// 	const { name, /* bootcamp, */ imgpro } = people;

// 	// sur ton article tu lui rajoutes une classe = `case${index+1}`
// 	const moitieClasseur = document.querySelector(".moitieClasseur");
// 	const case1 = document.createElement("article");
// 	case1.classList.add(`case${index + 1}`);
// 	moitieClasseur.append(case1);

// 	const card = document.createElement("section");
// 	card.classList.add("cardBack");
// 	case1.append(card);

// 	const cardTitle = document.createElement("h6");
// 	cardTitle.innerText = "WILDEX";
// 	cardTitle.style.color = "red";
// 	cardBack.append(cardTitle);

// 	// const cardBoot = document.createElement("h6");
// 	// cardBoot.classList.add("");
// 	// cardBoot.textContent = bootcamp;
// 	// cardBack.append(cardBoot);

// 	const cardImg = document.createElement("img");
// 	cardImg.src = imgpro;
// 	cardImg.alt = `Photo professionnelle de ${name}`;
// 	cardImg.classList.add("photoPro");
// 	cardBack.append(cardImg);

// 	const cardName = document.createElement("p");
// 	cardName.classList.add("name");
// 	cardName.textContent = name;
// 	cardBack.append(cardName);

// 	const cardTitleReturn = document.createElement("h6");
// 	cardTitleReturn.classList.add("h6return");
// 	cardTitleReturn.innerText = "WILDEX";
// 	cardTitleReturn.style.color = "red";
// 	cardBack.append(cardTitleReturn);
// }

// for (let i = 0; i < campus.length; i++) {
// 	createCard(campus[i], i);
// }
