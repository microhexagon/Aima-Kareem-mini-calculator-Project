// const display = document.getElementById('display');  
// const buttons = document.querySelectorAll('button');  
// const darkModeToggle = document.getElementById('darkModeToggle');
// const calculator = document.getElementById('calculator');

// buttons.forEach(btn => {
//     btn.addEventListener('click', () => {
//         const value = btn.textContent;  

//         if (value === 'C') {
//             display.value = "";  
//         } else if (value === '=') {
//             try {
//                 display.value = Function('return ' + display.value)();
//             } catch (e) {
//                 display.value = 'Error'; 
//             }
//         } else if (value === '+/-') {
//             display.value = parseFloat(display.value) * -1;
//         } else {
//             display.value += value;  
//         }
//     });
// });

// const display = document.getElementById('display');  
// const buttons = document.querySelectorAll('button');  
// const darkModeToggle = document.getElementById('darkModeToggle');
// const calculator = document.getElementById('calculator');

// // Event listener for calculator buttons
// buttons.forEach(btn => {
//     btn.addEventListener('click', () => {
//         const value = btn.textContent;  

//         if (value === 'C') {
//             display.value = "";  
//         } else if (value === '=') {
//             try {
//                 display.value = Function('return ' + display.value)();
//             } catch (e) {
//                 display.value = 'Error'; 
//             }
//         } else if (value === '+/-') {
//             display.value = parseFloat(display.value) * -1;
//         } else {
//             display.value += value;  
//         }
//     });
// });

// // Event listener for dark mode toggle
// darkModeToggle.addEventListener('click', () => {
//     const calculator = document.getElementById('calculator');
//     calculator.classList.toggle('bg-gray-800');
//     calculator.classList.toggle('text-white');
//     calculator.classList.toggle('border-gray-600');
//     calculator.classList.toggle('bg-white');
//     calculator.classList.toggle('text-black');

//     // Just toggle number buttons for example
//     buttons.forEach(btn => {
//         if (btn.classList.contains('bg-gray-600')) {
//             btn.classList.toggle('bg-gray-600');
//             btn.classList.toggle('bg-gray-700');
//             btn.classList.toggle('hover:bg-gray-800');
//             btn.classList.toggle('hover:bg-gray-900');
//         }
//     });
// });

const display = document.getElementById('display');  
const buttons = document.querySelectorAll('#buttons button');  // ⬅️ only calculator buttons
const darkModeToggle = document.getElementById('darkModeToggle');
const calculator = document.querySelector('.calculator'); // make sure to add class if needed

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

// Toggle button (excluded from calculator logic)
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('bg-gray-900');
    document.body.classList.toggle('text-white');
});
