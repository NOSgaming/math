console.log("Loading Hack Terminal");

// requires
readline = require('readline-sync');
console.log("Connecting to Kahoot");
const Kahoot = require("kahoot.js-updated");
console.log("Downloading required files onto your computer");
var words = require('an-array-of-english-words');
console.log("Scraping Proxies To Use");
const request = require('request');
console.log("Required request");
var random = require('random-name');
console.log("Random Name Generator Firing Up");
var setTitle = require('console-title');
console.log("Console ready for use");
setTitle('Kahoot flooder');
var beep = require('beepbeep');
console.log("Required beepbeep");

// Stuff
function getRandomInt(min, max) {
    console.log("Getting random integer between", min, "and", max);
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getName() {
    console.log("Generating random name...");
    ran = getRandomInt(1, 5);
    if (ran == 5) {
        request('https://apis.kahoot.it/namerator', function (error, response, body) {
            if (error) { 
                console.log("Error in name generation:", error); 
            }
            return JSON.parse(body).name;
        });
    }
    if (ran == 4) {
        return words[getRandomInt(1, words.length)];
    }
    if (ran == 3) {
        return random.first();
    }
    if (ran == 2) {
        return (random.first() + random.middle() + random.last());
    }
    if (ran == 1) {
        return (random.first() + random.last());
    }
}

function shuffle(array) {
    console.log("Shuffling array...");
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

process.setMaxListeners(Number.POSITIVE_INFINITY);

// Ad message
function ads() {
    console.clear();
    console.log("Welcome To");
    console.log("------------------------------------");
    console.log("Kahoot Breaker for anyone");
    console.log("Made by Dean the Bean");
    console.log("Coded Using Python 3.1.2 - ");
    console.log("Updated November 26th");
    console.log("-------------------------------------\n");
    console.log("Also email me if you like it");
    console.log("Random stuff");
    console.log("Insert legal stuff here");
    console.log("Yeet");
    console.log("_______________________________________");
}
ads();

// Start questions for flooding
antibotmode = readline.question('Type start to start> ');
if (antibotmode == "start") {
    console.log("NOTE: I do not take responsibility for anything done with this bot");
}

pin = readline.question('Enter game pin = ');
bots = readline.question('Enter number of bots = ');
if (antibotmode == "start") {
    ranname = true;
    er = "n";
} else {
    ranname = readline.question('Use random generated name? (y/n)> ');
    if (ranname == "y") {
        ranname = true;
    } else {
        ranname = false;
        botname = readline.question('Enter name = ');
        botprefix = "";
    }
    er = readline.question('Use name bypass? (y/n)> ');
}

usercontrolled = readline.question('Control the bots? (y/n)> ');

if (usercontrolled == "y") {
    usercontrolled = true;
    beepis = readline.question('Beep when the bots need controlling? (y/n)> ');
} else {
    usercontrolled = false;
    beepis = "n";
}

// Start the flooding process
console.clear();
console.log("Starting flood process...");
repeattimes = 0;

function sendjoin(name, id) {
    console.log(`Bot ${id} attempting to join with name: ${name}`);
    if (ranname) {
        join(getName(), id);
    } else {
        join(name, id);
    }
}

function spam() {
    console.log("Spam function initiated...");
    if (repeattimes == bots) {
        console.log("All bots have connected to the Kahoot, let's go!");
    } else {
        repeattimes++;
        if (ranname) rt = getRandomInt(90, 200);
        else rt = 15;

        setTimeout(() => {
            spam();
        }, rt);
        setTimeout(() => {
            if (ranname) {
                sendjoin("This will become a random name!", bots - repeattimes - 1);
            } else {
                sendjoin(botname + (bots - repeattimes - 1), (bots - repeattimes - 1));
            }
        }, rt);
    }
}

process.setMaxListeners(Number.POSITIVE_INFINITY);

function join(name, idee) {
    console.log(`Joining game with name: ${name} for bot ${idee}`);
    while (name == undefined) {
        name = getName();
    }
    const client = new Kahoot();
    client.setMaxListeners(Number.POSITIVE_INFINITY);

    if (er == "y") {
        client.join(pin, name.replace(/a/g, 'ᗩ').replace(/b/g, 'ᗷ').replace(/c/g, 'ᑕ').replace(/d/g, 'ᗪ').replace(/e/g, 'E').replace(/f/g, 'ᖴ').replace(/g/g, 'G').replace(/h/g, 'ᕼ').replace(/i/g, 'I').replace(/j/g, 'ᒍ').replace(/k/g, 'K').replace(/l/g, 'ᒪ').replace(/m/g, 'ᗰ').replace(/n/g, 'ᑎ').replace(/o/g, 'O').replace(/p/g, 'ᑭ').replace(/q/g, 'ᑫ').replace(/r/g, 'ᖇ').replace(/s/g, 'ᔕ').replace(/t/g, 'T').replace(/u/g, 'ᑌ').replace(/v/g, 'ᐯ').replace(/w/g, 'ᗯ').replace(/x/g, '᙭').replace(/y/g, 'Y').replace(/z/g, 'ᘔ').replace(/A/g, 'ᗩ').replace(/B/g, 'ᗷ').replace(/C/g, 'ᑕ').replace(/D/g, 'ᗪ').replace(/E/g, 'E').replace(/F/g, 'ᖴ').replace(/G/g, 'G').replace(/H/g, 'ᕼ').replace(/I/g, 'I').replace(/J/g, 'ᒍ').replace(/K/g, 'K').replace(/L/g, 'ᒪ').replace(/M/g, 'ᗰ').replace(/N/g, 'ᑎ').replace(/O/g, 'O').replace(/P/g, 'ᑭ').replace(/Q/g, 'ᑫ').replace(/R/g, 'ᖇ').replace(/S/g, 'ᔕ').replace(/T/g, 'T').replace(/U/g, 'ᑌ').replace(/V/g, 'ᐯ').replace(/W/g, 'ᗯ').replace(/X/g, '᙭').replace(/Y/g, 'Y').replace(/Z/g, 'ᘔ'), [random.first(), random.last()]).catch(err => {
            console.log(`Error joining game: ${err}`);
            if (err.description == "Duplicate name" && ranname) {
                sendjoin(name, idee);
            } else {
                console.log("Client " + idee + " failed to join with the error '" + err.description + "'");
                client.leave();
            }
        });
    } else {
        client.join(pin, name, [random.first(), random.last()]).catch(err => {
            console.log(`Error joining game: ${err}`);
            if (err.description == "Duplicate name" && ranname) {
                sendjoin(name, idee);
            } else {
                console.log("Client " + idee + " failed to join with the error '" + err.description + "'");
                client.leave();
            }
        });
    }

    client.on("Joined", info => {
        console.log(name + " joined the game!");
        if (info.twoFactorAuth) {
            setInterval(() => {
                console.log("Answering 2FA...");
                if (!todo == false) {
                    client.answerTwoFactorAuth(todo);
                }
                shuffle(list);
                client.answerTwoFactorAuth(list);
            }, 1000);
        }
    });

    client.on("TwoFactorCorrect", function () {
        console.log(name + " got 2-factor correct!");
        todo = list;
    });

    client.on("QuestionReady", question => {
        console.log(name + " is answering question...");
        if (question.type == "quiz") {
            let answer = getRandomInt(0, question.quizQuestionAnswers[question.questionIndex] - 1);
            client.answer(answer);
        }
    });

    client.on("Question", question => {
        console.log("Question Type - " + question.type);
    });
}

console.log("Flooding has started.");
