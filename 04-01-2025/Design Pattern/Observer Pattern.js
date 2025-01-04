// Observer Pattern using DOM Events

const button = document.getElementById("myButton");

// Observer: Logging clicks
button.addEventListener("click", function () {
    console.log("Button clicked!");
});

// Observer: Changing color on click
button.addEventListener("click", function () {
    document.body.style.backgroundColor = "lightblue";
});
