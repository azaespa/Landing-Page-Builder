import { create } from './smolJS.js';

const main = document.querySelector("main");
const createTextBtn = document.getElementById("create-text");
const createHeadlineTextBtn = document.getElementById("create-headline-text");

const createRowBtn = document.getElementById("create-row");
const createSectionBtn = document.getElementById("create-section");

const testBtn = document.getElementById("test-btn");
const saveBtn = document.getElementById("save-btn");

let section = document.querySelector(".section");

let sections = [];

// Fetch the saved sections from the localStorage
// Refactor the code next time
let showSections = (localStorage.getItem("LPB") != null) ? JSON.parse(localStorage.getItem("LPB")) : null;
if (showSections != null) {
    for (let sec of showSections) {
        main.innerHTML += sec.e;
    }
}

createRowBtn.addEventListener("click", () => {

    if (!main.contains(section)) createSection();

    row.create();
})

createSectionBtn.addEventListener("click", () => {
    createSection();
})

createHeadlineTextBtn.addEventListener("click", () => {

    if (!main.contains(section)) createSection();

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
    row.createAndAppend(element);

    destroyElementBtn.addEventListener("click", (e) => {
        e.target.parentNode.remove();
    })
})

createTextBtn.addEventListener("click", () => {
    if (!main.contains(section)) {
        createSection();
    }

    // const elementContainer = create.elementContainer();
    const textElement = create.TextElement("Lorem lorem");

    // elementContainer.append(textElement);
    console.log(textElement)
    row.createAndAppend(textElement.create());
    
    // const allElements = document.querySelector("main").querySelectorAll("section");

    // Push to sections array as object
    // Next time, find a way to make them wont duplicate in the array
    // for (let element of allElements) {
    //     sections.push({ e: element.outerHTML, id: element.id });
    // }
})

testBtn.addEventListener("click", () => {

})

saveBtn.addEventListener("click", () => {
    // Save all the sections and all its children to localStorage
    localStorage.setItem("LPB", JSON.stringify(sections));
})

const row = (() => {
    const create = () => {
        const row = document.createElement("div");
        const rowBtn = document.createElement("button");
        const destroyRowBtn = document.createElement("button");

        row.classList.add("row");
        row.id = new Date().getTime();
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

        return { row };
    }

    const createAndAppend = (element) => {
        create().row.append(element);
    }

    return { create, createAndAppend };
})()

function createSection() {
    const sec = document.createElement("section");
    const secBtn = document.createElement("button");
    const destroySecBtn = document.createElement("button");

    sec.classList.add("section");
    sec.id = new Date().getTime();
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

// const document = () => {
//     const element = () => {
        
//     }
// }