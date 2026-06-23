const quizData = [
{
    question: "Which is a common sign of a phishing email?",
    options: [
        "Professional email",
        "Urgent request for information",
        "Normal company newsletter",
        "Known sender"
    ],
    answer: 1
},
{
    question: "What should you do before clicking a link?",
    options: [
        "Click immediately",
        "Forward to friends",
        "Hover and verify URL",
        "Ignore website address"
    ],
    answer: 2
},
{
    question: "What information should never be shared through email?",
    options: [
        "City",
        "OTP",
        "First Name",
        "Country"
    ],
    answer: 1
},
{
    question: "What is Smishing?",
    options: [
        "Phone repair",
        "SMS phishing",
        "Email filtering",
        "Encryption"
    ],
    answer: 1
},
{
    question: "Why do attackers create urgency?",
    options: [
        "To save time",
        "To prevent careful thinking",
        "To help users",
        "To improve security"
    ],
    answer: 1
},
{
    question: "Which website looks suspicious?",
    options: [
        "https://amazon.com",
        "https://www.microsoft.com",
        "https://amaz0n-security.com",
        "https://google.com"
    ],
    answer: 2
},
{
    question: "What is Spear Phishing?",
    options: [
        "Random phishing",
        "Targeted phishing attack",
        "SMS scam",
        "Phone hacking"
    ],
    answer: 1
},
{
    question: "What should you check in an email?",
    options: [
        "Sender address",
        "Font style",
        "Wallpaper",
        "Color theme"
    ],
    answer: 0
},
{
    question: "What is Vishing?",
    options: [
        "Video editing",
        "Voice call phishing",
        "Virus scanning",
        "VPN attack"
    ],
    answer: 1
},
{
    question: "What is the safest action when receiving a suspicious message?",
    options: [
        "Reply immediately",
        "Click all links",
        "Verify through official source",
        "Share with friends"
    ],
    answer: 2
}
];

let currentQuestion = 0;
let score = 0;
let answered = false;

const question = document.getElementById("question");
const buttons = document.querySelectorAll(".answer-btn");
const result = document.getElementById("result");
const nextBtn = document.getElementById("nextBtn");

function loadQuestion() {

    answered = false;

    let q = quizData[currentQuestion];

    question.innerText = q.question;

    buttons.forEach((btn, index) => {

        btn.innerText = q.options[index];

        btn.disabled = false;

        btn.classList.remove(
            "btn-success",
            "btn-danger"
        );

        btn.classList.add("btn-outline-info");
    });

    result.innerText = "";
}

buttons.forEach((btn, index) => {

    btn.addEventListener("click", () => {

        if (answered) return;

        answered = true;

        buttons.forEach(button => {
            button.disabled = true;
        });

        if (index === quizData[currentQuestion].answer) {

            btn.classList.remove("btn-outline-info");
            btn.classList.add("btn-success");

            result.innerText = "✅ Correct!";
            score++;

        } else {

            btn.classList.remove("btn-outline-info");
            btn.classList.add("btn-danger");

            buttons[
                quizData[currentQuestion].answer
            ].classList.remove("btn-outline-info");

            buttons[
                quizData[currentQuestion].answer
            ].classList.add("btn-success");

            result.innerText = "❌ Wrong Answer";
        }

    });

});

nextBtn.addEventListener("click", () => {

    if (!answered) {
        alert("Please answer the question first.");
        return;
    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {

        loadQuestion();

    } 

    if(currentQuestion >= quizData.length){

    document.querySelector("#quiz .glass-card").innerHTML = `
        <h2>🎉 Quiz Completed!</h2>
        <h3 class="mt-4">🏆 Your Score: ${score}/${quizData.length}</h3>

        <p class="mt-3">
            Thank you for completing the Phishing Awareness Training Quiz.
        </p>
    `;

    return;
}

});

loadQuestion();