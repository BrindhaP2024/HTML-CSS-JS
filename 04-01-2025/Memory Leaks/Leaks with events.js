
function createMemoryLeak() {
    let button = document.createElement('button');
    button.textContent = "Click Me!";
    document.body.appendChild(button);

    button.addEventListener("click", function() {
        alert("Button clicked!");
    });

    document.body.removeChild(button);  
    // However, the event listener still keeps a reference to the button, preventing it from being garbage collected.
}
setInterval(createMemoryLeak, 1000);  // The function will be called every second, causing memory leak.
