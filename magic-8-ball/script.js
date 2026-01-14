const magicBall = document.getElementById('magicBall');
const answerText = document.getElementById('answerText');
const shakeButton = document.getElementById('shakeButton');
const questionInput = document.getElementById('questionInput');
const message = document.getElementById('message');

// Magic 8 Ball answers
const answers = {
    positive: [
        'Ano',
        'Absolutně',
        'Určitě',
        'Jistě',
        'Je to jisté',
        'Všechny znaky ukazují na ano',
        'Velmi pravděpodobné',
        'Vyhlídky jsou dobré',
        'Vypadá to dobře!',
        'Můžeš na to spolehnout'
    ],
    negative: [
        'Ne',
        'Vůbec ne',
        'Nepravděpodobné',
        'Nespoléhej na to',
        'Velmi pochybné',
        'Moje zdroje říkají ne',
        'Vyhlídky nejsou dobré',
        'Šance jsou malé',
        'Nepravděpodobné',
        'Nesázej na to'
    ],
    neutral: [
        'Možná',
        'Zeptej se znovu později',
        'Nyní nelze předpovědět',
        'Soustřeď se a zeptej se znovu',
        'Odpověď je nejasná, zkus to znovu',
        'Nejasné',
        'Znamení jsou smíšená',
        'Nerozhodnuto',
        'Je příliš brzy to říct',
        'Vrať se později'
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
        message.innerHTML = '<p style="color: #ff6b6b;">Nejdříve polož otázku!</p>';
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
        
        // Adjust font size based on text length
        adjustFontSize(answer);
        
        magicBall.classList.remove('shaking');
        
        // Show message
        displayMessage(answer, category);
        
        // Re-enable button
        shakeButton.disabled = false;
    }, 1200);
}

function adjustFontSize(text) {
    const length = text.length;
    let fontSize;
    
    if (length <= 10) {
        fontSize = '0.85rem';  // Short text - larger
    } else if (length <= 15) {
        fontSize = '0.75rem';  // Medium text
    } else if (length <= 20) {
        fontSize = '0.65rem';  // Longer text
    } else {
        fontSize = '0.55rem';  // Very long text - smallest
    }
    
    answerText.style.fontSize = fontSize;
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
        text = `${emoji} ${answer}! Vesmír říká ano! ${emoji}`;
    } else if (category === 'negative') {
        emoji = '🌑';
        text = `${emoji} ${answer}... Příště více štěstí! ${emoji}`;
    } else {
        emoji = '🔮';
        text = `${emoji} ${answer}... Budoucnost je nejistá... ${emoji}`;
    }
    
    // Color the message to match the category
    message.className = 'message answer-shown ' + category;
    message.innerHTML = `<p>${text}</p>`;
}
