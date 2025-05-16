let gamePattern = [];

let userClickedPattern = [];

let buttonColors = ["red", "blue", "green", "yellow"];

let randomChosenColour;

let started = false;

let level = 0;

$(".btn").click(function() {
    let userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);

    // Playing the sound
    playSound(userChosenColour);

    // Animating the button
    animatePress(userChosenColour);
});

$(document).keydown(function(event) {
    if (event.key === "a" && !started) {
        nextSequence();
        started = true;
    }
});

function playSound(name) {
    let audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function nextSequence() {
    level++;
    $("#level-title").text("Level " + level);

    let randomNumber = Math.floor(Math.random() * 4);
    randomChosenColour = buttonColors[randomNumber];
    gamePattern.push(randomChosenColour);

    // Flashing the button
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    // Playing the sound
    playSound(randomChosenColour);

    // Incrementing the level
}

function animatePress(currentColour) {
    $("." + currentColour).addClass("pressed");

    setTimeout(function() {
        $("." + currentColour).removeClass("pressed");
    }, 100);
}