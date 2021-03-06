var readLineSync = require('readline-sync')
const chalk = require('chalk');
var count = 0;

var highScores = [{
        name: "Kapil",
        score: "2"
    },
    {
        name: "Manav",
        score: "3"
    },
    {
        name: "Manish",
        score: "3"
    },
    {
        name: "Suraj",
        score: "2"
    }
]

var questions = [{
        question: chalk.green("1. Vinay's Birthday Month? "),
        answer: "december"
    },
    {
        question: chalk.yellowBright("2. Vinay's Favourite Food? "),
        answer: "dabeli"
    },
    {
        question: chalk.cyanBright("3. Vinay's Favourite Sport? "),
        answer: "cricket"
    },
    {
        question: chalk.magentaBright("4. Vinay's Passion? "),
        answer: "photography"
    }
];


function play(question, answer) {
    var userAnswer = readLineSync.question(question);
    if (userAnswer.toLowerCase() == answer) {
        console.log("Amazing, Correct Answer")
        count++;
        console.log(chalk.cyan("Score -->", count))
    } else {
        console.log("Oops, Wrong Answer");
        count--;
        console.log(chalk.cyan(count))
    }
    return (count);
}


function game() {
    var userName = (readLineSync.question("Hello user What's Your Name? "))
    if (userName != '') {
        console.log("--------------------------")
        console.log("Hello " + chalk.green(userName) + ", Welcome to the Vinay's Virtual World.")
        console.log("Let's test your knowledge......")
        console.log("--------------------------")
        for (i = 0; i < questions.length; i++) {
            play(questions[i].question, questions[i].answer);
        }

        highScores.push({
            name: userName,
            score: count
        })
        showScores();

    } else {
        console.log(chalk.red("Please Enter a Valid Name"));
        game();
    }

    function showScores() {
        console.log("");
        console.log("Result");
        console.log("------");
        console.log("Hurrah You Completed the Quiz");
        console.log("Your final score is " + chalk.green(count));
        console.log("------");
        console.log("Checkout the Score Board below!!!!!!!")
        highScores.map(score => console.log(score.name, " : ", chalk.green(score.score)));
    }
}

game();
