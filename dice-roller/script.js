const dice = document.getElementById('dice');
const diceNumber = document.getElementById('diceNumber');
const rollButton = document.getElementById('rollButton');
const result = document.getElementById('result');
const sidesInput = document.getElementById('sidesInput');

rollButton.addEventListener('click', rollDice);

function rollDice() {
    const sides = parseInt(sidesInput.value);
    
    // Validate input
    if (isNaN(sides) || sides < 2 || sides > 100) {
        result.innerHTML = '<p style="color: #ff6b6b;">Please enter a number between 2 and 100!</p>';
        return;
    }
    
    // Disable button during roll
    rollButton.disabled = true;
    sidesInput.disabled = true;
    
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
                rollButton.disabled = false;
                sidesInput.disabled = false;
            }, 300);
        }
    }
    
    animateRoll();
}

function displayResult(number, sides) {
    let message = `You rolled a ${number}`;
    
    if (number === sides) {
        message += ` - Maximum! 🎉`;
    } else if (number === 1) {
        message += ` - Minimum! 😅`;
    } else if (number > sides * 0.75) {
        message += ` - Great roll! 🎲`;
    } else {
        message += ` 🎲`;
    }
    
    result.innerHTML = `<p>${message}</p>`;
}
