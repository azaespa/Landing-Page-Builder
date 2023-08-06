
const create = (() => {
    const element = () => {
        
        const container = document.createElement("div");
        container.classList.add("element");
        container.id = new Date().getTime();
        
        const elemBtn = document.createElement("button");
        elemBtn.id = "element-btn";
        elemBtn.innerText = "Text";

        const destroyElem = document.createElement("button");
        destroyElem.classList.add("destroy-element-btn");
        destroyElem.id = "destroy-element-btn";
        destroyElem.innerText = "Destroy";
    
        container.append(elemBtn);
        container.append(destroyElem);
        document.body.append(container);
     
        destroyElem.addEventListener("click", (e) => {
            e.target.parentNode.remove();
        })    

        return { container };
    }

    const textElement = () => {
        const text = document.createElement("p");
        text.classList.add("text");
        text.contentEditable = true;
        text.innerText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dolore, alias, numquam enim ab voluptate id quam harum ducimus cupiditate similique quisquam et deserunt, recusandae.";

        // elementContainer().append(text);
        element().container.append(text);
        
        const value = () => {
            const val = text;
            text.parentNode.remove();
            return val;
        }
        
        return { value };
    }

    return { textElement };
})()

export { create };