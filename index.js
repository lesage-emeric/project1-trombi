// const case1 = document.getElementsByClassName("case1");
// case1.classList.add()
// case1.append()

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

const rotateCard = document.querySelectorAll(".case");
rotateCard.forEach((rotate) => {
	rotate.addEventListener("click", () => {
		alert("coucou");
	});
});


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
      imgpro: "photos-pro/imgProLouisV.png",
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
      imgpro: "photos-pro/imgProClaireM.png",
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
      imgpro: "photos-pro/imgProNicolasD.png",
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
      imgpro: "photos-pro/imgProMathieuP.png",
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
      imgpro: "photos-pro/imgProJulienI.png",
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
      imgpro: "photos-pro/imgProBenjaminR.png",
      imgfun: "",
    },
    {
      name: "Alicia M",
      bootcamp: "Dev",
      professionnalProject: "",
      hobbies: ["Cinéma", "Écriture", "Musique"],
      quote:
        "Happiness can be found, even in the darkest of times, if one only remembers to turn on the light",
      githublink: "https://github.com/itisalicia",
      linkedin: "https://www.linkedin.com/in/alicia-magro-3b658a292/",
      imgpro: "photos-pro/imgProAliciaM.jpg",
      imgfun: "photos-fun/imgFunAliciaM.jpg",
    },

    {
      name: "Halim M",
      bootcamp: "Data",
      professionnalProject: "",
      hobbies: ["Escalade", "Films", "Voyages"],
      quote: "On est mieux ici qu'en prison",
      githublink: "",
      linkedin: "",
      imgpro: "photos-pro/imgProHalimM.png",
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
      imgpro: "photos-pro/imgProLudovicS.png",
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
      imgpro: "photos-pro/imgProThimotheyM.png",
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
      imgpro: "photos-pro/imgProAntoineF.png",
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
      imgpro: "photos-pro/imgProThomasL.png",
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
      imgpro: "photos-pro/imgProReemB.png",
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
      imgpro: "photos-pro/imgProElenaD.png",
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
      imgpro: "photos-pro/imgProLudovicM.png",
      imgfun: "photos-fun/imgFunLudovicM.jpg",
    },
    {
      name: "Arnaud G",
      bootcamp: "Dev",
      professionnalProject: "Développeur web",
      hobbies: ["Jeux vidéo", "Randonnés", "Cinéma", "Motos"],
      quote: "Fais le ou ne le fais pas, il n'y a pas d'essai",
      githublink: "https://github.com/Arnaud6216",
      linkedin: "https://www.linkedin.com/in/guevaer-arnaud-11434a2a9/",
      imgpro: "photos-pro/imgProArnaudG.png",
      imgfun: "photos-fun/imgFunArnaudG.jpg",
    },

    {
      name: "Tiphaine S",
      bootcamp: "Crew",
      professionnalProject: "",
      hobbies: ["Randonnées", "Patisserie", "Roller"],
      quote: "",
      githublink: "",
      linkedin: "linkedin.com/in/tiphaine-subtil",
      imgpro: "photos-pro/imgProTiphaineS.png",
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
      imgpro: "photos-pro/imgProAntoninD.png",
      imgfun: "",
    },

    {
      name: "Soufiane R",
      bootcamp: "Data",
      professionnalProject: "",
      hobbies: ["Sport", "Football", "", ""],
      quote: "",
      githublink: "",
      linkedin: "",
      imgpro: "photos-pro/imgProSoufianeR.png",
      imgfun: "",
    },

    {
      name: "williams V",
      bootcamp: "Data",
      professionnalProject:
        "Travailler comme chef de projet dans le domaine de la santé",
      hobbies: ["Guitare", "Randonnées", "Informatique", "Jeux vidéo"],
      quote: "",
      githublink: "",
      linkedin: "",
      imgpro: "photos-pro/imgProWilliamV.png",
      imgfun: "",
    },

    {
      name: "Nicolas V",
      bootcamp: "Data",
      professionnalProject:
        "Retourner dans l'agroalimentaire avec un nouvel axe data",
      hobbies: ["Futsal", "Voyages", "Bières"],
      quote: "Ca va aller",
      githublink: "",
      linkedin: "",
      imgpro: "photos-pro/imgProNicolasV.png",
      imgfun: "",
    },

    {
      name: "Fantine R",
      bootcamp: "FormatriceDev",
      professionnalProject: "Aller au bout de cette session",
      hobbies: ["Social", "Spiritualité", "Le Keno"],
      quote: "Aime ton prochain comme toi même",
      githublink: "",
      linkedin: "",
      imgpro: "photos-pro/imgProFantineR.png",
      imgfun: "",
    },

    {
      name: "Riad S",
      bootcamp: "Data",
      professionnalProject: "",
      hobbies: ["Voyages", "Natation", "", ""],
      quote:
        "I do not want to you to save me, I want you to stand by me whiled I save myself.",
      githublink: "",
      linkedin: "https://www.linkedin.com/feed/",
      imgpro: "photos-pro/imgProRiadS.png",
      imgfun: "",
    },

    {
      name: "Thomas P",
      bootcamp: "Data",
      professionnalProject: "",
      hobbies: ["", "", "", ""],
      quote: "Oublies que tu n'as aucune chance, vas y fonces !",
      githublink: "",
      linkedin: "linkedin.com/in/thomas-porcher-16babaa4",
      imgpro: "photos-pro/imgProThomasP.png",
      imgfun: "",
    },

    {
      name: "Leslie B",
      bootcamp: "Data",
      professionnalProject: "",
      hobbies: ["Clarinette", "", "", ""],
      quote: "",
      githublink: "",
      linkedin: "https://www.linkedin.com/feed/",
      imgpro: "photos-pro/imgProLeslieB.png",
      imgfun: "photos-fun/imgFunLeslieB.png",
    },

    {
      name: "David B",
      bootcamp: "Data",
      professionnalProject: "Alternance en Data IA",
      hobbies: ["Sport", "", "", ""],
      quote: "",
      githublink: "",
      linkedin: "",
      imgpro: "photos-pro/imgProDavidB.png",
      imgfun: "",
    },

    {
      name: "Zséno F",
      bootcamp: "Data",
      professionnalProject: "",
      hobbies: ["", "", "", ""],
      quote: "Je ne perds jamais. Soit je gagne, soit j'apprends",
      githublink: "",
      linkedin: "",
      imgpro: "photos-pro/imgProZsénoF.png",
      imgfun: "",
    },
    {
      name: "Jean-Alain D",
      bootcamp: "Data",
      professionnalProject: "",
      hobbies: ["Jeux vidéo", "Voyages", "Sport automobile", ""],
      quote: "",
      githublink: "",
      linkedin: "",
      imgpro: "photos-pro/imgProJeanAlainD.png",
      imgfun: "",
    },

    {
      name: "Jezabel M",
      bootcamp: "Data",
      professionnalProject: "",
      hobbies: ["", "", "", ""],
      quote: "Jamais un échec, toujours une leçon",
      githublink: "",
      linkedin:
        "https://www.linkedin.com/in/jezabel-montigny-428145112?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      imgpro: "photos-pro/imgProJezabelM.png",
      imgfun: "",
    },

    {
      name: "Daniel D",
      bootcamp: "Data",
      professionnalProject: "",
      hobbies: ["Musique", "Cinéma", "", ""],
      quote:
        "Qui pose 1 question à l'air bête 5 minutes, qui n'en pose pas à l'air bête toute sa vie",
      githublink: "",
      linkedin: "",
      imgpro: "photos-pro/imgProDanielD.png",
      imgfun: "",
    },

    {
      name: "Sopanha S",
      bootcamp: "Data",
      professionnalProject: "",
      hobbies: ["Musique", "Films", "", ""],
      quote: "",
      githublink: "",
      linkedin: "https://www.linkedin.com/in/sopanha-sao-7648a6a3/",
      imgpro: "photos-pro/imgProSopanhaS.png",
      imgfun: "",
    },

    {
      name: "Laetita P",
      bootcamp: "Data",
      professionnalProject: "",
      hobbies: ["Lecture", "Langues", "Natation", ""],
      quote: "",
      githublink: "",

      linkedin: "https://www.linkedin.com/feed/",
      imgpro: "photos-pro/imgProLaetitiaP.png",
      imgfun: "",
    },

    {
      name: "Chris Y",
      bootcamp: "Data",
      professionnalProject: "",
      hobbies: ["", "", "", ""],
      quote: "",
      githublink: "",
      linkedin: "",
      imgpro: "photos-pro/imgProChrisY.png",
      imgfun: "",
    },
  ];

  function createCard(people) {
    const { name, bootcamp, imgpro } = people;

    const cardBack = document.createElement("cardBack");
    cardBack.classList.add("cardBack");
    cardBack.style.width = "80%";
    cardBack.style.marginBottom = "20px";
    cardBack.style.marginLeft = "10%";
    cardBack.style.marginRight = "10%";
    cardBack.style.height = "500px";
    cardBack.style.fontSize = "2rem";

    const cardTitle = document.createElement("h6");
    cardTitle.textContent = name;

    const cardBoot = document.createElement("h6");
    cardBoot.classList.add(bootcamp);
    cardBoot.textContent = bootcamp;

    const cardImg = document.createElement("img");
    cardImg.src = imgpro;
    cardImg.alt = `Photo professionnelle de ${name}`;
    cardImg.classList.add("photoPro");

    cardBack.append(cardTitle);
    cardBack.append(cardBoot);
    cardBack.append(cardImg);
    document.body.append(cardBack);
  }

  wildersToAdd.forEach((wildersToAdd) => {
    createCard(wildersToAdd);
    console.log(wildersToAdd);
  });
