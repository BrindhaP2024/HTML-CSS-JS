const dragElement = document.getElementById('dragElement');
const dropZone = document.getElementById('dropZone');

dragElement.addEventListener('dragstart', (event) => {
  console.log('Drag started');

});
// dropZone.addEventListener('dragover',(event) =>{
//     event.preventDefault();
//     console.log("dragoverdropzone");
    
// });
dropZone.addEventListener('dragover', (event) => {
  event.preventDefault(); 
  console.log('Dragging over drop zone');
});

dropZone.addEventListener('dragenter', () => {
  console.log('Dragged element entered drop zone');
});

dropZone.addEventListener('dragleave', () => {
  console.log('Dragged element left drop zone');
});

dropZone.addEventListener('drop', (event) => {
  event.preventDefault(); 
  console.log('Element dropped');

  const data = event.dataTransfer.getData('text/plain');
  alert(`Dropped: ${data}`);
});

dragElement.addEventListener('dragend', () => {
  console.log('Drag ended');
});
