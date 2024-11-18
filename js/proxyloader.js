
if (window.location.pathname.includes("/pages/unblockers")){
    fetch(filesURL + "/json/proxies.json")
        .then(response => response.json())
        .then(json => {
            console.log("Proxy data loaded.");
            
            console.log("There are " + Object.keys(json).length + " proxies.")
            for (let i = 0; i < Object.keys(json).length; i++){
                let keys = Object.keys(json)
                let currentObj = json[keys[i]]
                let games = document.getElementById("gamerow");
                games.innerHTML += ("<a href='" + currentObj.pageURL + "'><div id='game'><img src='" + filesURL + "/images/" + currentObj.imgURL + "' alt='Image failed to load.' loading='lazy'><p>" + currentObj.name + "</p></div></a>")
            }
            document.getElementById("tempwarn").remove()
            document.getElementById("games").innerHTML += (`
                <center>
                    <h2 style="margin: 0; padding: 20px;">You've reached the bottom of the proxies page! Go <a href="https://forms.gle/Any4aLEQRhNm6zJA7" target="_blank" style="margin: 0; padding: 20px;">[HERE]</a> to request a game!</h2>
                </center>
            `)
        })
        .catch(error => console.error('Error loading game data:', error));
}

// Basically fetches the code to run on the actual pages. :D

if (window.location.pathname.includes("/pages/ub")){
    let s = document.createElement("script");
    s.src = filesURL + "/js/proxymanager.js"
    document.body.append(s)
}

//