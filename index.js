const main = document.querySelector("main");
const createTextBtn = document.getElementById("create-text");
const createHeadlineTextBtn = document.getElementById("create-headline-text");

const createRowBtn = document.getElementById("create-row");
const createSectionBtn = document.getElementById("create-section");

let section = document.getElementById("section");

createRowBtn.addEventListener("click", () => {
    
    if (!main.contains(section)) createSection();
    
    createRow();
})

createSectionBtn.addEventListener("click", () => {
    createSection();
})

createHeadlineTextBtn.addEventListener("click", () => {
    
    if(!main.contains(section)) createSection();
    
    const element = document.createElement("div");
    const elementBtn = document.createElement("button");
    const headlineText = document.createElement("h1");
    const destroyElementBtn = document.createElement("button");
    
    element.classList.add("element");
    elementBtn.id = "element-btn";
    elementBtn.innerText = "Text";
    
    headlineText.classList.add("headline-text");
    headlineText.contentEditable = "true";
    headlineText.innerText = "Large Headline Text.";
    
    destroyElementBtn.classList.add("destroy-element-btn");
    destroyElementBtn.id = "destroy-element-btn";
    destroyElementBtn.innerText = "Destroy";
    
    element.append(elementBtn);
    element.append(headlineText);
    element.append(destroyElementBtn);
    createRowAndAppend(element);
    
    destroyElementBtn.addEventListener("click", (e) => {
        e.target.parentNode.remove();
    })
})

createTextBtn.addEventListener("click", () => {
    // check if there's already a section element
    // if yes, append to that.
    // if no, create one.
    if (!main.contains(section)) {
        createSection();
    }

    const element = document.createElement("div");
    const elementBtn = document.createElement("button");
    const text = document.createElement("p");
    const destroyElementBtn = document.createElement("button");
    
    element.classList.add("element");
    elementBtn.id = "element-btn";
    elementBtn.innerText = "Text";
    
    text.classList.add("text");
    text.contentEditable = "true";
    text.innerText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dolore, alias, numquam enim ab voluptate id quam harum ducimus cupiditate similique quisquam et deserunt, recusandae.";
    
    destroyElementBtn.classList.add("destroy-element-btn");
    destroyElementBtn.id = "destroy-element-btn";
    destroyElementBtn.innerText = "Destroy";

    element.append(elementBtn);
    element.append(text);
    element.append(destroyElementBtn);
    createRowAndAppend(element);

    destroyElementBtn.addEventListener("click", (e) => {
        e.target.parentNode.remove();
    })
})

function createRowAndAppend(element) {
    const row = document.createElement("div");
    const rowBtn = document.createElement("button");
    const destroyRowBtn = document.createElement("button");
    
    row.classList.add("row");
    rowBtn.id = "row-btn";
    rowBtn.innerText = "Row";
    destroyRowBtn.id = "destroy-row-btn";
    destroyRowBtn.innerText = "Destroy";
    
    row.append(rowBtn);
    row.append(element);
    row.append(destroyRowBtn);
    section.append(row);
    
    destroyRowBtn.addEventListener("click", (e) => {
        e.target.parentNode.remove();
    })
}

function createRow() {
    const row = document.createElement("div");
    const rowBtn = document.createElement("button");
    const destroyRowBtn = document.createElement("button");
    
    row.classList.add("row");
    rowBtn.id = "row-btn";
    rowBtn.innerText = "Row";
    destroyRowBtn.id = "destroy-row-btn";
    destroyRowBtn.innerText = "Destroy";
    
    row.append(rowBtn);
    row.append(destroyRowBtn);
    section.append(row);
    
    destroyRowBtn.addEventListener("click", (e) => {
        e.target.parentNode.remove();
    })
}

function createSection() {
    const sec = document.createElement("section");
    const secBtn = document.createElement("button");
    const destroySecBtn = document.createElement("button");   
    
    sec.id = "section";
    secBtn.id = "section-btn";
    secBtn.innerText = "Section";
    destroySecBtn.id = "destroy-section-btn";
    destroySecBtn.innerText = "Destroy";
    
    sec.append(secBtn);
    sec.append(destroySecBtn);
    main.append(sec);
    
    const sections = document.getElementsByTagName("section");
    section = sections[sections.length - 1];

    destroySecBtn.addEventListener("click", (e) => {
        e.target.parentNode.remove();
    })
}