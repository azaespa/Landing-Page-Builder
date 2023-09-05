import { create, sections } from "./smol.js";

const main = document.querySelector("main");
const createTextBtn = document.getElementById("create-text");

const testBtn = document.getElementById("test-btn");

// When createText button is clicked
createTextBtn.addEventListener("click", () => {

    if (main.contains(document.querySelector(".section"))) {
        // select.lastSection();
    };

    const section = sections.isAvailableOn(main) ? sections.selectFurthest() : create.section();
    const row = create.row();
    const element = create.element();
    const text = create.text();

    element.append(text);
    row.append(element);
    section.append(row);
    main.append(section);
});
// No section available = create section
// Yes section available = select the very last section
// Create new row inside of that section
// Create an element inside of that row

testBtn.addEventListener("click", () => {
    console.log(sections.isAvailableOn(main));
})

