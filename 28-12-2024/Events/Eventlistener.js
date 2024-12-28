document.addEventListener("DOMContentLoaded", function() {
    const btn = document.getElementById('addbtn');
    const rmv = document.getElementById('rmv');
    const foodList = document.getElementById('food-list');  // Correct id selector for <ul>

    const foods = ["Biryani", "Samosa", "Pani Puri", "Paneer Butter Masala", "Dosa"];
    let foodIndex = 0;

    // Function to handle adding food items
    function handleClick() {
        if (foodIndex < foods.length) {
            const listItem = document.createElement('li'); // Create a new list item
            listItem.textContent = foods[foodIndex]; // Set the text to the food name
            foodList.appendChild(listItem); // Append the list item to the unordered list
            foodIndex++; // Increment the index to add the next food item
        } else {
            alert("All food items have been added!");
        }
    }

    // Function to remove the last food item
    function removeFoodItem() {
        const lastItem = foodList.lastElementChild; // Get the last item in the list
        if (lastItem) {
            foodList.removeChild(lastItem); // Remove the last item
            foodIndex--; // Decrease the food index to reflect the removed item
        } else {
            alert("No items to remove!");
        }
    }

    // Add event listener for "Click to add" button
    btn.addEventListener('click', handleClick);

    // Add event listener for "Click to remove" button
    rmv.addEventListener('click', removeFoodItem);
});
