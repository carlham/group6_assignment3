const scroller = scrollama();

scroller
    .setup({
        step: ".step"
    })
    .onStepEnter((response) => {
        console.log("hello");
        response.element.classList.add("animator");
    })
    .onStepExit((response) => {
        response.element.classList.remove("animator");
    })