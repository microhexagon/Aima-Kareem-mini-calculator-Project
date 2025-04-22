
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





