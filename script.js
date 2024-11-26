const questions = [
    {
        question: "What’s your favorite way to spend the holidays?",
        options: ["Giving gifts and spreading cheer", "Volunteering and helping others", "Celebrating with traditional food and music", "Spending time with family and friends"],
    },
    {
        question: "What do you enjoy most about community events?",
        options: ["Organizing and planning the activities", "Participating in the games and performances", "Preparing food and sharing meals", "Connecting with new people and making memories"],
    },
    {
        question: "If you could donate something for Paskuhan sa Tribu, what would it be?",
        options: ["Toys or school supplies for children", "Cooking supplies or ingredients for meals", "Gifts like clothing or hygiene kits", "Time to help set up or clean up the event"],
    },
    {
        question: "How would you like to contribute your talents during Paskuhan?",
        options: ["Performing songs or dances", "Designing decorations or creating crafts", "Cooking or organizing the feast", "Sharing stories or teaching something new"],
    },
    {
        question: "What type of holiday activity excites you the most?",
        options: ["Exchanging gifts and surprises", "Organizing fun games or activities for everyone", "Sharing cultural experiences like songs or dances", "Enjoying a warm meal together"],
    },
    {
        question: "What does 'Paskuhan' mean to you?",
        options: ["A time to give back and show kindness", "A time to be with the community and create memories", "A celebration of food, culture, and traditions", "A moment to reflect and connect with loved ones"],
    },
    {
        question: "What’s your preferred holiday tradition?",
        options: ["Gift-giving", "Volunteering for a cause", "Cooking and sharing meals", "Spending time with those closest to me"],
    },
    {
        question: "If you could choose a role at Paskuhan sa Tribu, what would it be?",
        options: ["Santa – handing out gifts and spreading joy", "Coordinator – organizing and making everything happen", "Chef – preparing delicious dishes for the community", "Storyteller – sharing stories and keeping the spirits high"],
    }
];

const results = {
    A: {
        text: "🎁 You’re the 'Gift-Giver'! You bring joy to everyone with your generosity.",
        image: "images/gift-giving.png"
    },
    B: {
        text: "📅 You’re the 'Event Coordinator'! You thrive in organizing and planning events.",
        image: "images/event-coordinator.png"
    },
    C: {
        text: "🍴 You’re the 'Chef of the Celebration'! You bring people together with your delicious food.",
        image: "images/chef.png"
    },
    D: {
        text: "🌟 You’re the 'Community Connector'! You value relationships and bring everyone closer.",
        image: "images/community-connector.png"
    }
};

let answers = { A: 0, B: 0, C: 0, D: 0 };

// Panel control functions
function showPanel(panelId) {
    document.getElementById("start-panel").style.display = "none";
    document.getElementById("quiz-panel").style.display = "none";
    document.getElementById("result-panel").style.display = "none";
    document.getElementById(panelId).style.display = "block";
}

function loadQuiz() {
    const quiz = document.getElementById("quiz");
    questions.forEach((q, index) => {
        const questionDiv = document.createElement("div");
        questionDiv.classList.add("question");
        questionDiv.innerHTML = `
            <h3>${q.question}</h3>
            ${q.options.map((option, i) => `
                <label>
                    <input type="radio" name="question${index}" value="${String.fromCharCode(65 + i)}">
                    ${option}
                </label>
                <br>
            `).join("")}
        `;
        quiz.appendChild(questionDiv);
    });
}

function calculateResult() {
    const inputs = document.querySelectorAll("input[type=radio]:checked");
    if (inputs.length < questions.length) {
        alert("Please answer all the questions before submitting!");
        return;
    }

    inputs.forEach(input => {
        answers[input.value]++;
    });

    const highest = Object.keys(answers).reduce((a, b) => (answers[a] > answers[b] ? a : b));
    const result = results[highest];
    document.getElementById("result").innerHTML = `
        <p>${result.text}</p>
        <img src="${result.image}" alt="${result.text}">
    `;
    showPanel("result-panel");
}

function resetQuiz() {
    // Reset answers and radio buttons
    answers = { A: 0, B: 0, C: 0, D: 0 };
    document.getElementById("quiz").innerHTML = "";
    loadQuiz();
    showPanel("start-panel");
}

// Event Listeners
document.getElementById("start-quiz").addEventListener("click", () => showPanel("quiz-panel"));
document.getElementById("submit").addEventListener("click", calculateResult);
document.getElementById("restart-quiz").addEventListener("click", resetQuiz);

// Initialize the quiz
loadQuiz();
