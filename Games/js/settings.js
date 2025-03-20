const settingselem = document.getElementById("settings");
let settingsopen = false

function settings(){
    if (settingsopen){
        settingselem.style.opacity = 0
        settingselem.style.transform = "translateY(9999px)"
        settingsopen = false
        return
    } else{
        settingselem.style.opacity = 1
        settingselem.style.transform = "translateY(0px)"
        settingsopen = true
    }
}