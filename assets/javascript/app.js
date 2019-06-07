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
var wrongArr = ["https://media1.giphy.com/media/Kb6kc5mReZ7iM/giphy.gif",
"https://thumbs.gfycat.com/EmbellishedVigorousHumpbackwhale-size_restricted.gif",
"https://media1.tenor.com/images/adc8b2d39eaba68f538815e51afd5e81/tenor.gif?itemid=7928528",
"https://media1.tenor.com/images/3e061c6f76299c674741607827a3874f/tenor.gif?itemid=11650243",
"https://media.giphy.com/media/goQ4bc8X0Lh6w/giphy.gif",
"https://media2.giphy.com/media/ORgroFzBJxdGU/giphy.gif",
"https://assets.rebelmouse.io/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vbWVkaWEucmJsLm1zL2ltYWdlP3U9JTJGZmlsZXMlMkYyMDE3JTJGMDMlMkYwNyUyRjYzNjI0NTA3MzU5OTAwMzY5Ni04MTk0MDM3MzBfc291cmNlLmdpZiZhbXA7aG89aHR0cHMlM0ElMkYlMkZhejYxNjU3OC52by5tc2VjbmQubmV0JmFtcDtzPTE3NCZhbXA7aD04YjExNzE0ZmJjYzU2ODcxZjI2NmU3YzI5MWE4Njk3ZjNkYTM5YjQ4NGQ3NGNhNmJkNGVjOWFkNDY3NWNkNzllJmFtcDtzaXplPTk4MHgmYW1wO2M9NTIwNjExODY1IiwiZXhwaXJlc19hdCI6MTU2MDAwNTcxN30.mcZj8zbHAS1k7Q2Zo3LTIdjK71DyHeOJT-eSymeKZrQ/img.jpg",
"https://assets.rebelmouse.io/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vbWVkaWEucmJsLm1zL2ltYWdlP3U9JTJGZmlsZXMlMkYyMDE2JTJGMTIlMkYyNiUyRjYzNjE4MzkxMzg0MDUwMTU1MS0xNzE3NTk2NDQ2X2dpcGh5LmdpZiZhbXA7aG89aHR0cHMlM0ElMkYlMkZhejYxNjU3OC52by5tc2VjbmQubmV0JmFtcDtzPTY5OSZhbXA7aD1kZjU3N2I3ODMyOTc1ODFkZTc1YjY5NGIzNWZiZTE5ZGM1YTIyMjFhNWFmMjY4YmVmNmRlY2QwMTg5OTU5ZDdiJmFtcDtzaXplPTk4MHgmYW1wO2M9NjczOTg5MjQ0IiwiZXhwaXJlc19hdCI6MTU2MDE4MDQ2MX0.6KYwJSd8URIRWX6ER0D-PtCVBC3CJDUL5BryT_FzSPk/img.jpg",
"https://media.giphy.com/media/YLgIOmtIMUACY/giphy.gif",
"https://media1.popsugar-assets.com/files/thumbor/Dk--qOx0X8KWPkPtjpVQkyjokZc/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2019/04/26/838/n/1922283/111c78eb5cc356f120aa86.53314076_angela/i/Saddest-Moment-Show-History.gif"
]
var rightArr = ["https://thumbs.gfycat.com/WellinformedCostlyDassie-size_restricted.gif",
"https://media.giphy.com/media/tlGD7PDy1w8fK/giphy.gif",
"https://media.tenor.com/images/e602ebebfb77085ab2a947848d7c872d/tenor.gif",
"https://i.imgur.com/5rZO8sd.gif?noredirect",
"https://media.giphy.com/media/eGwW26RL3PknC/giphy.gif",
"http://25.media.tumblr.com/ce8e6ed66c75f26a7682f2fc6504455f/tumblr_n1pp02VelT1sgwn46o1_400.gif",
"https://media.giphy.com/media/nGzeO4uSxRUcg/giphy.gif",
"https://media.giphy.com/media/FqHvakENy6Oe4/giphy.gif",
"https://media.giphy.com/media/SMKhJW9JvhY08/giphy.gif",
"https://thumbs.gfycat.com/GlossyHauntingDoe-small.gif"
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
    if (triviaCounter === questions.length) {
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
    // $(".click").html("<h4>" + questions[triviaCounter].Question + "</h4>");
    if(triviaCounter === questions.length ) {
        finalScreen();
    } else {
        $(".click").html("<h4>" + questions[triviaCounter].Question + "</h4>");
        $("#answer1").text(questions[triviaCounter].Answers[0]);
        $("#answer2").text(questions[triviaCounter].Answers[1]);
        $("#answer3").text(questions[triviaCounter].Answers[2]);
    }
}

function finalScreen() {
    $(".timer").hide();
    $(".result").show();
    $(".gif").show();
    $(".button-container").hide();
    $(".click").show();
    $(".click").html("<button class='resetBtn'>Click here to play again!</button>");
    $(".resetBtn").on("click", restart);
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
        var imgTag = $("<img>");
        imgTag.attr("src", wrongArr[answersWrong - 1]);
        // $(".gif").html('<img src=' + wrongArr[answersWrong - 1] + 'alt="Incorrect">');
        $(".gif").html(imgTag);
        
    }
    else if (x === "correct") {
        $(".result").html("<h4>Correct</h4>");
        var imgTag = $("<img>");
        imgTag.attr("src", rightArr[answersRight - 1]);
        // $(".gif").html('<img src=' + rightArr[answersWrong - 1] + 'alt="Correct">');
        $(".gif").html(imgTag);
    }
    else if (x === "not") {
        $(".result").html("<h4>You didn't answer!</h4>");
        $(".gif").html('<img src="https://media2.giphy.com/media/k7LLy1bE7aIgg/giphy.gif" alt="Happy Michael">');
    }
    runMiddle();
}

function restart() {
    console.log("restarted")
    $(".button-container").show();
    $(".timer").show();
    $("#start").hide();
    $(".gif").hide();
    $(".result").hide();
    triviaCounter = 0;
    answersRight = 0;
    answersWrong = 0;
    answersNotAnswered = 0;
    timerCounter = 30;
    timerCounterMP = 5;
    running = false;
    selections = [];
    nextQuestion();
    run();
    clearInterval(intervalId);
}