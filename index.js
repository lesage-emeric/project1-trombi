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
//test edd every card from array/////
/////////////////////////////////////
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
