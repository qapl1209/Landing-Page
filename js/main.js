// DOM Elements
const time = document.getElementById('time'),
    greeting = document.getElementById('greeting'),
    myName = document.getElementById('name'),
    focus = document.getElementById('focus'), 
    amPm = document.getElementById('am_pm');
// Show Time
function showTime() {
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();
    
    // 12hr Form
    hour = hour % 12 || 12;

    //Output Time
    time.textContent = `${addZero(hour)}:${addZero(min)}:${addZero(sec)}`;
    
    setTimeout(showTime, 1000);
}

let showAmPm = false;

// Toggle showAmPm
function toggleAmPm(e) {
    let today = new Date(),
        hour = today.getHours();
    amPm.textContent = hour < 12 ? 'am' : 'pm';

    showAmPm = !showAmPm;
    if(showAmPm) amPm.style.display = 'inline';
    else amPm.style.display = 'none';
}

// Add Zeros
function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// Show Greeting & Background
function showGreetingBg() {
    let today = new Date(),
        hour = today.getHours();
    
    // greeting.textContent = 'no';

    let phrase = '';
    let background = '';
    let textColor = 'Black';
    
    switch(hour){
        case 0:
        case 1:
            phrase = 'Good Night,'
            background = "url('../img/night.jpg')";
            textColor = 'white';
            break;
        case 2:
        case 3:
        case 4:
        case 5:
            phrase = 'Why are you still up,'
            background = "url('../img/up.jpg')";
            textColor = 'black';
            break;
        case 7:
        case 8:
        case 9:
            phrase = 'Good Morning,'
            background = "url('../img/morn.jpg')";
            textColor = 'black';
            break;
        case 10:
            phrase = 'Why are you still sleeping,'
            background = "url('../img/asleep.jpg')";
            textColor = 'black';
            break;
        case 11:
        case 12:
            phrase = 'It\'s Noon,'
            background = "url('../img/noon.jpg')";
            textColor = 'black';
            break;
        case 13:
        case 14:
        case 15: 
        case 16:
        case 17:
            phrase = 'Good Afternoon,'
            background = "url('../img/afternoon.jpg')";
            textColor = 'black';
            break;
        case 18:
        case 19:
        case 20:
        case 21:
        case 22:
        case 23:
            phrase = 'Good Evening,'
            background= "url('../img/evening.jpg')";
            textColor = 'white';
            break;
        default:
            phrase = 'How did we get here'
            background = "url('../img/white.jpg')";
            textColor = 'black';
            break;
    }
    //Set Greeting & BG
    document.body.style.backgroundImage = background;
    greeting.textContent = phrase;
    document.body.style.color = textColor;

    setTimeout(showGreetingBg, 1000);    
}

// Get Name
function getName() {
    if(localStorage.getItem('name') === null){
        myName.textContent = '[Enter Name]';
    }
    else {
        myName.textContent = localStorage.getItem('name');
    }
}

// Set Name
function setName(e) {
    if(e.type === 'keypress') {
        if(e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('name', e.target.innerText);
            myName.blur();
        }
    }
    else {
        localStorage.setItem('name', e.target.innerText);
    }
}

// Get Focus
function getFocus() {
    if(localStorage.getItem('focus') === null) {
        focus.textContent = '[Enter Focus]';
    }
    else {
        focus.textContent = localStorage.getItem('focus');
    }
}

// Set Focus
function setFocus(e) {
    if(e.type === 'keypress') {
        if(e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('focus', e.target.innerText);
            focus.blur();
        }
    }
    else {
        localStorage.setItem('focus', e.target.innerText);
    }
}

myName.addEventListener('keypress', setName);
myName.addEventListener('blur', setName);

focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus)

showTime();
showGreetingBg();
getName();
getFocus();