/* HW4 STAR WARS RPG */
/*  declare counters */
var win = 0;
var lose = 0;
var playerSelected = false;
var defenderSelected = false;
var player = 0;
var defender = 0;
var playerHP = 0;
var playerAP = 0;
var defenderHP = 0;
var defenderAP = 0;
var randomAPweight = 0;
var battleOver = false;
var roundNum = 1;
var exDefender1 = 0;
var exDefender2 = 0;
var exDefender3 = 0;
var exDefender4 = 0;
var exDefender5 = 0;
var exDefender6 = 0;
var character1 = {
    hp: 200, /* health power */
    ap: 5 /* attack power */
};
var character2 = {
    hp: 205,
    ap: 6
};
var character3 = {
    hp: 210,
    ap: 7
};
var character4 = {
    hp: 215,
    ap: 8
};
var character5 = {
    hp: 220,
    ap: 9
};
var character6 = {
    hp: 225,
    ap: 10
};
function hardInitialize() {
    /* reset counters */
    win = 0;
    lose = 0;
    playerSelected = false;
    defenderSelected = false;
    player = 0;
    defender = 0;
    playerHP = 0;
    playerAP = 0;
    defenderHP = 0;
    defenderAP = 0
    battleOver = false;
    roundNum = 1;
    /* initialize display */
    document.getElementById("win").innerHTML = win;
    document.getElementById("lose").innerHTML = lose;
    document.getElementById("messageBtn2").innerHTML = "Welcome to the Universe";
    document.getElementById("messageBtn2").style.backgroundColor = "#dd4444";
    document.getElementById("messageBtn2").style.color = "#ffffff";
    document.getElementById("playerBox").style.opacity = "0";
    document.getElementById("defenderBox").style.opacity = "0";
    document.getElementById("img1Box").style.opacity = "0.95";
    document.getElementById("img2Box").style.opacity = "0.95";
    document.getElementById("img3Box").style.opacity = "0.95";
    document.getElementById("img4Box").style.opacity = "0.95";
    document.getElementById("img5Box").style.opacity = "0.95";
    document.getElementById("img6Box").style.opacity = "0.95";
    document.getElementById("character1hp").innerHTML = character1.hp;
    document.getElementById("character2hp").innerHTML = character2.hp;
    document.getElementById("character3hp").innerHTML = character3.hp;
    document.getElementById("character4hp").innerHTML = character4.hp;
    document.getElementById("character5hp").innerHTML = character5.hp;
    document.getElementById("character6hp").innerHTML = character6.hp;
    $("#anotherRound").attr("disabled", true);
}
function disableButtons() {
    /* temporary disable buttons */
    $("#selectPlayer").attr("disabled", true);
    $("#attackID").attr("disabled", true);
}
function softInitialize() {
    $("#anotherRound").attr("disabled", true);
    defenderSelected = false;
    defender = 0;
    defenderHP = 0;
    defenderAP = 0
    battleOver = false;
    /* initialize display */
    document.getElementById("win").innerHTML = win;
    document.getElementById("lose").innerHTML = lose;
    document.getElementById("messageBtn2").innerHTML = "Stand By";
    document.getElementById("messageBtn2").style.backgroundColor = "#dd4444";
    document.getElementById("messageBtn2").style.color = "#ffffff";
    document.getElementById("playerBox").style.opacity = "1";
    document.getElementById("defenderBox").style.opacity = "0";
    document.getElementById("character1hp").innerHTML = character1.hp;
    document.getElementById("character2hp").innerHTML = character2.hp;
    document.getElementById("character3hp").innerHTML = character3.hp;
    document.getElementById("character4hp").innerHTML = character4.hp;
    document.getElementById("character5hp").innerHTML = character5.hp;
    document.getElementById("character6hp").innerHTML = character6.hp;
    $("#attackID").attr("disabled", false); /* enabling attack button */
}
function mainGame() {
    /* select player */
    $("#selectPlayer").on("click", function () {
        if (playerSelected === false) {
            document.getElementById("messageBtn2").innerHTML = "Choose Player";
            $("#selectDefender").attr("disabled", true);
            $("#anotherRound").attr("disabled", true);
        }
        $("#img1Box").on("click", function () {
            if (playerSelected === false && defender !== 1) {
                document.getElementById("messageBtn2").innerHTML = "Player Decided";
                document.getElementById("playerBox").style.opacity = "1";
                document.getElementById("playerImg").src = "assets/images/character1.png"
                document.getElementById("playerHp").innerHTML = character1.hp;
                document.getElementById("img1Box").style.opacity = "0.3";
                playerSelected = true;
                player = 1;
                playerHP = character1.hp;
                playerAP = character1.ap;
                document.getElementById("selectPlayer").style.opacity = "0.3";
                $("#selectDefender").attr("disabled", false);
            }
        });
        $("#img2Box").on("click", function () {
            if (playerSelected === false && defender !== 2) {
                document.getElementById("messageBtn2").innerHTML = "Player Decided";
                document.getElementById("playerBox").style.opacity = "1";
                document.getElementById("playerImg").src = "assets/images/character2.png"
                document.getElementById("playerHp").innerHTML = character2.hp;
                document.getElementById("img2Box").style.opacity = "0.3";
                playerSelected = true;
                player = 2;
                playerHP = character2.hp;
                playerAP = character2.ap;
                document.getElementById("selectPlayer").style.opacity = "0.3";
                $("#selectDefender").attr("disabled", false);
            }
        });
        $("#img3Box").on("click", function () {
            if (playerSelected === false && defender !== 3) {
                document.getElementById("messageBtn2").innerHTML = "Player Decided";
                document.getElementById("playerBox").style.opacity = "1";
                document.getElementById("playerImg").src = "assets/images/character3.png"
                document.getElementById("playerHp").innerHTML = character3.hp;
                document.getElementById("img3Box").style.opacity = "0.3";
                playerSelected = true;
                player = 3;
                playerHP = character3.hp;
                playerAP = character3.ap;
                document.getElementById("selectPlayer").style.opacity = "0.3";
                $("#selectDefender").attr("disabled", false);
            }
        });
        $("#img4Box").on("click", function () {
            if (playerSelected === false && defender !== 4) {
                document.getElementById("messageBtn2").innerHTML = "Player Decided";
                document.getElementById("playerBox").style.opacity = "1";
                document.getElementById("playerImg").src = "assets/images/character4.png"
                document.getElementById("playerHp").innerHTML = character4.hp;
                document.getElementById("img4Box").style.opacity = "0.3";
                playerSelected = true;
                player = 4;
                playerHP = character4.hp;
                playerAP = character4.ap;
                document.getElementById("selectPlayer").style.opacity = "0.3";
                $("#selectDefender").attr("disabled", false);
            }
        });
        $("#img5Box").on("click", function () {
            if (playerSelected === false && defender !== 5) {
                document.getElementById("messageBtn2").innerHTML = "Player Decided";
                document.getElementById("playerBox").style.opacity = "1";
                document.getElementById("playerImg").src = "assets/images/character5.png"
                document.getElementById("playerHp").innerHTML = character5.hp;
                document.getElementById("img5Box").style.opacity = "0.3";
                playerSelected = true;
                player = 5;
                playerHP = character5.hp;
                playerAP = character5.ap;
                document.getElementById("selectPlayer").style.opacity = "0.3";
                $("#selectDefender").attr("disabled", false);
            }
        });
        $("#img6Box").on("click", function () {
            if (playerSelected === false && defender !== 6) {
                document.getElementById("messageBtn2").innerHTML = "Player Decided";
                document.getElementById("playerBox").style.opacity = "1";
                document.getElementById("playerImg").src = "assets/images/character6.png"
                document.getElementById("playerHp").innerHTML = character6.hp;
                document.getElementById("img6Box").style.opacity = "0.3";
                playerSelected = true;
                player = 6;
                playerHP = character6.hp;
                playerAP = character6.ap;
                document.getElementById("selectPlayer").style.opacity = "0.3";
                $("#selectDefender").attr("disabled", false);
            }
        });
    });
    /* select defender */
    $("#selectDefender").on("click", function () {
        if (defenderSelected === false) {
            document.getElementById("messageBtn2").innerHTML = "Choose Defender";
            $("#selectPlayer").attr("disabled", true);
            $("#anotherRound").attr("disabled", true);
        }
        $("#img1Box").on("click", function () {
            if (defenderSelected === false && player !== 1 && exDefender1 !== 1) {
                document.getElementById("messageBtn2").innerHTML = "Defender Decided";
                document.getElementById("defenderBox").style.opacity = "1";
                document.getElementById("defenderImg").src = "assets/images/character1.png"
                document.getElementById("defenderHp").innerHTML = character1.hp;
                document.getElementById("img1Box").style.opacity = "0.3";
                defenderSelected = true;
                defender = 1;
                exDefender1 = 1;
                defenderHP = character1.hp;
                defenderAP = character1.ap;
                document.getElementById("selectDefender").style.opacity = "0.3";
                $("#selectPlayer").attr("disabled", false);
            }
        });
        $("#img2Box").on("click", function () {
            if (defenderSelected === false && player !== 2 && exDefender2 !== 1) {
                document.getElementById("messageBtn2").innerHTML = "Defender Decided";
                document.getElementById("defenderBox").style.opacity = "1";
                document.getElementById("defenderImg").src = "assets/images/character2.png"
                document.getElementById("defenderHp").innerHTML = character2.hp;
                document.getElementById("img2Box").style.opacity = "0.3";
                defenderSelected = true;
                defender = 2;
                exDefender2 = 1;
                defenderHP = character2.hp;
                defenderAP = character2.ap;
                document.getElementById("selectDefender").style.opacity = "0.3";
                $("#selectPlayer").attr("disabled", false);
            }
        });
        $("#img3Box").on("click", function () {
            if (defenderSelected === false && player !== 3 && exDefender3 !== 1) {
                document.getElementById("messageBtn2").innerHTML = "Defender Decided";
                document.getElementById("defenderBox").style.opacity = "1";
                document.getElementById("defenderImg").src = "assets/images/character3.png"
                document.getElementById("defenderHp").innerHTML = character3.hp;
                document.getElementById("img3Box").style.opacity = "0.3";
                defenderSelected = true;
                defender = 3;
                exDefender3 = 1;
                defenderHP = character3.hp;
                defenderAP = character3.ap;
                document.getElementById("selectDefender").style.opacity = "0.3";
                $("#selectPlayer").attr("disabled", false);
            }
        });
        $("#img4Box").on("click", function () {
            if (defenderSelected === false && player !== 4 && exDefender4 !== 1) {
                document.getElementById("messageBtn2").innerHTML = "Defender Decided";
                document.getElementById("defenderBox").style.opacity = "1";
                document.getElementById("defenderImg").src = "assets/images/character4.png"
                document.getElementById("defenderHp").innerHTML = character4.hp;
                document.getElementById("img4Box").style.opacity = "0.3";
                defenderSelected = true;
                defender = 4;
                exDefender4 = 1;
                defenderHP = character4.hp;
                defenderAP = character4.ap;
                document.getElementById("selectDefender").style.opacity = "0.3";
                $("#selectPlayer").attr("disabled", false);
            }
        });
        $("#img5Box").on("click", function () {
            if (defenderSelected === false && player !== 5 && exDefender5 !== 1) {
                document.getElementById("messageBtn2").innerHTML = "Defender Decided";
                document.getElementById("defenderBox").style.opacity = "1";
                document.getElementById("defenderImg").src = "assets/images/character5.png"
                document.getElementById("defenderHp").innerHTML = character5.hp;
                document.getElementById("img5Box").style.opacity = "0.3";
                defenderSelected = true;
                defender = 5;
                exDefender5 = 1;
                defenderHP = character5.hp;
                defenderAP = character5.ap;
                document.getElementById("selectDefender").style.opacity = "0.3";
                $("#selectPlayer").attr("disabled", false);
            }
        });
        $("#img6Box").on("click", function () {
            if (defenderSelected === false && player !== 6 && exDefender6 !== 1) {
                document.getElementById("messageBtn2").innerHTML = "Defender Decided";
                document.getElementById("defenderBox").style.opacity = "1";
                document.getElementById("defenderImg").src = "assets/images/character6.png"
                document.getElementById("defenderHp").innerHTML = character6.hp;
                document.getElementById("img6Box").style.opacity = "0.3";
                defenderSelected = true;
                defender = 6;
                exDefender6 = 1;
                defenderHP = character6.hp;
                defenderAP = character6.ap;
                document.getElementById("selectDefender").style.opacity = "0.3";
                $("#selectPlayer").attr("disabled", false);
            }
        });
    });
    /* battle - click Attack button */
    $("#attackID").on("click", function () {
        if (playerSelected == true && defenderSelected === true) {
            document.getElementById("messageBtn2").innerHTML = "Round " + roundNum;
            if (playerHP > 0 && defenderHP > 0) {
                playerAP += 5;
                defenderHP -= playerAP;
                document.getElementById("messageBtn1").style.opacity = "1";
                document.getElementById("messageBtn1").innerHTML = "Attack Power: " + playerAP;
                document.getElementById("defenderHp").innerHTML = defenderHP;
                randomAPweight = Math.floor(Math.random() * 5); /* random attack power weight for defender */
                playerHP -= (defenderAP + randomAPweight);
                document.getElementById("messageBtn3").style.opacity = "1";
                document.getElementById("messageBtn3").innerHTML = "Counter Attack: " + (defenderAP + randomAPweight);
                document.getElementById("playerHp").innerHTML = playerHP;
            }
            if (playerHP <= 0 || defenderHP <= 0) {
                if (playerHP >= defenderHP) {
                    document.getElementById("win").innerHTML = ++win;  /* player won */
                    roundNum++;
                    document.getElementById("messageBtn1").innerHTML = "Player Won";
                    document.getElementById("messageBtn3").innerHTML = "Defender Lost";
                    disableButtons();
                    $("#anotherRound").attr("disabled", false);
                    document.getElementById("anotherRound").style.opacity = "0.95";
                    if (win === 5) {
                        document.getElementById("gameStatusMessage").innerHTML = "You Saved the Universe";
                        $("#anotherRound").attr("disabled", true);
                        document.getElementById("anotherRound").style.opacity = "0.3";
                    }
                }
                else {
                    document.getElementById("lose").innerHTML = ++lose; /* defender won - Game Over */
                    document.getElementById("messageBtn1").innerHTML = "Player Lost";
                    document.getElementById("messageBtn3").innerHTML = "Defender Won";
                    disableButtons();
                    $("#anotherRound").attr("disabled", true);
                    document.getElementById("gameStatusMessage").innerHTML = "GAME OVER";
                }
            }
        } else {
            document.getElementById("messageBtn2").innerHTML = "Select Player and Defender before start game";
        }
    });
    $("#restartID").on("click", function () {
        location.reload();
    });
    $("#anotherRound").on("click", function () {
        document.getElementById("anotherRound").style.opacity = "0.3";
        document.getElementById("messageBtn1").style.opacity = "0";
        document.getElementById("messageBtn1").innerHTML = "";
        document.getElementById("messageBtn3").style.opacity = "0";
        document.getElementById("messageBtn3").innerHTML = "";
        $("#image1Box").attr("disabled", true);
        $("#image2Box").attr("disabled", true);
        $("#image3Box").attr("disabled", true);
        $("#image4Box").attr("disabled", true);
        $("#image5Box").attr("disabled", true);
        $("#image6Box").attr("disabled", true);
        document.getElementById("selectDefender").style.opacity = "0.95";
        $("#selectDefender").attr("disabled", false);
        $("#selectDefender").on("click", function () {
            document.getElementById("selectDefender").style.opacity = "0.3";
            softInitialize();
            $("#selectDefender").attr("disabled", true);
        });
    });
}

/* main game loop */
$(document).ready(function () {
    hardInitialize();
    mainGame();
});