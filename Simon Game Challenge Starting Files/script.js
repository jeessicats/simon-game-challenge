let gamePattern = [];

let userClickedPattern = [];

let buttonColors = ["red", "blue", "green", "yellow"];

let randomChosenColour;

$(".btn").click(function() {
    let userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);

    // Playing the sound
    playSound(userChosenColour);
});


function playSound(name) {
    let audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function nextSequence() {
    let randomNumber = Math.floor(Math.random() * 4);
    randomChosenColour = buttonColors[randomNumber];
    gamePattern.push(randomChosenColour);

    // Flashing the button
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    // Playing the sound
    playSound(randomChosenColour);
}