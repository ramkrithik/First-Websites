var comp = document.querySelector(".comp");
var todo = document.querySelector(".todo");
var c = [];
var td = [];
const totalfun = () => {
    const va = () => {
        const val = document.querySelector(".forms input");
        const btn = document.querySelector(".forms button");
        btn.addEventListener("click", () => {
            td.push(val.value);
            addval(val.value);
        });
    };
    const addval = (va) => {
        var node = document.createElement("LI");
        var textnode = document.createTextNode(va);
        node.appendChild(textnode);
        todo.appendChild(node);
    };
    va();
};
totalfun();