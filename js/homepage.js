// MANY THINGS HAVE BEEN MOVED Please check /pages/settings.html to find everything that has been moved.

const titleElem = document.getElementById("title")

// Initial stuffs
const changelogelem = document.getElementById("changelog");
let changelogopen = false

const drawerelem = document.getElementById("drawerdiv");
let draweropen = false

const textOptions = [
    "If somethings not working check your chrome version!",
    "Fun fact! This site has been taken down 3 Time(s)",
    "Only tested on Chrome v114 & v120",
    "Join the discord server for new site URLs!",
    "Submit game suggestions in the discord server!",
    "Go to chrome://version to check your version!",
    "If the sites not updating clear your cache!",
    "School admins < literally anyone",
    "Javascript is overrated",
    "Updates... sometimes?",
    "Originally called PDFXPLOIT",
    "Discord. Join. Now.",
    "Made by a student for students :)",
    "Securly ver 2.97.55 :(",
    "Now with 61% more games! (v2.18)"
];

top.document.getElementById("randomtext").innerHTML = textOptions[Math.round(Math.random()*textOptions.length)]

function refreshSplashMsg(){
    top.document.getElementById("randomtext").innerHTML = textOptions[Math.round(Math.random()*textOptions.length)]
}

function opendrawer(){
    if (draweropen){
        drawerelem.style.left = "calc(100% + 10vw - 15px)"
        draweropen = false
        document.getElementById("drawericon").src = "/images/icons/arrowright.svg"
        return
    } else{
        drawerelem.style.left = "calc(100% - 10vw - 15px)"
        draweropen = true
        document.getElementById("drawericon").src = "/images/icons/arrowleft.svg"
        return
    }
}

if (localStorage.getItem("extendedName") == 'true'){
    titleElem.innerHTML = "Universal UB"
} else{
    titleElem.innerHTML = "Uni UB"
}
//

function aboutblank(){
    url = window.location
    win = window.open();
    win.document.body.style.margin = '0';
    win.document.body.style.height = '100vh';
    var embed = win.document.createElement('embed');
    embed.style.border = 'none';
    embed.style.width = '100%';
    embed.style.height = '100%';
    embed.style.margin = '0';
    embed.src = url;
    win.document.body.appendChild(embed);
}