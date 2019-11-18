// setup for links
const home = document.getElementById("home");
const about = document.getElementById("about");
const services = document.getElementById("services");
const contact = document.getElementById("contact");

home.addEventListener("click", () => {
    window.scroll({ top: 0, behavior: "smooth" });
});
about.addEventListener("click", () => {
    window.scroll({ top: 800, behavior: "smooth" });
});
services.addEventListener("click", () => {
    window.scroll({ top: 1300, behavior: "smooth" });
});
contact.addEventListener("click", () => {
    window.scroll({ top: document.body.clientHeight, behavior: "smooth" });
});
