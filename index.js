const main = document.querySelector("main");
const createTextBtn = document.getElementById("create-text");

let section = document.getElementById("section");

createTextBtn.addEventListener("click", () => {
    // check if there's already a section element
    // if yes, append to that.
    // if no, create one.
    if (!main.contains(section)) {
        createSection();
    }

    const element = document.createElement("div");
    const elementBtn = document.createElement("button");
    element.classList.add("element");
    elementBtn.id = "element-btn";
    elementBtn.innerText = "Text";
    
    const text = document.createElement("p");
    
    text.classList.add("text");
    text.contentEditable = "true";
    text.innerText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dolore, alias, numquam enim ab voluptate id quam harum ducimus cupiditate similique quisquam et deserunt, recusandae.";
    
    element.append(elementBtn);
    element.append(text);
    createRowAndAppend(element);
})

function createRowAndAppend(element) {
    const row = document.createElement("div");
    const rowBtn = document.createElement("button");
    
    row.classList.add("row");
    rowBtn.id = "row-btn";
    rowBtn.innerText = "Row";
    
    row.append(rowBtn);
    row.append(element);
    section.append(row);
}

function createSection() {
    const sec = document.createElement("section");
    const secBtn = document.createElement("button");
    
    sec.id = "section";
    secBtn.id = "section-btn";
    secBtn.innerText = "Section";
    
    sec.append(secBtn);
    main.append(sec);
    
    section = document.getElementById("section");
}