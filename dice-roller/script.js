const dice = document.getElementById('dice');
const diceNumber = document.getElementById('diceNumber');
const result = document.getElementById('result');
const sidesInput = document.getElementById('sidesInput');

let isRolling = false;

dice.addEventListener('click', rollDice);
dice.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        rollDice();
    }
});

function rollDice() {
    if (isRolling) return;

    const sides = parseInt(sidesInput.value);
    
    // Validate input
    if (isNaN(sides) || sides < 2 || sides > 100) {
        result.innerHTML = '<p style="color: #ff6b6b;">Prosím zadej číslo mezi 2 a 100!</p>';
        return;
    }
    
    // Disable controls during roll
    isRolling = true;
    sidesInput.disabled = true;
    dice.classList.add('disabled');
    
    // Add rolling animation
    dice.classList.add('rolling');
    
    // Simulate rolling by changing numbers quickly with increasing intervals
    let counter = 0;
    const maxIterations = 20;
    const baseInterval = 50;
    
    function animateRoll() {
        if (counter < maxIterations) {
            diceNumber.textContent = Math.floor(Math.random() * sides) + 1;
            counter++;
            
            // Gradually slow down the animation
            const delay = baseInterval + (counter * 15);
            setTimeout(animateRoll, delay);
        } else {
            // Final result
            const finalNumber = Math.floor(Math.random() * sides) + 1;
            diceNumber.textContent = finalNumber;
            
            // Remove animation and show result
            setTimeout(() => {
                dice.classList.remove('rolling');
                displayResult(finalNumber, sides);
                
                // Re-enable controls
                sidesInput.disabled = false;
                dice.classList.remove('disabled');
                isRolling = false;
            }, 300);
        }
    }
    
    animateRoll();
}

function displayResult(number, sides) {
    let message = `Padlo číslo ${number}`;
    
    if (number === sides) {
        message += ` - Maximum! 🎉`;
    } else if (number === 1) {
        message += ` - Minimum! 😅`;
    } else if (number > sides * 0.75) {
        message += ` - Skvělý hod! 🎲`;
    } else {
        message += ` 🎲`;
    }
    
    result.innerHTML = `<p>${message}</p>`;
}
