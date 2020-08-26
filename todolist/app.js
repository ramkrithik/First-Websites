const totalfun = () => {
    var comp = document.querySelector(".comp");
    var todo = document.querySelector(".todo");
    var c = new Array();
    var td = new Array();
    const bt = document.querySelector(".options button");
    const va = () => {
        const val = document.querySelector(".forms input");
        const btn = document.querySelector(".forms button");
        btn.addEventListener("click", () => {
            event.preventDefault();
            const x = val.value;
            td.push(x);
            addval(x);
        });
    };
    const addval = (va) => {
        var node = document.createElement("LI");
        node.textContent = va;
        todo.appendChild(node);
    };
    bt.addEventListener("click", () => {});

    va();
};
totalfun();