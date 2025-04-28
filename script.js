<<<<<<< HEAD

const display = document.getElementById('display');  
const buttons = document.querySelectorAll('button');  

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


=======

const display = document.getElementById('display');  
const buttons = document.querySelectorAll('.btn');  
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
        } else {
            display.value += value;  
        }
    });
});





>>>>>>> 5ce3f1b058587dd91d63cb5c27357df184484b8c
