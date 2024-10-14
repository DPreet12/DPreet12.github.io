/*==================== toggle icon navbar ====================*/
/*==================== scroll sections active link ====================*/
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
}
/*==================== sticky navbar ====================*/
/*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/

let header = document.querySelector("header");
header.classList.toggle("sticky", window.scrollY > 100);

menuIcon.classList.remove("bx-x");
menuIcon.classList.remove("active");

/*==================== scroll reveal ====================*/

ScrollReveal( {
    reset: true,
    distance: "80px",
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top"});
ScrollReveal().reveal(".home-img, .services-container, .contact form", { origin: "bottom"});
ScrollReveal().reveal(".home-content h1, .about-img", {origin: "left"});
ScrollReveal().reveal(".home-content p, .about-content", {origin: "right"});
/*==================== typed js ====================*/

const typed = new Typed(".multiple-text", {
    strings: ["FullStack Engineer"] /*"Backend Engineer", "FullStack Engineer"]*/,
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})

/*const headerNew = document.createElement("header");
headerNew.setAttribute("class", "header")
const aNew = document.createElement("a");
aNew.href = "#";
aNew.setAttribute( "class", "logo");
aNew.textContent = "Portfolio";

const iNew = document.createElement("i");
iNew.setAttribute("class", "box-menu") 
iNew.setAttribute( "id", "menu-icon")

const navNew = document.createElement("nav");
navNew.setAttribute("class", "navbar")
const aHome = document.createElement("a");
aHome.href = "#home";
aHome.setAttribute("class", "active");
aHome.textContent = "Home"

const aAbout = document.createElement("a");
aAbout.href = "#about";
aAbout.textContent = "About";
const aServices = document.createElement("a");
aServices.href = "#services";
aServices.textContent = "Services"
const aPortfolio = document.createElement("a");
aPortfolio.href = "#portfolio";
aPortfolio.textContent = "Portfolio";
const aContact = document.createElement("a");
aContact.href = "#contact";
aContact.textContent = "Contact"


//headerNew.append(aNew, iNew, navNew)
//navNew.append( aHome, aAbout, aServices, aPortfolio, aContact)

headerNew.append(aNew)
headerNew.append(iNew)
headerNew.append(navNew)
navNew.append(aHome);
navNew.append(aAbout)
navNew.append(aServices)
navNew.append(aPortfolio)
navNew.append(aContact)

console.log(headerNew)



const sectionNew = document.createElement("section");
sectionNew.setAttribute("class", "home");
sectionNew.setAttribute("id", "home");

const divSection = document.createElement("div");
divSection.setAttribute("class", "home-content");

sectionNew.append(divSection)
const h3New = document.createElement("h3");
h3New.textContent = "Hello, It's Me";
const h1new = document.createElement("h1");
h1new.textContent = "Dharampreet Singh Sandhu";
const h3Second = document.createElement("h3");
h3Second.textContent = "And I'm a ";
const spanTag = document.createElement("span");
spanTag.textContent = "Frontend Engineer";
h3Second.append(spanTag)
const pNew = document.createElement("p");
pNew.textContent = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, molestiae modi magni similique laudantium.Laborum, nulla quis!";

divSection.append(h3New, h1new, h3Second, pNew);

const divSocial = document.createElement("div");
divSocial.setAttribute("class", "social-media");
divSection.append(divSocial)

const aFacebook = document.createElement("a");
aFacebook.href = "#"
divSocial.append(aFacebook)
const fbi = document.createElement("i");
fbi.setAttribute("class", "bx bxl-facebook");
aFacebook.append(fbi)

const aTwitter = document.createElement("a");
aTwitter.href = "#";
divSocial.append(aTwitter);
const twi = document.createElement("i");
twi.setAttribute("class", "bx bxl-twitter");
aTwitter.append(twi)

const aInstagram = document.createElement("a");
aInstagram.href = "#";
divSocial.append(aInstagram);
const inst = document.createElement("i");
inst.setAttribute("class", "bx bxl-instagram");
aInstagram.append(inst)

const aLinkedin = document.createElement("a");
aLinkedin.href = "#";
divSocial.append(aLinkedin);
const link = document.createElement("i");
link.setAttribute("class", "bx bxl-linkedin");
aLinkedin.append(link)

const aBtn = document.createElement("a");
aBtn.href = "#";
aBtn.setAttribute("class", "btn");
aBtn.textContent = "Download CV";
divSection.append(aBtn);

const divImage = document.createElement("div");
divImage.setAttribute("class", "home-img");

sectionNew.append(divImage);
const imgTag = document.createElement("img");
imgTag.src = "./images/personal-portfolio-pic.png" ;
divImage.append(imgTag);

const selectBody = document.querySelector("body");
selectBody.append(headerNew)
selectBody.append(sectionNew)

console.log(headerNew)
console.log(sectionNew)
*/

