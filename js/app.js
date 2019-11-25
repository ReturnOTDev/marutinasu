// setup for navigation links
const home = document.querySelectorAll(".link-to-home");
const about = document.getElementById("about");
const services = document.getElementById("services");
const contact = document.getElementById("contact");
const contactCta = document.getElementById("cta");
// setup for location elements
const servicesLocation = document.querySelector(".services");
const aboutLocation = document.querySelector(".about");
const contactLocation = document.querySelector(".contact");
const nav = document.querySelector("nav");
// calculating current offset relative to viewport
function offset(el) {
    return el.getBoundingClientRect().top + window.scrollY - nav.clientHeight;
}
// auto-scrolling to location of element when link is clicked
const setLink = (link, location) => {
    link.addEventListener("click", () => {
        window.scrollTo({
            top: offset(location),
            behavior: "smooth"
        });
    });
};
// setting the event listeners
home.forEach(link => {
    link.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
setLink(about, aboutLocation);
setLink(services, servicesLocation);
setLink(contact, contactLocation);
setLink(contactCta, contactLocation);
