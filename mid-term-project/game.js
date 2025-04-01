document.addEventListener("DOMContentLoaded", startGame);

const gameStages = {
    start: {
        text: "Welcome, mastermind. You are planning a high-stakes bank heist. What is your first move?",
        choices: ["Scout the bank", "Recruit a crew"],
        consequence: ["scout-bank", "recruit-crew"],
        image: "images/Planning.jpg"
    },
    "scout-bank": {
        text: "You survey the bank's security measures and identify weak points. You take notes on the guards' shifts and camera placements.",
        choices: ["Hack the security system", "Bribe a guard"],
        consequence: ["hack-security", "bribe-guard"],
        image: "images/hack-security.jpg"
    },
    "recruit-crew": {
        text: "You assemble a team of skilled criminals: a hacker, a getaway driver, and a safe-cracker.",
        choices: ["Plan the escape route", "Gather equipment"],
        consequence: ["escape-route", "gather-equipment"],
        image: "images/gather-equipment.jpg"
    },
    "escape-route": {
        text: "You plan multiple escape routes, ensuring a quick getaway.",
        choices: ["Proceed with the heist"],
        consequence: ["proceed-heist"],
        image: "images/proceed-heist.jpg"
    },
    "gather-equipment": {
        text: "You gather all the necessary tools, including explosives and lockpicks.",
        choices: ["Proceed with the heist"],
        consequence: ["proceed-heist"],
        image: "images/explosives.jpg"
    },
    "hack-security": {
        text: "You successfully disable the bank's alarms. The heist is now much easier.",
        choices: ["Proceed with the heist", "Create a backup plan"],
        consequence: ["proceed-heist", "backup-plan"],
        image: "images/alarm.jpg"
    },
    "bribe-guard": {
        text: "A security guard agrees to help you for a hefty sum. You now have inside information.",
        choices: ["Proceed with the heist", "Gather more intel"],
        consequence: ["proceed-heist", "gather-intel"],
        image: "images/security_guard.jpg"
    },
    "proceed-heist": {
        text: "The heist begins. You and your crew enter the bank. Do you go in guns blazing or stealthily?",
        choices: ["Stealth mode", "Guns blazing"],
        consequence: ["stealth-mode", "guns-blazing"],
        image: "images/guns-blazing.jpg"
    },
    "stealth-mode": {
        text: "You sneak past security, disable cameras, and crack the vault silently. The heist is a success!",
        choices: ["Escape through sewers", "Blend in with the crowd"],
        consequence: ["sewer-escape", "blend-crowd"],
        image: "images/blend-crowd.jpg"
    },
    "guns-blazing": {
        text: "The bank alarm goes off! Cops arrive, and a shootout ensues. You barely make it to the getaway car.",
        choices: ["Speed away", "Take hostages"],
        consequence: ["speed-away", "take-hostages"],
        image: "images/take-hostages.jpg"
    },
    "sewer-escape": {
        text: "You escape through the sewers, completely undetected. You win!",
        choices: [],
        consequence: [],
        image: "images/sewer-escape-image.jpg"
    },
    "blend-crowd": {
        text: "You blend in with the crowd, walking away unnoticed. You win!",
        choices: [],
        consequence: [],
        image: "images/blend-crowd-image.jpg"
    },
    "speed-away": {
        text: "Your getaway driver speeds through traffic, evading police. You make a clean escape.",
        choices: ["Hide in a safe house", "Flee the country"],
        consequence: ["safe-house", "flee-country"],
        image: "images/speed-away-image.jpg"
    },
    "take-hostages": {
        text: "You hold hostages, demanding a helicopter for escape. The cops negotiate with you.",
        choices: ["Release hostages", "Stand your ground"],
        consequence: ["release-hostages", "stand-ground"],
        image: "images/take-hostages-image.jpg"
    },
    "safe-house": {
        text: "You successfully hide in a safe house. The police never find you. You win!",
        choices: [],
        consequence: [],
        image: "images/safe-house-image.jpg"
    },
    "flee-country": {
        text: "You try to flee the country but get caught at the airport. You're arrested.",
        choices: [],
        consequence: [],
        image: "images/flee-country-image.jpg"
    },
    "release-hostages": {
        text: "You release the hostages and negotiate a deal. You escape with only part of the money. You win!",
        choices: [],
        consequence: [],
        image: "images/release-hostages-image.jpg"
    },
    "stand-ground": {
        text: "The cops storm the bank. You are arrested and sentenced to life in prison.",
        choices: [],
        consequence: [],
        image: "images/stand-ground-image.jpg"
    },
};

let currentStage = "start";

function startGame() {
    document.getElementById("game-container").style.display = "block";
    updatePage();
}

function updatePage() {
    const stage = gameStages[currentStage];
    if (!stage) return;

    document.getElementById("story-text").innerHTML = stage.text;
    document.getElementById("story-image").style.backgroundImage = `url('${stage.image}')`;

    const choicesElement = document.getElementById("choices");
    choicesElement.innerHTML = "";

    if (stage.choices.length === 0) {
        addRestartButton(choicesElement);
    } else {
        stage.choices.forEach((choice, index) => {
            const button = document.createElement("button");
            button.textContent = choice;
            button.addEventListener("click", () => {
                currentStage = stage.consequence[index];
                updatePage();
            });
            choicesElement.appendChild(button);
        });
    }
}

function addRestartButton(container) {
    const restartButton = document.createElement("button");
    restartButton.textContent = "Restart";
    restartButton.addEventListener("click", () => {
        currentStage = "start";
        updatePage();
    });
    container.appendChild(restartButton);
}
