var goal = 0;
var current = 0;
var wins = 0;
var losses = 0;
var crys1 = 0;
var crys2 = 0;
var crys3 = 0;
var crys4 = 0;
var crystals = $("#crystals");
var crystalsValue = [];
var imagesArray = ["assets/images/crystal-pic.jpg", "assets/images/crystal-pic.jpg", "assets/images/crystal-pic.jpg", "assets/images/crystal-pic.jpg"]

function startGame() {
    goal = Math.floor(Math.random() * 101) + 19;
    $('#goal').text(goal);
    
    current = 0
    crys1 = Math.floor(Math.random() * 12) + 1;
    crys2 = Math.floor(Math.random() * 12) + 1;
    crys3 = Math.floor(Math.random() * 12) + 1;
    crys4 = Math.floor(Math.random() * 12) + 1;

    crystalsValue = [crys1, crys2, crys3, crys4];
    
    $("#wins").text(wins);
    $("#goal").text(goal);
    $("#current-points").text(current);
    $("#losses").text(losses);

    crystals.empty();

    for (var i = 0; i < crystalsValue.length; i++) {
        console.log(crystalsValue[i]);
        var colDiv = $("<div>");
        colDiv.addClass("col-3");
        var imageCrystal = $("<img>");
        imageCrystal.addClass("crystal-image");
        imageCrystal.attr("src", imagesArray[i]);
        imageCrystal.attr("crystalvalue", crystalsValue[i]);
        colDiv.append(imageCrystal);
        crystals.append(colDiv);
    }
}

startGame()

crystals.on("click", ".crystal-image", function () {
    var imageValue = ($(this).attr("crystalvalue"));
    //console.log(imageValue);
    imageValue = parseInt(imageValue);
    current += imageValue;
    $("#current-points").text(current);
    if (current === goal) {
        wins++;
        startGame();
    }
    if (current > goal) {
        losses++;
        startGame();
    }

});

