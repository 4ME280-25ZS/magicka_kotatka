const flower = document.getElementById('flower');
const message = document.getElementById('message');
const resetButton = document.getElementById('resetButton');

let petalsRemaining = 0;
let currentPhrase = true; // true = "loves me", false = "loves me not"

function createFlower() {
    // Clear existing petals only
    flower.innerHTML = '';
    
    // Random number of petals (8-16 for variety)
    const petalCount = Math.floor(Math.random() * 9) + 8;
    petalsRemaining = petalCount;
    currentPhrase = true;
    
    // Create petals
    const angleStep = 360 / petalCount;
    
    for (let i = 0; i < petalCount; i++) {
        const petal = document.createElement('div');
        petal.className = 'petal';
        
        const angle = angleStep * i;
        const radius = 100;
        
        // Calculate position
        const x = Math.cos((angle - 90) * Math.PI / 180) * radius;
        const y = Math.sin((angle - 90) * Math.PI / 180) * radius;
        
        petal.style.left = `calc(50% + ${x}px)`;
        petal.style.top = `calc(50% + ${y}px)`;
        petal.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
        petal.style.setProperty('--rotation', `${angle}deg`);
        
        petal.addEventListener('click', () => pluckPetal(petal));
        
        flower.appendChild(petal);
    }
    
    // Reset message
    message.className = 'message';
    message.innerHTML = '<p>Click on the petals to find out!</p>';
}

function pluckPetal(petal) {
    if (petal.classList.contains('plucked')) return;
    
    // Mark petal as plucked
    petal.classList.add('plucked');
    petal.style.pointerEvents = 'none';
    
    // Update message with current phrase
    const text = currentPhrase ? '💖 They love me!' : '💔 They love me not...';
    message.innerHTML = `<p>${text}</p>`;
    
    // Add animation class
    message.className = 'message';
    setTimeout(() => {
        message.classList.add(currentPhrase ? 'loves-me' : 'loves-me-not');
    }, 10);
    
    petalsRemaining--;
    
    // Check if this was the last petal
    if (petalsRemaining === 0) {
        setTimeout(() => {
            // The result is the OPPOSITE of currentPhrase because we already toggled it
            const lovesYou = !currentPhrase;
            
            let finalMessage;
            if (lovesYou) {
                const loveMessages = [
                    '💝 They love you! 💝',
                    '❤️ Love is in the air! ❤️',
                    '💕 True love wins! 💕',
                    '💖 Your heart was right! 💖'
                ];
                finalMessage = loveMessages[Math.floor(Math.random() * loveMessages.length)];
                message.className = 'message final-loves';
            } else {
                const notLoveMessages = [
                    '💙 Maybe next time... 💙',
                    '🌙 The stars say not yet... 🌙',
                    '🍀 Try another flower! 🍀',
                    '💫 Don\'t give up hope! 💫'
                ];
                finalMessage = notLoveMessages[Math.floor(Math.random() * notLoveMessages.length)];
                message.className = 'message final-loves-not';
            }
            
            message.innerHTML = `<p style="font-size: 2rem;">${finalMessage}</p>`;
        }, 600);
    }
    
    // Toggle phrase for next petal
    currentPhrase = !currentPhrase;
}

// Event listeners
resetButton.addEventListener('click', createFlower);

// Create initial flower
createFlower();
