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
    
    section = document.getElementById("section");
    
    destroySecBtn.addEventListener("click", (e) => {
        e.target.parentNode.remove();
    })
}