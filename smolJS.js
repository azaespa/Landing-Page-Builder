
const create = (() => {
    const element = (obj) => {
        console.log(obj.tag);
        console.log(obj.classList);
        console.log(obj.id);
        console.log(obj.innerText);

        const elem = document.createElement(obj.tag);
        elem.classList.add(obj.classList);
        elem.id = obj.id;
        elem.innerText = obj.innerText;

        document.body.append(elem);
    }

    return { element };
})()

export { create };