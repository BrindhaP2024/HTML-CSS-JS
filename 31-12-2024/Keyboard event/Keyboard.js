document.addEventListener('DOMContentLoaded', () => {
    // keydown event
    const keydownInput = document.getElementById('keydownInput');
    const keydownLog = document.getElementById('keydownLog');
    keydownInput.addEventListener('keydown', (event) => {
        keydownLog.textContent = `Key down: ${event.key}`;
    });

    // keyup event
    const keyupInput = document.getElementById('keyupInput');
    const keyupLog = document.getElementById('keyupLog');
    keyupInput.addEventListener('keyup', (event) => {
        keyupLog.textContent = `Key up: ${event.key}`;
    });

    // keypress event
    const keypressInput = document.getElementById('keypressInput');
    const keypressLog = document.getElementById('keypressLog');
    keypressInput.addEventListener('keypress', (event) => {
        keypressLog.textContent = `Key press: ${event.key}`;
    });

    // input event
    const inputEvent = document.getElementById('inputEvent');
    const inputLog = document.getElementById('inputLog');
    inputEvent.addEventListener('input', (event) => {
        inputLog.textContent = `Input: ${event.target.value}`;
    });
});
