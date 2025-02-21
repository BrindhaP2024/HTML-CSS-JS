const addImageBtn = document.getElementById("addImageBtn");
const gallery = document.getElementById("gallery");

function addImage() {
    const image = document.createElement("img");

    image.src = `https://picsum.photos/200?random=${Math.floor(Math.random() * 1000)}`;
    
    // Add a click event listener to visit of the image list
        image.addEventListener("click", function() {
        image.classList.toggle("hidden");
    });

    gallery.appendChild(image);
}

// Add event listener(adding new image)
addImageBtn.addEventListener("click", addImage);
