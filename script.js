const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");
const propertyType = document.getElementById("propertyType");

const cards = document.querySelectorAll(".property-card");

searchBtn.addEventListener("click", () => {
    const location = searchInput.value.toLowerCase().trim();
    const type = propertyType.value;

    cards.forEach(card => {
        const cardLocation = card.querySelector(".property-content p").textContent.toLowerCase();
        const cardType = card.dataset.type;

        const locationMatch = location === "" || cardLocation.includes(location);
        const typeMatch = type === "all" || cardType === type;

        if (locationMatch && typeMatch) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }
    });
});
// =========================
// PROPERTY MODAL
// =========================

const modal = document.getElementById("propertyModal");
const closeModal = document.querySelector(".close-modal");

const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalLocation = document.getElementById("modalLocation");
const modalPrice = document.getElementById("modalPrice");
const modalDescription = document.getElementById("modalDescription");

const viewButtons = document.querySelectorAll(".view-btn");

const properties = [
{
title:"Luxury Villa",
location:"📍 Ikoyi, Lagos",
price:"₦850M",
image:"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
description:"A stunning 5-bedroom luxury villa with a private swimming pool, modern interiors, spacious garden and premium security."
},
{
title:"Modern Apartment",
location:"📍 Lekki Phase 1",
price:"₦320M",
image:"https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1200&q=80",
description:"Elegant 3-bedroom apartment featuring contemporary finishes, smart home technology and breathtaking city views."
},
{
title:"Family Home",
location:"📍 Victoria Island",
price:"₦600M",
image:"https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80",
description:"Beautiful family residence designed for comfort, offering spacious living areas and excellent investment value."
},
{
title:"Luxury Duplex",
location:"📍 Banana Island, Lagos",
price:"₦1.2B",
image:"https://images.unsplash.com/photo-1600573472592-401b489a3cdc?auto=format&fit=crop&w=1200&q=80",
description:"An exceptional 6-bedroom luxury duplex featuring premium finishes, expansive living spaces, modern architecture, and world-class amenities in Banana Island."
}
];

viewButtons.forEach((button,index)=>{

button.addEventListener("click",(e)=>{

e.preventDefault();

modal.style.display="flex";

modalImage.src=properties[index].image;
modalTitle.textContent=properties[index].title;
modalLocation.textContent=properties[index].location;
modalPrice.textContent=properties[index].price;
modalDescription.textContent=properties[index].description;

});

});

closeModal.onclick=function(){
modal.style.display="none";
}

window.onclick=function(e){
if(e.target===modal){
modal.style.display="none";
}
}
// =========================
// FAVORITE BUTTON
// =========================

const favoriteButtons = document.querySelectorAll(".favorite-btn");

favoriteButtons.forEach(button => {

    button.addEventListener("click", () => {

        button.classList.toggle("active");

        if(button.classList.contains("active")){
            button.textContent = "❤";
        }else{
            button.textContent = "♡";
        }

    });

});
// =========================
// DARK MODE
// =========================

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
        themeToggle.textContent = "☀️";
    }else{
        themeToggle.textContent = "🌙";
    }

});
// =========================
// SCROLL REVEAL
// =========================

const reveals = document.querySelectorAll(".reveal");

function revealSections(){

    reveals.forEach(section=>{

        const windowHeight = window.innerHeight;
        const top = section.getBoundingClientRect().top;

        if(top < windowHeight - 120){
            section.classList.add("active");
        }

    });

}

window.addEventListener("scroll", revealSections);

revealSections();
// =========================
// MOBILE MENU
// =========================

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    if(navLinks.classList.contains("active")){
        menuToggle.textContent = "✕";
    }else{
        menuToggle.textContent = "☰";
    }

});
const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
        scrollBtn.classList.add("show");
    } else {
        scrollBtn.classList.remove("show");
    }
});

scrollBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.classList.add("hide");
    }, 700);
});
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuToggle.textContent = "☰";
    });
});
// =========================
// CONTACT FORM
// =========================

const contactForm = document.querySelector(".contact-form");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function(e){

    e.preventDefault();

    formMessage.classList.add("show");

    contactForm.reset();

    setTimeout(() => {
        formMessage.classList.remove("show");
    }, 4000);

});
// =========================
// GALLERY
// =========================

const galleryImages = document.querySelectorAll(".gallery-grid img");
const galleryModal = document.getElementById("galleryModal");
const galleryModalImage = document.getElementById("galleryImage");

galleryImages.forEach(image => {

    image.addEventListener("click", () => {

        galleryModal.style.display = "flex";
        galleryModalImage.src = image.src;

    });

});

galleryModal.addEventListener("click", () => {

    galleryModal.style.display = "none";

});