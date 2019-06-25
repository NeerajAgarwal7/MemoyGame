$(document).ready(function () {

    var button1;
    var button2;
    var count = 0;
    var turns = 0;
    var tiles = 0;
    num = [0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];

    $("#ini").click(function () {
        $("#gameBox").slideUp(400).slideDown(400);
        var but = $("#ini");
        but.css({
            "background-color": "lime",
            "border": "15px inset silver"
        });
        but.html("GAME STARTED");
        but.prop("disabled", true);

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
    });

    function assignValue(butId) {
        $("#" + butId).prop("disabled", false);
        var property = $("#" + butId);
        ranNum = Math.floor((Math.random() * 16) + 1);
        if (num[ranNum] == 0) {
            assignValue(butId);
        } else {
            property.prop("value", num[ranNum]);
            property.html(num[ranNum]);
            num[ranNum] = 0;
        }
    }

    $(".gameBut").click(function () {

        var property = $(this);

        property.prop("disabled", true);
        property.css({
            "background-color": "red",
            "color": "black",
            "border": "15px inset silver"
        });

        if (count == 0) {
            button1 = property;
            count++;
        } else if (count == 1) {
            button2 = property;
            setTimeout(function () {
                if (button1.prop("value") != button2.prop("value")) {
                    button1.css("background-color", "blue");
                    button1.css("color", "blue");
                    button1.prop("disabled", false);
                    button1.css("border", "15px outset silver");
                    button2.css("background-color", "blue");
                    button2.css("color", "blue");
                    button2.prop("disabled", false);
                    button2.css("border", "15px outset silver");
                    count = 0;
                    turns++;
                    var movesMsg = "MOVES : " + turns;
                    $("#moves").html(movesMsg);
                } else {

                    var color = randomColors();

                    turns++;
                    tiles++;
                    var movesMsg = "MOVES : " + turns;
                    var pairsMsg = "PAIRS FOUND : " + tiles;
                    $("#moves").html(movesMsg);
                    $("#pairs").html(pairsMsg);

                    button1.css("background-color", color);
                    button1.css("color", "black");
                    button1.prop("disabled", true);

                    button2.css("background-color", color);
                    button2.css("color", "black");
                    button2.prop("disabled", true);
                    button1 = null;
                    button2 = null;
                    count = 0;

                    checkWin();
                }
            }, 500);

        }

    });

    function checkWin() {
        if (tiles == 8) {
            if (confirm("Congratulations!! you won with " + turns + " turns" + "\nPlay new Game?")) {
                window.location.replace("file:///D:/HTML/Memory%20game/memory%20game%20JQ.html");
            } else {
                alert("Game over!!");
            }
        }
    }

    function randomColors() {
        return '#' + Math.floor(Math.random() * 16777215).toString(16);
    }

    $("#moves").hover(function () {
        $(this).css("color", "orange");
        $(this).animate({
            fontSize: "82px"
        },200);
    }, function () {
        $(this).css("color", "antiquewhite");
        $(this).animate({
            fontSize: "58px"
        },200);
    });


    $("#pairs").hover(function () {
        $(this).css("color", "orange");
        $(this).animate({
            fontSize: "82px"
        },200);
    }, function () {
        $(this).css("color", "antiquewhite");
        $(this).animate({
            fontSize: "58px"
        },200);
    });


});
