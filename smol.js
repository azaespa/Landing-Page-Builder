const create = (() => {
    const section = () => {
        const _section = document.createElement("section");
        const secBtn = document.createElement("button");
        const destroySecBtn = document.createElement("button");

        _section.classList.add("section");
        _section.id = new Date().getTime();
        secBtn.id = "section-btn";
        secBtn.innerText = "Section";
        destroySecBtn.id = "destroy-section-btn";
        destroySecBtn.innerText = "Destroy";

        _section.append(secBtn);
        _section.append(destroySecBtn);
        
        return _section;
    }

    const row = () => {
        const _row = document.createElement("div");
        const rowBtn = document.createElement("button");
        const destroyRowBtn = document.createElement("button");

        _row.classList.add("row");
        _row.id = new Date().getTime();
        rowBtn.id = "row-btn";
        rowBtn.innerText = "Row";
        destroyRowBtn.id = "destroy-row-btn";
        destroyRowBtn.innerText = "Destroy";

        _row.append(rowBtn);
        _row.append(destroyRowBtn);

        return _row;
    }

    const element = () => {
        const _element = document.createElement("div");
        _element.classList.add("element");
        _element.id = new Date().getTime();
        
        const elemBtn = document.createElement("button");
        elemBtn.id = "element-btn";
        elemBtn.innerText = "Text";

        const destroyElem = document.createElement("button");
        destroyElem.classList.add("destroy-element-btn");
        destroyElem.id = "destroy-element-btn";
        destroyElem.innerText = "Destroy";
    
        _element.append(elemBtn);
        _element.append(destroyElem);
        
        return _element;
    }

    const text = () => {
        const _text = document.createElement("p");
        _text.classList.add("text");
        _text.contentEditable = true;
        _text.innerText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dolore, alias, numquam enim ab voluptate id quam harum ducimus cupiditate similique quisquam et deserunt, recusandae.";
        
        return _text;
    }

    const headlineText = () => {
        const _headlineText = document.createElement("h1");
        _headlineText.classList.add("headline-text");
        _headlineText.contentEditable = "true";
        _headlineText.innerText = "Large Headline Text.";

        return _headlineText;
    }

    const bulletedList = () => {
        const ul = document.createElement("ul");
        const li1 = document.createElement("li");
        const li2 = document.createElement("li");
        const li3 = document.createElement("li");

        li1.innerText = "Lorem ipsum dolor";
        li2.innerText = "Lorem ipsum dolor";
        li3.innerText = "Lorem ipsum dolor";

        ul.append(li1);
        ul.append(li2);
        ul.append(li3);

        return ul;
    }
    
    return { section, row, element, text, headlineText, bulletedList };
})();

const sections = (() => {
    const isAvailableOn = (main) => {
        return main.contains(document.querySelector(".section"));
    }

    const selectFurthest = () => {
        const _sections = document.getElementsByTagName("section");

        return _sections[_sections.length - 1];
    }

    return { isAvailableOn, selectFurthest };
})();

export { create, sections };