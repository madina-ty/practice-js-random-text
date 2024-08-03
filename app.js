const reason = document.getElementById('reason');

const reasons = [
    'You have cute curly hair',
    'You love cats as much as I do',
    'You are reason for my smile in the mornings',
    'You are very caring',
    'You brighten my day',
    'Talking to you is easy and fun. It is so natural to talk to you',
    'I feel like I can be myself around you',
]

function getRandomReason() {
    const randomIndex = Math.floor(Math.random() * reasons.length);
    return reasons[randomIndex];
}

function displayReason() {
    reason.textContent = getRandomReason();
}

window.onload = displayReason;