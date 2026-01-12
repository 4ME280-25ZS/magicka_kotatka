const magicBall = document.getElementById('magicBall');
const answerText = document.getElementById('answerText');
const shakeButton = document.getElementById('shakeButton');
const questionInput = document.getElementById('questionInput');
const message = document.getElementById('message');

// Magic 8 Ball answers
const answers = {
    positive: [
        'Yes',
        'Absolutely',
        'Definitely',
        'Certainly',
        'It is certain',
        'Signs point to yes',
        'Most likely',
        'Outlook good',
        'Looks good!',
        'You may rely on it'
    ],
    negative: [
        'No',
        'Nope',
        'Not likely',
        'Don\'t count on it',
        'Very doubtful',
        'My sources say no',
        'Outlook not so good',
        'Chances slim',
        'Unlikely',
        'Don\'t bet on it'
    ],
    neutral: [
        'Maybe',
        'Ask again later',
        'Cannot predict now',
        'Concentrate and ask again',
        'Reply hazy, try again',
        'Unclear',
        'The signs are mixed',
        'Undecided',
        'Too early to tell',
        'Check back later'
    ]
};

shakeButton.addEventListener('click', shakeBall);
questionInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        shakeBall();
    }
});

function shakeBall() {
    const question = questionInput.value.trim();
    
    if (!question) {
        message.innerHTML = '<p style="color: #ff6b6b;">Please ask a question first!</p>';
        return;
    }
    
    // Disable button during shake
    shakeButton.disabled = true;
    // Reset answer style and content
    answerText.className = 'answer-text';
    answerText.textContent = '?';
    
    // Add shake animation
    magicBall.classList.add('shaking');
    
    // Simulate thinking
    setTimeout(() => {
        // Get random answer
        const category = getRandomCategory();
        const answer = getRandomAnswer(category);
        
        // Display answer with category-specific styling
        answerText.className = 'answer-text ' + category;
        answerText.textContent = answer;
        magicBall.classList.remove('shaking');
        
        // Show message
        displayMessage(answer, category);
        
        // Re-enable button
        shakeButton.disabled = false;
    }, 1200);
}

function getRandomCategory() {
    const rand = Math.random();
    if (rand < 0.4) return 'positive';
    if (rand < 0.8) return 'negative';
    return 'neutral';
}

function getRandomAnswer(category) {
    const answerList = answers[category];
    return answerList[Math.floor(Math.random() * answerList.length)];
}

function displayMessage(answer, category) {
    let emoji = '';
    let text = '';
    
    if (category === 'positive') {
        emoji = '✨';
        text = `${emoji} ${answer}! The universe says yes! ${emoji}`;
    } else if (category === 'negative') {
        emoji = '🌑';
        text = `${emoji} ${answer}... Better luck next time! ${emoji}`;
    } else {
        emoji = '🔮';
        text = `${emoji} ${answer}... The future is uncertain... ${emoji}`;
    }
    
    // Color the message to match the category
    message.className = 'message answer-shown ' + category;
    message.innerHTML = `<p>${text}</p>`;
}
