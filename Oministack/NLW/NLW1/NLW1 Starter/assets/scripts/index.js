const buttonSearch = document.querySelector(".header__titulo");
const modal = document.querySelector("#modal");
const close = document.querySelector(".modal__header a")

buttonSearch.addEventListener('click', () => {
    modal.classList.remove("hide")
});

close.addEventListener('click', () =>{
    modal.classList.add("hide");
})