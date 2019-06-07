var triviaCounter = 0;
var answersRight = 0;
var answersWrong = 0;
var answersNotAnswered = 0;
var timerCounter = 30;
var timerCounterMP = 5;
var running = false;
var selections = [];
var questions = [
    {
        Question: "On the night Pam got really drunk at the Dundies and kissed Jim, what did she win her Dundie for?",
        Answers: ["Longest engagement", "Tidiest desk", "Whitest shoes"],
        Correct: "Whitest shoes"
    },
    {
        Question: "According to 'Prison Mike', what is the worst thing about prison?",
        Answers: ["The orcs", "The dementors", "The banshees"],
        Correct: "The dementors"
    },
    {
        Question: "What is the name of the company Ryan sets up that sends messages to all of your devices at once?",
        Answers: ["Wuphf", "Barrk", "Grrowl"],
        Correct: "Wuphf"
    },
    {
        Question: "What's in the giant pot that Kevin drops all over the office floor?",
        Answers: ["Gravy", "Bolognese", "Chili"],
        Correct: "Chili"
    },
    {
        Question: "What does Michael pick as his username when he signs up for an online dating site?",
        Answers: ["LittleKidLover", "IAmTheBoss", "HappyCuddler"],
        Correct: "LittleKidLover"
    },
    {
        Question: "How long had Jim and Pam been dating when he bought her engagement ring?",
        Answers: ["A day", "A week", "A month"],
        Correct: "A week"
    },
    {
        Question: "What is the name of 'the senator', who Angela marries, but is actually gay and has an affair with Oscar?",
        Answers: ["Robert", "Richard", "Randy"],
        Correct: "Robert"
    },
    {
        Question: "What is Erin's real first name?",
        Answers: ["Angela", "Talulah", "Kelly"],
        Correct: "Kelly"
    },
    {
        Question: "When Jim thinks Michael is eating ice cream for breakfast, what is he actually eating?",
        Answers: ["Sour cream and sprinkles", "Mayonnaise and black olives", "Whipped cream and ketchup"],
        Correct: "Mayonnaise and black olives"
    },
    {
        Question: "What is the name of Angela's cat, which Dwight kills by putting it in the freezer?",
        Answers: ["Bandit", "Sprinkles", "Tinker"],
        Correct: "Sprinkles"
    }
]

$(".button-container").hide();
$(".timer").hide();
$(".timermiddle").hide();


$(".button-container").on("click", ".answer-choice", checker);

$("#start").on("click", function () {
    $(".button-container").show();
    $(".timer").show();
    $("#start").hide();
    showQuestion();
    run();
});

function nextQuestion() {
    $(".timermiddle").hide();
    $(".timer").show();
    $(".result").hide();
    $(".gif").hide();
    $(".button-container").show();
    $(".click").show();
    if (triviaCounter > questions.length) {
        finalScreen();
    }
    else {
        timerCounter = 30;
        triviaCounter++;
        run();
        showQuestion();
    }
}

function questionChecker(x) {
    stop();
    if (x === "incorrect") {
        answersWrong++;
    }
    else if (x === "correct") {
        answersRight++;
    }
    else if (x === "not") {
        answersNotAnswered++;
    }
    middlePage(x);
    // nextQuestion();

}

function run() {
    $(".timer").text("00:" + timerCounter);
    intervalId = setInterval(decrement, 1000);
}

function decrement() {
    timerCounter--;
    if (timerCounter < 10) {
        $(".timer").text("00:0" + timerCounter);
    }
    else if (timerCounter >= 10) {
        $(".timer").text("00:" + timerCounter);
    }
    if (timerCounter === 0) {
        questionChecker("not");
    }
}

function runMiddle() {
    timerCounterMP = 5;
    $(".timermiddle").show();
    $(".timer").hide();
    $(".timermiddle").text("00:0" + timerCounterMP);
    intervalIdMP = setInterval(decrementMP, 1000);
}

function decrementMP() {
    timerCounterMP--;
    if (timerCounterMP == 0) {
        $(".timermiddle").text("00:0" + timerCounterMP);
        nextQuestion();
        stopMP();
    }
    else if (timerCounterMP < 5 && timerCounterMP > 0) {
        $(".timermiddle").text("00:0" + timerCounterMP);
    }
}

function stop() {
    clearInterval(intervalId);
}

function stopMP() {
    clearInterval(intervalIdMP);
}

function checker() {
    var userChoice = $(this).text();
    if (userChoice === questions[triviaCounter].Correct) {
        questionChecker("correct");
    }
    else {
        questionChecker("incorrect");
    }
}

function showQuestion() {
    $(".click").html("<h4>" + questions[triviaCounter].Question + "</h4>");
    $("#answer1").text(questions[triviaCounter].Answers[0]);
    $("#answer2").text(questions[triviaCounter].Answers[1]);
    $("#answer3").text(questions[triviaCounter].Answers[2]);
    console.log("in showQuestion");
}

function finalScreen() {
    if (answersRight === questions.length) {
        $(".result").html("<h4>You're a pro! You got all of the questions correct!!</h4>");
    }
    else {
        $(".result").html("<h4>You got " + answersRight + " questions correct</h4>");
    }
    $(".result").append("<h4>You got " + answersWrong + " questions wrong</h4>");
    $(".result").append("<h4>You didn't answer " + answersNotAnswered + " questions</h4>");
}

function middlePage(x) {
    $(".button-container").hide();
    $(".click").hide();
    $(".gif").show();
    $(".result").show();
    if (x === "incorrect") {
        $(".result").html("<h4>Incorrect</h4>");
        $(".gif").html('<img src="https://thumbs.gfycat.com/EmbellishedVigorousHumpbackwhale-size_restricted.gif" alt="Crying Dwight">');
    }
    else if (x === "correct") {
        $(".result").html("<h4>Correct</h4>");
        $(".gif").html('<img src="https://media.giphy.com/media/tlGD7PDy1w8fK/giphy.gif" alt="Happy Michael">');
    }
    else if (x === "not") {
        $(".result").html("<h4>You didn't answer!</h4>");
        $(".gif").html('<img src="https://media2.giphy.com/media/k7LLy1bE7aIgg/giphy.gif" alt="Happy Michael">');
    }
    runMiddle();
}