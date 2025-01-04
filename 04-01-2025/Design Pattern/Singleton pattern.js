// Singleton Pattern
const Database = (function () {
    let instance;

    function createInstance() {
        const object = new Object("Database Instance");
        return object;
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

// Usage
const db1 = Database.getInstance();
const db2 = Database.getInstance();

console.log(db1 === db2); 
