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
// const flip = document.querySelector(".cardBack");
// flip.addEventListener("click", () => {
// 	alert("Check");
// });

// /////////////////////////////////////
// //test edd every card from array/////
// /////////////////////////////////////
// const cardBack = document.querySelector(".cardBack");

// const campus = [
// 	{
// 		name: "Emeric L",
// 		bootcamp: "Dev",
// 		project: "Poursuite en alternance",
// 		hobbies: ["Jeux vidéo", "Cinéma", "Sport"],
// 		quote: "Pour chaque fin, il y a toujours un nouveau départ",
// 		githublink: "https://github.com/lesage-emeric",
// 		linkedin: "www.linkedin.com/in/emeric-lesage-610934285",
// 		imgpro: "photos-pro/imgProEmericL.jpeg",
// 		imgfun: "photos-fun/imgFunEmericL.jpg",
// 	},
// 	{
// 		name: "Louis V",
// 		bootcamp: "Dev",
// 		project: "Poursuite en alternance",
// 		hobbies: ["E-commmerce", "Business", "Sport"],
// 		quote: "",
// 		githublink: "https://github.com/LouisNoizar",
// 		linkedin: "",
// 		imgpro: "",
// 		imgfun: "",
// 	},
// ];

// 	JUSTE UNE TENTATIVE POUR CRÉER LES CARDS POUR LE RESPONSIVE
// 	JUSTE UNE TENTATIVE POUR CRÉER LES CARDS POUR LE RESPONSIVE
// 	JUSTE UNE TENTATIVE POUR CRÉER LES CARDS POUR LE RESPONSIVE
// 	JUSTE UNE TENTATIVE POUR CRÉER LES CARDS POUR LE RESPONSIVE

