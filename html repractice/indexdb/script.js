let db;
const request = indexedDB.open("MySimpleDatabase", 1);

request.onerror = (event) => {
  console.error("Database error: ", event.target.error);
};

request.onsuccess = (event) => {
  db = event.target.result;
  console.log("Database opened successfully");
};

request.onupgradeneeded = (event) => {
  db = event.target.result;
  db.createObjectStore("MyObjectStore", { keyPath: "id" });
  console.log("Object store created");
};

const addData = () => {
  const id = parseInt(document.getElementById("id").value);
  const name = document.getElementById("name").value;
  const data = { id, name };

  const transaction = db.transaction(["MyObjectStore"], "readwrite");
  const objectStore = transaction.objectStore("MyObjectStore");

  const request = objectStore.add(data);

  request.onsuccess = () => {
    console.log("Data added to the database");
  };

  request.onerror = (event) => {
    console.error("Error adding data: ", event.target.error);
  };
};
