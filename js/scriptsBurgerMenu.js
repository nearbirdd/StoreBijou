document.querySelector(".burgerButton").addEventListener('click', function() {
    this.classList.toggle('active');
});

const navLinks = document.querySelector(".navLinks");
let navChildren = Object.values(navLinks.children);
navLinks.firstElementChild.classList.add('pushed')

navChildren.forEach((child) => {
    child.addEventListener("click", () => {
        navChildren.forEach(el => el.classList.remove('pushed'));
        child.classList.add('pushed');
    });
});
