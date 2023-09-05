import { create, sections } from "./smol.js";

const main = document.querySelector("main");
const createTextBtn = document.getElementById("create-text");
const createHeadlineTextBtn = document.getElementById("create-headline-text");

const testBtn = document.getElementById("test-btn");

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