if (window.matchMedia("(min-width: 400px)").matches) {
	//la largeur minimum de l'affichage est 400px inclu

	const cardBack = document.querySelector(".cardBack");

	const wildersToAdd = [
		{
			name: "Emeric L",
			bootcamp: "Dev",
			professionnalProject: "Poursuite en alternance",
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
			professionnalProject: "Poursuite en alternance",
			hobbies: ["E-commmerce", "Business", "Sport"],
			quote: "",
			githublink: "https://github.com/LouisNoizar",
			linkedin: "",
			imgpro: "",
			imgfun: "",
		},

		{
			name: "Claire M",
			bootcamp: "Data",
			professionnalProject: "",
			hobbies: ["Biologie", "Jeux de société", ""],
			quote: "",
			githublink: "",
			linkedin:
				"https://www.linkedin.com/in/clairemercier/ et https://github.com/SeaJayEm",
			imgpro: "",
			imgfun: "",
		},
		{
			name: "Nicolas D",
			bootcamp: "Data",
			professionnalProject: "",
			hobbies: ["Cyclisme", "", ""],
			quote: "",
			githublink: "",
			linkedin: "https://fr.linkedin.com/in/nicolas-durant-51b41b140",
			imgpro: "",
			imgfun: "",
		},
		{
			name: "Mathieu P",
			bootcamp: "Dev",
			professionnalProject: " Poursuite en Alternance",
			hobbies: ["Football", "Musique", "Cinéma "],
			quote: "Le gras c'est la vie",
			githublink: "htpps://https://github.com/Supremebatmat",
			linkedin: "https://www.linkedin.com/in/",
			imgpro: "",
			imgfun: "",
		},
		{
			name: "Julien I",
			bootcamp: "Dev",
			professionnalProject:
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
			professionnalProject: "",
			hobbies: ["La data", "Course à pied", ""],
			quote: "Qui veut aller loin ménage sa monture",
			githublink: "",
			linkedin: "https://www.linkedin.com/in/benjamin-regnier-56708b91/",
			imgpro: "",
			imgfun: "",
		},
		{
			name: "Alicia M",
			bootcamp: "Développeur full stack",
			professionnalProject: "",
			hobbies: ["Cinéma", "Écriture", "Musique"],
			quote:
				"Happiness can be found, even in the darkest of times, if one only remembers to turn on the light - Albus Dumbledore, Harry Potter et le Prisonnier d'Azkaban",
			githublink: "https://github.com/itisalicia",
			linkedin: "https://www.linkedin.com/in/alicia-magro-3b658a292/",
			imgpro: "photos-pro/imgProAliciaM.jpeg",
			imgfun: "photos-fun/imgFunAliciaM.jpeg",
		},
		{
			name: "Halim M",
			bootcamp: "Data",
			professionnalProject: "",
			hobbies: ["Escalade", "Films", "Voyages"],
			quote: "On est mieux ici qu'en prison",
			githublink: "",
			linkedin: "",
			imgpro: "",
			imgfun: "photos-fun/imgFunHalimM.png",
		},

		{
			name: "Ludovic S",
			bootcamp: "Data",
			professionnalProject: "",
			hobbies: ["Moto", "Informatique", "Théâtre"],
			quote: "Il faut se méfier de l'eau qui dort",
			githublink: "",
			linkedin: "https://www.linkedin.com/in/ludovic-simunek/",
			imgpro: "",
			imgfun: "",
		},
		{
			name: "Timothey M",
			bootcamp: "Dev",
			professionnalProject: "",
			hobbies: ["Jeux vidéos", "Musique"],
			quote: "",
			githublink: "https://github.com/MTimot",
			linkedin: "https://www.linkedin.com/in/timothey-mesmacque-924b56331/",
			imgpro: "",
			imgfun: "",
		},

		{
			name: "Antoine F",
			bootcamp: "Dev",
			professionnalProject: "",
			hobbies: ["Basket", "Judo", "Musique", "Cinéma"],
			quote: "",
			githublink: "",
			linkedin:
				"https://github.com/Foub404 / https://www.linkedin.com/in/antoine-foubert-152ba413b/",
			imgpro: "",
			imgfun: "",
		},

		{
			name: "Thomas L",
			bootcamp: "Dev",
			professionnalProject: "",
			hobbies: ["Jeux vidéo", "Sport", "Animés"],
			quote: "",
			githublink: "",
			linkedin: "",
			imgpro: "",
			imgfun: "photos-fun/imgFunThomasL.jpg",
		},
		{
			name: "Reem B",
			bootcamp: "Data",
			professionnalProject: "",
			hobbies: ["Manga", "Animés"],
			quote:
				"When do you think people die? When they are shot through the heart by the bullet of a pistol? No. When they are ravaged by an incurable disease? No. When they drink a soup made from a poisonous mushroom!? No! It’s when… they are forgotten.”― Dr. Hiriluk One Piece",
			githublink: "",
			linkedin: "https://www.linkedin.com/in/r-bouqueau/",
			imgpro: "",
			imgfun: "",
		},
		{
			name: "Elena D",
			bootcamp: "Data",
			professionnalProject:
				"J'aimerai travailler dans la DATA dans le secteur du jeux video ou dans l'internationale",
			hobbies: ["Jeux vidéo", "Animés", "Manga", "Voyages"],
			quote: "Aie confiance en toi-même, et tu sauras vivre.",
			githublink: "",
			linkedin: "www.linkedin.com/in/elena-degallaix-533324269",
			imgpro: "",
			imgfun: "photos-fun/imgFunElenaD.jpeg",
		},
		{
			name: "Ludovic M",
			bootcamp: "Data",
			professionnalProject: "",
			hobbies: ["Handball"],
			quote: "Changeons quelque chose pour obtenir un résultat différent",
			githublink: "",
			linkedin:
				"https://www.linkedin.com/in/ludovic-maillard-7179412a1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
			imgpro: "",
			imgfun: "photos-fun/imgFunLudovicM.jpg",
		},
		{
			name: "Arnaud G",
			bootcamp: "Dev",
			"professionnal-project": "Développeur web",
			hobbies: ["Jeux vidéo", "Randonnés", "Cinéma", "Motos"],
			quote: "Fais le ou ne le fais pas, il n'y a pas d'essai",
			githublink: "https://github.com/Arnaud6216",
			linkedin: "https://www.linkedin.com/in/guevaer-arnaud-11434a2a9/",
			imgpro: "",
			imgfun: "photos-fun/imgFunArnaudG.jpg",
		},

		{
			name: "Tiphaine S",
			bootcamp: "",
			professionnalProject: "",
			hobbies: ["Randonnées", "Patisserie", "Roller"],
			quote: "",
			githublink: "",
			linkedin: "linkedin.com/in/tiphaine-subtil",
			imgpro: "",
			imgfun: "",
		},
		{
			name: "Antonin D",
			bootcamp: "Data",
			professionnalProject: "",
			hobbies: ["", "", "", ""],
			quote: "Ceux qui ont une montre n'ont pas le temps",
			githublink: "",
			linkedin: "",
			imgpro: "",
			imgfun: "",
		},
	];

	function createCard(people) {
		const { name, bootcamp, imgpro } = people;

		const cardBack = document.createElement("cardBack");
		cardBack.classList.add("cardBack");

		const cardTitle = document.createElement("h6");
		cardTitle.textContent = name;

		const cardBoot = document.createElement("h6");
		cardBoot.classList.add(bootcamp);
		cardBoot.textContent = bootcamp;

		const cardImg = document.createElement("img");
		cardImg.src = imgpro;
		cardImg.alt = `Photo professionnelle de ${name}`;
		cardImg.classList.add("photoPro");

		// cardBack.append(card);
		cardBack.append(cardTitle);
		cardBack.append(cardBoot);
		cardBack.append(cardImg);
		document.body.append(cardBack);
	}

	wildersToAdd.forEach((wildersToAdd) => {
		createCard(wildersToAdd);
		console.log(wildersToAdd);
	});

	// for (const people of campus) {
	// 	createCard(people);
	// }
}

// }
// 	else {
// 		// l'affichage est inférieur à 600px de large

// }
