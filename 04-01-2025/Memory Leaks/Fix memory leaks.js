function createMemoryLeakFixed() {
    let button = document.createElement('button');
    button.textContent = "Click Me!";
    document.body.appendChild(button);

    function handleClick() {
        alert("Button clicked!");
    }

    // Adding an event listener
    button.addEventListener("click", handleClick);

    // Fix: Remove the event listener before removing the button from the DOM
    button.removeEventListener("click", handleClick);

    // Now, it's safe to remove the button
    document.body.removeChild(button);  
}

// Call the function with no memory leak
createMemoryLeakFixed();
