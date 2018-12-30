var button1;
var button2;
var count = 0;
var turns = 0;
var tiles = 0;
num = [0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];

function iniGame() {
    document.getElementById("ini").style.backgroundColor = "lime";
    document.getElementById("ini").innerHTML = "GAME STARTED";
    document.getElementById("ini").style.border = "15px inset silver";
    document.getElementById("ini").disabled=true;
    assignValue(11);
    assignValue(12);
    assignValue(13);
    assignValue(14);
    assignValue(21);
    assignValue(22);
    assignValue(23);
    assignValue(24);
    assignValue(31);
    assignValue(32);
    assignValue(33);
    assignValue(34);
    assignValue(41);
    assignValue(42);
    assignValue(43);
    assignValue(44);
}

function assignValue(butId) {
    document.getElementById(butId).disabled = false;
    var property = document.getElementById(butId);
    ranNum = Math.floor((Math.random() * 16) + 1);
    if (num[ranNum] == 0) {
        assignValue(butId);
    } else {
        property.value = num[ranNum];
        property.innerHTML = num[ranNum];
        num[ranNum] = 0;
    }
}

function changeClick(butId) {
    var property = document.getElementById(butId);
    property.disabled = true;
    property.style.backgroundColor = "red";
    property.style.color = "black";
    property.style.border = "15px inset silver";

    if (count == 0) {
        button1 = property;
        count++;
    } else if (count == 1) {
        button2 = property;
        setTimeout(function () {
            if (button1.value != button2.value) {
                button1.style.backgroundColor = "blue";
                button1.style.color = "blue";
                button1.disabled = false;
                button1.style.border = "15px outset silver"
                button2.style.backgroundColor = "blue";
                button2.style.color = "blue";
                button2.disabled = false;
                button2.style.border = "15px outset silver"
                count = 0;
                turns++;
                document.getElementById("moves").innerHTML = "MOVES : <span style='color :#FF8800' />" + turns;
            } else {

                var color = randomColors();

                turns++;
                tiles++;
                document.getElementById("moves").innerHTML = "MOVES : <span style='color :#FF8800' />" + turns;
                document.getElementById("pairs").innerHTML = "PAIRS FOUND : <span style='color :#E1FF00' />" + tiles;

                button1.style.backgroundColor = color;
                button1.style.color = "black";
                button1.disabled = true;
                button2.style.backgroundColor = color;
                button2.style.color = "black";
                button1.disabled = true;
                button1 = null;
                button2 = null;
                count = 0;

                checkWin();
            }
        }, 500);
    }
}

function checkWin() {
    if (tiles == 8) {
        if (confirm("Congratulations!! you won with " + turns + " turns" + "\nPlay new Game?")) {
            window.location.replace("file:///D:/HTML/Memory%20game/memory%20game.html");
        } else {
            alert("Game over!!");
        }
    }
}

function randomColors() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}