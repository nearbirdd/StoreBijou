const navLinks = document.querySelector(".navLinks");
let navChildren = Object.values(navLinks.children);

navChildren.forEach((child) => {
    child.addEventListener("click", () => {
        navChildren.forEach(el => el.classList.remove('pushed'));
        child.classList.add('pushed');
    });
});