
if (window.location.pathname == "/pages/methods" || window.location.pathname == "/pages/methods.html"){
    fetch(filesURL + "/json/methods.json")
        .then(response => response.json())
        .then(json => {
            console.log("Method data loaded.");
            
            console.log("There are " + Object.keys(json).length + " methods.")
            for (let i = 0; i < Object.keys(json).length; i++){
                let keys = Object.keys(json)
                let currentObj = json[keys[i]]
                let games = document.getElementById("gamerow");
                games.innerHTML += ("<div id='game'><a href='" + currentObj.pageURL + "' style='margin: auto; top: 100;'><h2>" + currentObj.name + "</h2></a></div>")
            }
            document.getElementById("tempwarn").remove()
            document.getElementById("games").innerHTML += (`
                <center>
                    <h2 style="margin: 0; padding: 20px;">You've reached the bottom of the methods page! Go <a href="https://forms.gle/Any4aLEQRhNm6zJA7" target="_blank" style="margin: 0; padding: 20px;">[HERE]</a> to request a game!</h2>
                </center>
            `)
        })
        .catch(error => console.error('Error loading game data:', error));
}

// Basically fetches the code to run on the actual pages. :D

if (window.location.pathname == "/pages/method" || window.location.pathname == "/pages/method.html"){
    let s = document.createElement("script");
    s.src = filesURL + "/js/methodmanager.js"
    document.body.append(s)
}

//