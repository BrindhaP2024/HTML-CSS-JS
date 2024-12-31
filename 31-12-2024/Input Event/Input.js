document.addEventListener('DOMContentLoaded', () => {
    const fileInput = document.getElementById('file');
    const fileResult = document.getElementById('fileResult');
    
    // cancel event
    fileInput.addEventListener('cancel', () => {
        fileResult.textContent = 'File selection was canceled.';
    });

    fileInput.addEventListener('change', () => {
        if (fileInput.files.length === 1) {
            fileResult.textContent = 'File selected.';
        }
    });

    // invalid event
    const numberInput = document.querySelector('input[type="number"]');
    const invalidLog = document.getElementById('invalidLog');

    numberInput.addEventListener('invalid', (event) => {
        invalidLog.textContent = `Invalid value: ${event.target.value}`;
    });

    // search event
    const searchInput = document.getElementById('search');
    const searchResult = document.getElementById('searchResult');

    searchInput.addEventListener('search', () => {
        searchResult.textContent = `Search term: ${searchInput.value}`;
    });

    // select event
    const selectInput = document.getElementById('selectInput');
    const selectLog = document.getElementById('selectLog');

    selectInput.addEventListener('select', (event) => {
        const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
        selectLog.textContent = `You selected: ${selection}`;
    });

    // selectionchange event
    const selectionInput = document.getElementById('selectionInput');

    selectionInput.addEventListener('selectionchange', () => {
        document.getElementById('start').textContent = selectionInput.selectionStart;
        document.getElementById('end').textContent = selectionInput.selectionEnd;
        document.getElementById('direction').textContent = selectionInput.selectionDirection;
    });
});
