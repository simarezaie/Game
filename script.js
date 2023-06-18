" use strict";
//access the keys!
var colors = document.getElementsByClassName("colors");
const message = document.getElementById("heading");
let sounds = document.querySelectorAll("audio");

//variables
var level = 1;
var pattern = [];
var player_action = [];
var isFaild = false;
var isGameStart = false;

//start the game
window.addEventListener("keypress", random_color, { once: true });

for (var i = 0; i < 4; i++) {
  colors[i].addEventListener("click", function (e) {
    const id = parseInt(e.target.id);
    sounds[id].play();
    player_action.push(id);
    colors[id].classList.add("select");
    setTimeout(() => {
      colors[id].classList.remove("select");
    }, 500);
  });
}

window.setInterval(function () {
  if (level === player_action.length && isFaild === false) {
    next_level();
  }
});

// select rand0m color
function random_color() {
  message.textContent = `Level ${level}`;
  isGameStart = true;
  const random_color = Math.trunc(Math.random() * 4);
  pattern.push(random_color);

  sounds[random_color].play();
  if (random_color === 0) {
    colors[0].classList.add("select");
    setTimeout(() => {
      colors[0].classList.remove("select");
    }, 1000);
  } else if (random_color === 1) {
    colors[1].classList.add("select");
    setTimeout(() => {
      colors[1].classList.remove("select");
    }, 1000);
  } else if (random_color === 2) {
    colors[2].classList.add("select");
    setTimeout(() => {
      colors[2].classList.remove("select");
    }, 1000);
  } else {
    colors[3].classList.add("select");
    setTimeout(() => {
      colors[3].classList.remove("select");
    }, 1000);
  }
}

const compareArrays = (a, b) => {
  console.log("pattern", a);
  console.log("player", b);
  if (a.length != b.length) {
    return false;
  } else {
    let result = false;
    // comparing each element of array
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        return false;
      } else {
        result = true;
      }
    }
    return result;
  }
};

function next_level() {
  var isCorrect = compareArrays(pattern, player_action);
  console.log("iscorrect", isCorrect);
  if (isCorrect) {
    level += 1;
    player_action = [];
    random_color();
  } else {
    isFaild = true;
    message.textContent = "You Faild";
    console.log("you faild", isFaild);
  }
}
