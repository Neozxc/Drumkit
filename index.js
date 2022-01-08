const numberOne = document.getElementById("numberOne");
const numberTwo = document.getElementById("numberTwo");
const numberThree = document.getElementById("numberThree");
const numberFour = document.getElementById("numberFour");
const numberFive = document.getElementById("numberFive");
const numberSix = document.getElementById("numberSix");

// Sounds
const sound1 = document.getElementById("sound1");
const sound2 = document.getElementById("sound2");
const sound3 = document.getElementById("sound3");
const sound4 = document.getElementById("sound4");
const sound5 = document.getElementById("sound5");
const sound6 = document.getElementById("sound6");


numberOne.addEventListener("click", () => {
    sound1.volume = 0.1;
    sound1.play();

    numberTwo.addEventListener("click", () => {
        sound2.volume = 0.1;
        sound2.play();
    });
    
    numberThree.addEventListener("click", () => {
        sound3.volume = 0.1;
        sound3.play();
    });

    numberFour.addEventListener("click", () => {
        sound4.volume = 0.1;
        sound4.play();
    });

    numberFive.addEventListener("click", () => {
        sound5.volume = 0.1;
        sound5.play();
    });

    numberSix.addEventListener("click", () => {
        sound6.volume = 0.1;
        sound6.play();
    });
});

addEventListener("keypress", (event) => {
    if (event.key == "d") {
        sound1.volume = 0.1;
        sound1.play();
    } else if (event.key == "a") {
        sound2.volume = 0.1;
        sound2.play();
    } else if (event.key == "v") {
        sound3.volume = 0.1;
        sound3.play();
    } else if (event.key == "j") {
        sound4.volume = 0.1;
        sound4.play();
    } else if (event.key == "l") {
        sound5.volume = 0.1;
        sound5.play();
    } else if (event.key == "s") {
        sound6.volume = 0.1;
        sound6.play();
    }
});