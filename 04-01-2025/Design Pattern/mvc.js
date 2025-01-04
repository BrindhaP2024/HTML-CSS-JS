// Model: Represents data and logic
const Model = (function () {
    let counter = 0;
    return {
        increment: function () {
            counter++;
        },
        getCount: function () {
            return counter;
        }
    };
})();

// View: Represents the UI
const View = (function () {
    return {
        render: function (counterValue) {
            document.getElementById("counterDisplay").textContent = counterValue;
        }
    };
})();

// Controller: Manages the interaction between Model and View
const Controller = (function (model, view) {
    document.getElementById("incrementBtn").addEventListener("click", function () {
        model.increment();
        view.render(model.getCount());
    });
})(Model, View);

// HTML Example
// <button id="incrementBtn">Increment</button>
// <div id="counterDisplay">0</div>
