const display = document.getElementById('display');  
const buttons = document.querySelectorAll('#buttons button');  
const darkModeToggle = document.getElementById('darkModeToggle');
const clearButton = document.getElementById('clearButton');
const equalsButton = document.getElementById('equalsButton');

// Calculator buttons only
buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        const value = btn.textContent;  

        if (value === 'C') {
            display.value = "";  
        } else if (value === '=') {
            try {
                display.value = Function('return ' + display.value)();
            } catch (e) {
                display.value = 'Error'; 
            }
        } else if (value === '+/-') {
            display.value = parseFloat(display.value) * -1;
        } else {
            display.value += value;  
        }
    });
});

// Toggle button for dark mode
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('bg-gray-900');
    document.body.classList.toggle('text-white');
    
    // Toggle  mode styles for the display
    display.classList.toggle('bg-gray-800');
    display.classList.toggle('text-white');
    display.classList.toggle('border-gray-600');
    
    // Toggle button styles
    buttons.forEach(btn => {
        btn.classList.toggle('bg-gray-700');
        btn.classList.toggle('hover:bg-gray-600');
        btn.classList.toggle('text-white');
    });

    // Change styles for specific buttons
    clearButton.classList.toggle('bg-red-600'); // Dark mode color for C button
    clearButton.classList.toggle('hover:bg-red-800'); // Dark mode hover color for C button
    equalsButton.classList.toggle('bg-green-600'); // Dark mode color for = button
    equalsButton.classList.toggle('hover:bg-green-900'); // Dark mode hover color for = button
});

