const baseurl = "https://" + ("%40".repeat(150)) + "@"
const embed = document.getElementById("gameframe");
var urlToOpen

if (window.location.pathname === "/pages/games.html" || window.location.pathname === "/pages/games"){
    fetch(filesURL + "/json/games.json")
        .then(response => response.json())
        .then(json => {
            console.log("Game data loaded.");
            
            console.log("There are " + Object.keys(json).length + " games.")
            for (let i = 0; i < Object.keys(json).length; i++){
                let keys = Object.keys(json)
                let currentObj = json[keys[i]]
                let games = document.getElementById("gamerow");
                games.innerHTML += ("<a href='" + currentObj.pageURL + "'><div id='game'><img src='" + filesURL + "/images/" + currentObj.imgURL + "' alt='Image failed to load.' loading='lazy'><p>" + currentObj.name + "</p></div></a>")
            }
            document.getElementById("tempwarn").remove()
            document.getElementById("games").innerHTML += (`
                <center>
                    <h2 style="margin: 0; padding: 20px;">You've reached the bottom of the games page! Go <a href="https://forms.gle/Any4aLEQRhNm6zJA7" target="_blank" style="margin: 0; padding: 20px;">[HERE]</a> to request a game!</h2>
                </center>
            `)
        })
        .catch(error => console.error('Error loading game data:', error));
}

async function loadGame(currentgame) {
    fetch(filesURL + "/json/games.json")
        .then(response => response.json())
        .then(json => {
            console.log("Loading Game (This might print multiple times, sorry :p");
            let game = json[currentgame]
            //window.alert(currentgame + game.srcURL + game.pageURL)
            urlToOpen = filesURL + game.srcURL
            try{
                embed.src = urlToOpen;
            }catch(error){
                window.alert("Failed to load game data please contact me with the error below or try again later. ", error);
            }
        })
        .catch(error => console.error('Error loading game data:', error));
}

document.addEventListener('DOMContentLoaded', function () {
    const params = new URLSearchParams(window.location.search);
    const fullscreenButton = document.getElementById("fullscreen");
    let currentgame = params.get('game');

    // No more YandereDev code :(
    // I'll miss you 😢😢😢

    if (currentgame != null){
        loadGame(currentgame)
    }
})

function andpdf(){
    var url = window.prompt("Put your url here (don't add https://www.) just have for ex 'discord.com'")

    if (url === null){
        return
    }

    window.open(baseurl + url);
}

function fixer(){
    let choice = window.prompt("about:blank or standard? (Standard has a higher chance of fixing it) 1/2")
    if (choice == 1){ openURL() }
    if (choice == 2){ window.open(urlToOpen)}
}

//This was revamped to add the gtag by chatgpt because I was in a rush (sowwy :3)

function openURL() {
    var url = urlToOpen;

    // Open a new window
    var win = window.open();
    win.document.body.style.margin = '0';
    win.document.body.style.height = '100vh';

    // Create and append the Global Site Tag (gtag.js) script
    var gtagScript = win.document.createElement('script');
    gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-FG22JV74V5';
    gtagScript.async = true;
    win.document.head.appendChild(gtagScript);

    // Initialize gtag and set up basic tracking
    gtagScript.onload = function() {
        var gtagInitScript = win.document.createElement('script');
        gtagInitScript.innerHTML = `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-FG22JV74V5');
        `;
        win.document.head.appendChild(gtagInitScript);
    };

    // Create and append the iframe
    var embed = win.document.createElement('embed');
    embed.style.border = 'none';
    embed.style.width = '100%';
    embed.style.height = '100%';
    embed.style.margin = '0';
    embed.src = url;
    win.document.body.appendChild(embed);
}

if (window.location.pathname.includes("/pages/emulator")){
    embed.src = filesURL + "/gamefiles/emujs" ;
}
