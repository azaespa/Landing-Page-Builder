import { create, sections } from "./smol.js";

const main = document.querySelector("main");
const createTextBtn = document.getElementById("create-text");
const createHeadlineTextBtn = document.getElementById("create-headline-text");
const createBulletedList = document.getElementById("bulleted-list");
const createRowBtn = document.getElementById("create-row");
const createSectionBtn = document.getElementById("create-section");

const getBtn = document.getElementById("get-btn");
const saveBtn = document.getElementById("save-btn");

getBtn.addEventListener("click", () => {
    const lsKey = (localStorage.getItem("lsKey") !== null);

    if (!lsKey) return;

    main.innerHTML = JSON.parse(localStorage.getItem("lsKey"));

    const destroyBtns = document.querySelectorAll("#destroy-btn");
    console.log(destroyBtns)
    for (const btn of destroyBtns) {
        btn.addEventListener("click", (e) => {
            e.target.parentNode.remove();
        })
        console.log(btn)
    }
})

saveBtn.addEventListener("click", () => {
    localStorage.setItem("lsKey", JSON.stringify(main.innerHTML));
})

createTextBtn.addEventListener("click", () => {
    const section = sections.isAvailableOn(main) ? sections.selectFurthest() : create.section();
    const row = create.row();
    const element = create.element();
    const text = create.text();

    element.append(text);
    row.append(element);
    section.append(row);
    main.append(section);
});

createHeadlineTextBtn.addEventListener("click", () => {
    const section = sections.isAvailableOn(main) ? sections.selectFurthest() : create.section();
    const row = create.row();
    const element = create.element();
    const headlineText = create.headlineText();
    
    element.append(headlineText);
    row.append(element);
    section.append(row);
    main.append(section);
});

createBulletedList.addEventListener("click", () => {
    const section = sections.isAvailableOn(main) ? sections.selectFurthest() : create.section();
    const row = create.row();
    const element = create.element();
    const bulletedList = create.bulletedList();
    
    element.append(bulletedList);
    row.append(element);
    section.append(row);
    main.append(section);
})

createRowBtn.addEventListener("click", () => {
    const section = sections.isAvailableOn(main) ? sections.selectFurthest() : create.section();
    const row = create.row();

    section.append(row);
    main.append(section);
})

createSectionBtn.addEventListener("click", () => {
    const section = create.section();

    main.append(section);
})