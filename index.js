const mainTag = document.querySelector("main");

const element = mainTag.querySelector(".element");

function handleClickElement() {
    console.log("Element clicked");
}

function init(){
    element.addEventListener("click", handleClickElement);
}

init();