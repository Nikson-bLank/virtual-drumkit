var button = document.querySelectorAll(".btn");

for (i = 0; i <= button.length; i++) {
  var allbuttons = document.querySelectorAll(".btn")[i];
  allbuttons.addEventListener("click", function () {
    console.log(this.innerHTML);

    var innerLetter = this.innerHTML;
    makeSound(innerLetter);
  });

  document.addEventListener("keyup", function (event) {
    makeSound(event.key);
  });

}



function makeSound(key) {
  switch (key) {
    case "W":
      case "w":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "A":
      case "a":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "S":
      case "s":
      var kickbass = new Audio("sounds/kick-bass.mp3");
      kickbass.play();
      break;

    case "D":
      case "d":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "J":
      case "j":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "K":
      case "k":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "L":
      case "l":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    default:
      console.log(key);
      break;
  }
}
