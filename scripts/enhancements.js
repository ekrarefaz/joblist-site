function changeTheme(){
    const dark = document.getElementById("dark-mode");
    const light = document.getElementById("light-mode");
    dark.addEventListener('click',()=>{
        document.getElementById("theme-style").href = './styles/dark-mode.css';
        sessionStorage.setItem("theme", './styles/dark-mode.css');
    });
    light.addEventListener('click',()=>{
        document.getElementById("theme-style").href = './styles/styles.css';
        sessionStorage.setItem("theme", './styles/style.css');
    });
}
function setTheme(){
    let theme = sessionStorage.getItem("theme");
    document.getElementById("theme-style").href = theme;
}
function showNotif(){
    const closebtn = document.getElementById("close");
    const popcontainer = document.getElementById("popup-container");
    popcontainer.classList.add('active');
    
    setTimeout(()=>{
    popcontainer.classList.remove('active');
    },5000);
}
function setTimer(){
    const currentDate = new Date();
    const currentTime = currentDate.getMinutes();
    setTimeout(()=>{
        showNotif();
    },80000);
    setTimeout(()=>{
        window.location.href = "./jobs.html";
    },120000);
}
function enhance(){
    const applyBody = document.getElementById("applybody");
    const enhancebody = document.getElementById("enhancebody");
    changeTheme();
    setTheme();
    if(applyBody){
        setTimer();
    }
    if(enhancebody){
        const themebtn = document.getElementById("enhance-click")
        themebtn.addEventListener('click', ()=>{
            document.getElementById("theme-wrapper").style.border = "2px solid var(--blue-bg)";
            console.log("Hello");
        });
    }
}
window.addEventListener('onload', enhance());