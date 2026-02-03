let keepPlaying = true;

let generateRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
let computerNumber;
let playerNumber = 0;
let guess;
let response;

while (keepPlaying) {
  computerNumber = generateRandomNumber(1, 9);

  while (playerNumber < 3 || playerNumber > 6) {
    playerNumber = parseInt(
      prompt("Ingresa un número entre 3 y 6  (inclusivo): "),
    );
  }

  while (guess !== "mayor" && guess !== "menor" && guess !== "igual") {
    guess = prompt(
      "Adivina si tu número es 'mayor', 'menor' o 'igual' que el número secreto: ",
    );
  }

  let message = `La computadora eligió ${computerNumber}, tu elegiste ${playerNumber}. Tu elección es ${guess} `;

  if (
    (playerNumber < computerNumber && guess === "menor") ||
    (playerNumber > computerNumber && guess === "mayor") ||
    (playerNumber === computerNumber && guess === "igual")
  ) {
    message += "¡Has adivinado!";
  } else {
    message += "¡Mejor suerte para la próxima!";
  }

  alert(message);

  while (response !== "SI" && response !== "NO") {
    response = prompt("¿Quiéres seguir jugando? (SI/NO) ");
  }

  if (response === "SI") {
    keepPlaying = true;
  } else {
    alert("Saul Alexander Reynoso Farnes 26000127");
    keepPlaying = false;
  }
}
