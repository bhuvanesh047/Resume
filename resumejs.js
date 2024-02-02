function startVisualExperience() {
    document.getElementById('visualExperience').style.display = 'block';
}

function startGame() {
    document.getElementById('game').style.display = 'block';
}

function showSkills() {
    document.getElementById('skills').style.display = 'block';
}

function playFunnyGame() {
    let userName = document.getElementById('userName').value;
    let userCity = document.getElementById('userCity').value;

    if (userName && userCity) {
        let slogan = generateFunnySlogan(userName, userCity);
        document.getElementById('funnySlogan').innerText = slogan;
    } else {
        document.getElementById('funnySlogan').innerText = 'Please enter both your name and city.';
    }
}

function generateFunnySlogan(name, city) {
    // Add your logic to generate a funny slogan based on user input
    return `Hello ${name} from ${city}! Thanks for playing! Your life is a canvas; make sure you paint yourself a whole lot of colorful days.`;
}

// The rest of your JavaScript code remains unchanged.
