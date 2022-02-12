const app = {
  url() {
    // connaitre url de destination
    const url = window.location.href;
    const urlArray = url.split("/");
    const urlDestination = urlArray[urlArray.length - 1];
    return urlDestination;
  },

  createHeader() {
    const menu = [
      "<span>00 </span>Home",
      "<span>01 </span>Destination",
      "<span>02 </span>Crew",
      "<span>03 </span>Technology",
    ];

    const containerHTML = document.getElementById("container");
    const headerHTML = document.createElement("header");
    const logoHTML = document.createElement("img");
    const hrHTML = document.createElement("hr");
    hrHTML.classList.add("hr_header");
    const navHTML = document.createElement("nav");
    const navListHTML = document.createElement("ul");

    logoHTML.src = "./assets/shared/logo.svg";

    headerHTML.appendChild(logoHTML);
    headerHTML.appendChild(hrHTML);
    headerHTML.appendChild(navHTML);
    navHTML.appendChild(navListHTML);

    for (let i = 0; i < menu.length; i++) {
      const navListItemHTML = document.createElement("li");
      navListItemHTML.className = "nav-list-item" + i;
      const navListItemLinkHTML = document.createElement("a");
      navListItemLinkHTML.innerHTML = menu[i];
      navListItemHTML.appendChild(navListItemLinkHTML);
      navListHTML.appendChild(navListItemHTML);
      navListItemLinkHTML.addEventListener("click", (e) => {
        app.navigation(e);
      });
    }

    containerHTML.prepend(headerHTML);

    const headHTML = document.getElementsByTagName("head")[0];
    const linkCSS = document.createElement("link");
    linkCSS.rel = "stylesheet";
    linkCSS.href = "./assets/css/header.css";
    headHTML.prepend(linkCSS);
    const linkRootCSS = document.createElement("link");
    linkRootCSS.rel = "stylesheet";
    linkRootCSS.href = "./assets/css/root.css";
    headHTML.prepend(linkRootCSS);
    const linkReset = document.createElement("link");
    linkReset.rel = "stylesheet";
    linkReset.href = "./assets/css/reset.css";
    headHTML.prepend(linkReset);
  },

  createDestination(article) {
    let headHTML = document.getElementsByTagName("head");
    headHTML[0].children[5].href = "./assets/css/destination.css";
    const headerHTML = document.getElementsByTagName("header")[0];
    for (
      let i = 0;
      i < headerHTML.children[2].children[0].children.length;
      i++
    ) {
      headerHTML.children[2].children[0].children[i].className = "";
    }
    headerHTML.children[2].children[0].children[1].className = "nav-list-item";

    let textHTML = [
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    ];

    let titleHTML = ["Moon", "Mars", "Europa", "Titan"];
    let avgHTML = ["384,400 km", "225 mil. km", "628 mil. km", "1.6 bil. km"];
    let estHTML = ["3 days", "9 months", "3 years", "7 years"];
    let imgLink = [
      "./assets/destination/image-moon.png",
      "./assets/destination/image-mars.png",
      "./assets/destination/image-europa.png",
      "./assets/destination/image-titan.png",
    ];

    const containerHTML = document.getElementById("container");
    const mainHTML = document.createElement("main");
    const h1HTML = document.createElement("h1");
    h1HTML.innerHTML = "<strong>01</strong> Pick your destination";
    containerHTML.appendChild(h1HTML);
    const articleHTML = document.createElement("article");
    mainHTML.appendChild(articleHTML);
    const imgHTML = document.createElement("img");
    imgHTML.setAttribute("id", "pict");
    imgHTML.src = imgLink[article];
    articleHTML.appendChild(imgHTML);
    const articleHTML2 = document.createElement("article");
    mainHTML.appendChild(articleHTML2);
    const ulHTML = document.createElement("ul");
    ulHTML.setAttribute("id", "destination");
    articleHTML2.appendChild(ulHTML);

    for (let i = 0; i < titleHTML.length; i++) {
      const liHTML = document.createElement("li");
      const aHTML = document.createElement("a");
      aHTML.innerHTML = titleHTML[i];
      aHTML.textContent = titleHTML[i];
      liHTML.appendChild(aHTML);
      ulHTML.appendChild(liHTML);

      aHTML.addEventListener("click", (e) => {
        this.choiseDestination(e);
      });
    }

    const h2HTML = document.createElement("h2");
    h2HTML.innerHTML = titleHTML[article];
    articleHTML2.appendChild(h2HTML);
    const pHTML = document.createElement("p");
    pHTML.innerHTML = textHTML[article];
    articleHTML2.appendChild(pHTML);
    const hrHTML = document.createElement("hr");
    articleHTML2.appendChild(hrHTML);
    const asideHTML = document.createElement("aside");
    articleHTML2.appendChild(asideHTML);
    const divHTML_avg = document.createElement("div");
    divHTML_avg.className = "avg";
    asideHTML.appendChild(divHTML_avg);
    const divHTML_est = document.createElement("div");
    divHTML_est.className = "est";
    asideHTML.appendChild(divHTML_est);
    const h3HTML_avg = document.createElement("h3");
    const h4HTML_avg = document.createElement("h4");
    h3HTML_avg.textContent = "Avg. distance";
    h4HTML_avg.textContent = avgHTML[article];
    divHTML_avg.appendChild(h3HTML_avg);
    divHTML_avg.appendChild(h4HTML_avg);
    const h3HTML_est = document.createElement("h3");
    const h4HTML_est = document.createElement("h4");
    h3HTML_est.textContent = "Est. travel time";
    h4HTML_est.textContent = estHTML[article];
    divHTML_est.appendChild(h3HTML_est);
    divHTML_est.appendChild(h4HTML_est);
    containerHTML.appendChild(mainHTML);

    switch (article) {
      case 0:
        ulHTML.children[article].className = "destination-item";
        break;
      case 1:
        ulHTML.children[article].className = "destination-item";
        break;
      case 2:
        ulHTML.children[article].className = "destination-item";
        break;
      case 3:
        ulHTML.children[article].className = "destination-item";
        break;
    }
  },

  choiseDestination(key) {
    const onScreen = document.getElementsByTagName("main")[0];
    const title = document.getElementsByTagName("h1")[0];
    switch (key.target.textContent) {
      case "Moon":
        onScreen.remove();
        title.remove();
        app.createDestination(0);
        break;

      case "Mars":
        onScreen.remove();
        title.remove();
        app.createDestination(1);
        break;

      case "Europa":
        onScreen.remove();
        title.remove();
        app.createDestination(2);
        break;

      case "Titan":
        onScreen.remove();
        title.remove();
        app.createDestination(3);
        break;
    }
  },

  createCrew(crew) {
    let headHTML = document.getElementsByTagName("head");
    headHTML[0].children[5].href = "./assets/css/crew.css";
    const headerHTML = document.getElementsByTagName("header")[0];
    for (
      let i = 0;
      i < headerHTML.children[2].children[0].children.length;
      i++
    ) {
      headerHTML.children[2].children[0].children[i].className = "";
    }
    headerHTML.children[2].children[0].children[2].className = "nav-list-item";

    headHTML[0].children[4].href = "./assets/css/crew.css";

    let textHTML = [
      "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
      "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
      "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
      "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    ];
    let titleHTML = [
      "Commander",
      "Flight Engineer",
      "Pilot",
      "Mission Specialist",
    ];
    let imgLink = [
      "./assets/crew/image-douglas-hurley.png",
      "./assets/crew/image-anousheh-ansari.png",
      "./assets/crew/image-victor-glover.png",
      "./assets/crew/image-mark-shuttleworth.png",
    ];
    let nameHTML = [
      "Douglas Hurley",
      "Anousheh Ansari",
      "Victor Glover",
      "Mark Shuttleworth",
    ];

    const containerHTML = document.getElementById("container");
    const mainHTML = document.createElement("main");
    containerHTML.appendChild(mainHTML);
    const articleHTML1 = document.createElement("article");
    mainHTML.appendChild(articleHTML1);
    const h1HTML = document.createElement("h1");
    articleHTML1.appendChild(h1HTML);
    h1HTML.innerHTML = "<strong>02</strong> Meet your crew";
    const asideHTML = document.createElement("aside");
    articleHTML1.appendChild(asideHTML);
    const h2HTML = document.createElement("h2");
    h2HTML.textContent = titleHTML[crew];
    asideHTML.appendChild(h2HTML);
    const h3HTML = document.createElement("h3");
    h3HTML.textContent = nameHTML[crew];
    asideHTML.appendChild(h3HTML);
    const pHTML = document.createElement("p");
    asideHTML.appendChild(pHTML);
    pHTML.innerHTML = textHTML[crew];
    const ulHTML = document.createElement("ul");
    asideHTML.appendChild(ulHTML);

    for (let i = 0; i < 4; i++) {
      const liHTML = document.createElement("li");
      ulHTML.appendChild(liHTML);
      const aHTML = document.createElement("a");
      aHTML.setAttribute("id", "crew-link" + i);
      liHTML.appendChild(aHTML);
      liHTML.addEventListener("click", (e) => app.choiseCrew(e));
    }

    switch (crew) {
      case 0:
        ulHTML.children[crew].className = "crew-item";
        break;
      case 1:
        ulHTML.children[crew].className = "crew-item";
        break;
      case 2:
        ulHTML.children[crew].className = "crew-item";
        break;
      case 3:
        ulHTML.children[crew].className = "crew-item";
        break;
    }

    const articleHTML2 = document.createElement("article");
    mainHTML.appendChild(articleHTML2);
    const imgHTML = document.createElement("img");
    imgHTML.setAttribute("id", "crewPict");
    imgHTML.setAttribute("src", imgLink[crew]);
    articleHTML2.appendChild(imgHTML);
  },

  choiseCrew(key) {
    const onScreen = document.getElementsByTagName("main")[0];

    switch (key.target.id) {
      case "crew-link0":
        onScreen.remove();
        app.createCrew(0);
        break;

      case "crew-link1":
        onScreen.remove();
        app.createCrew(1);
        break;

      case "crew-link2":
        onScreen.remove();
        app.createCrew(2);
        break;

      case "crew-link3":
        onScreen.remove();
        app.createCrew(3);
        break;
    }
  },

  createVehicle(vehicle) {
    const headHTML = document.getElementsByTagName("head");
    headHTML[0].children[5].href = "./assets/css/vehicle.css";
    const headerHTML = document.getElementsByTagName("header")[0];
    for (
      let i = 0;
      i < headerHTML.children[2].children[0].children.length;
      i++
    ) {
      headerHTML.children[2].children[0].children[i].className = "";
    }
    headerHTML.children[2].children[0].children[3].className = "nav-list-item";

    headHTML[0].children[4].href = "./assets/css/vehicle.css";

    let textHTML = [
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
      "  A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    ];
    let nameHTML = ["Launch vehicle", "Spaceport", "Space capsule"];
    let imgLink = [
      "./assets/technology/image-launch-vehicle-portrait.jpg",
      "./assets/technology/image-spaceport-portrait.jpg",
      "./assets/technology/image-space-capsule-portrait.jpg",
    ];

    const containerHTML = document.getElementById("container");
    const h1HTML = document.createElement("h1");
    h1HTML.innerHTML = "<strong>03</strong> Space launch 101";
    containerHTML.appendChild(h1HTML);
    const mainHTML = document.createElement("main");
    containerHTML.appendChild(mainHTML);
    const ulHTML = document.createElement("ul");
    ulHTML.setAttribute("id", "vehicle_nav");
    mainHTML.appendChild(ulHTML);

    for (let i = 0; i < 3; i++) {
      const liHTML = document.createElement("li");
      ulHTML.appendChild(liHTML);
      const aHTML = document.createElement("a");
      aHTML.setAttribute("id", "vehicle-link" + i);
      aHTML.textContent = i + 1;
      liHTML.appendChild(aHTML);
      liHTML.addEventListener("click", (e) => app.choiseVehicle(e));
    }

    const articleHTML1 = document.createElement("article");
    mainHTML.appendChild(articleHTML1);
    const h2HTML = document.createElement("h2");
    h2HTML.textContent = "The terminology...";
    articleHTML1.appendChild(h2HTML);
    const h3HTML = document.createElement("h3");
    h3HTML.textContent = nameHTML[vehicle];
    articleHTML1.appendChild(h3HTML);
    const pHTML = document.createElement("p");
    pHTML.innerHTML = textHTML[vehicle];
    articleHTML1.appendChild(pHTML);
    const articleHTML2 = document.createElement("article");
    mainHTML.appendChild(articleHTML2);
    const imgHTML = document.createElement("img");
    imgHTML.setAttribute("id", "vehiclePict");
    imgHTML.setAttribute("src", imgLink[vehicle]);
    articleHTML2.appendChild(imgHTML);

    switch (vehicle) {
      case 0:
        ulHTML.children[vehicle].className = "vehicle-item";
        break;
      case 1:
        ulHTML.children[vehicle].className = "vehicle-item";
        break;
      case 2:
        ulHTML.children[vehicle].className = "vehicle-item";
        break;
    }
  },

  choiseVehicle(key) {
    const onScreen = document.getElementsByTagName("main")[0];
    const title = document.getElementsByTagName("h1")[0];

    switch (key.path[0].textContent) {
      case "1":
        onScreen.remove();
        title.remove();
        app.createVehicle(0);
        break;

      case "2":
        onScreen.remove();
        title.remove();
        app.createVehicle(1);
        break;

      case "3":
        onScreen.remove();
        title.remove();
        app.createVehicle(2);
        break;
    }
  },

  navigation(event) {
    const onScreen = document.getElementsByTagName("main")[0];
    const title = document.getElementsByTagName("h1")[0];

    switch (event.target.textContent) {
      case "00 Home":
        onScreen.remove();
        title.remove();
        window.location.href = "./index.html";
        break;
      case "01 Destination":
        onScreen.remove();
        title.remove();
        app.createDestination(0);
        break;
      case "02 Crew":
        onScreen.remove();
        title.remove();
        app.createCrew(0);
        break;
      case "03 Technology":
        onScreen.remove();
        title.remove();
        app.createVehicle(0);
        break;
    }
  },

  auto() {
    const start = document.getElementsByClassName("start")[0];
    const index = document.getElementById("container");

    // start.addEventListener("click", function () {
    //   const onScreen = document.getElementsByTagName("main")[0];
    //   const title = document.getElementsByTagName("h1")[0];
    //   index.children[1].style.transition = "all 2s";
    //   index.children[1].style.opacity = "0";
    //   setTimeout(function () {
    //     app.createDestination(0);
    //   }, 2000);
    //   setTimeout(function () {
    //     app.createDestination(1);
    //     onScreen.remove();
    //     title.remove();
    //   }, 5000);
    //   setTimeout(function () {
    //     onScreen.remove();
    //     title.remove();
    //     app.createDestination(2);
    //   }, 10000);
    //   setTimeout(function () {
    //     onScreen.remove();
    //     title.remove();
    //     app.createDestination(3);
    //   }, 15000);
    // });
  },

  init() {
    this.createHeader();
    this.auto();
  },
};

app.init();
