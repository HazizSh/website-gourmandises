// Variables
const searchIcon = document.querySelector(".about-us-header .search-icon")
const aboutUsTitle = document.querySelector(".about-us-header .about-us-title")
const aboutUsDescription = document.querySelector(".about-us-section .about-us-description")
const aboutUsSection = document.querySelector(".about-us-section")

// Make product bigger on click
const products = document.querySelectorAll(".product");
const productSection = document.querySelector(".product-section");
const pictures = document.querySelector(".product-section .pictures");

products.forEach(product => {
    product.addEventListener("click", () => {
        const allElements = Array.from(document.body.querySelectorAll("*"));
        const nonProductElements = allElements.filter(
            element => !element.classList.contains("product")
        );

        if (product.classList.contains("selected-product")) {
            // UNCLICKED!!!
            product.classList.remove("selected-product");
            
            products.forEach(p => p.classList.remove("blurred"));
            nonProductElements.forEach(element => {
                element.classList.remove("blurred");
            });
        } else {
            // CLICKED!!!
            // First, remove "selected-product" and "blurred" from all products
            products.forEach(p => {
                p.classList.remove("selected-product");
                p.classList.add("blurred");  // Blur all products first
            });

            product.classList.add("selected-product");
            nonProductElements.forEach(element => {
                element.classList.add("blurred");
            });
            product.classList.remove("blurred");
            product.querySelectorAll('*').forEach(element => {
                element.classList.remove("blurred");
            });

            productSection.classList.remove("blurred");
            pictures.classList.remove("blurred");
        }
    });
});

// Appear the "about us" description on click
let hasImageBeenClicked = false;
function onSearchIconClick() {
    if (hasImageBeenClicked) {
        // CLOSE!
        aboutUsTitle.style.color = "rgb(255, 240, 211)";
        aboutUsTitle.style.textShadow = "2px 2px #ff0051";
        aboutUsTitle.style.paddingTop = "27px"
        searchIcon.style.paddingTop = "19px"; // Reset only the icon
        aboutUsDescription.style.opacity = "0";
        setTimeout(function () {
            aboutUsDescription.style.display = "none";
        }, 150);
        hasImageBeenClicked = false;
    } else {
        // OPEN!
        aboutUsTitle.style.color = "#fa3e79";
        aboutUsTitle.style.textShadow = "2px 2px rgb(255, 240, 211)";
        aboutUsTitle.style.paddingTop = "10px"
        searchIcon.style.paddingTop = "7px"; // Adjust only the icon
        hasImageBeenClicked = true;
        aboutUsDescription.style.display = "block";
        setTimeout(function () {
            aboutUsDescription.style.opacity = "1";
        }, 50);
    }
}

searchIcon.onclick = onSearchIconClick;

// Copy-right data changer
document.getElementById('current-year').textContent = new Date().getFullYear();
// Scale for mobile
var siteWidth = 1280;
var scale = screen.width /siteWidth;

document.querySelector('meta[name="viewport"]').setAttribute('content', 'width='+siteWidth+', initial-scale='+scale+'');
