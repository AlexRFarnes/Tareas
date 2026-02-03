console.log("Este programa te dira tu signo zodiacal!");
console.log("---------------------------------------");
const month = parseInt(
  prompt("Ingresa el número de mes de tu nacimiento (ej. Enero ingresa 1): "),
);
const day = parseInt(prompt("Ingresa el número de día de tu nacimiento: "));
let sign = "";

if ((month === 3 && day >= 21) || (month === 4 && day <= 20)) {
  sign = "Aries";
} else if ((month === 4 && day >= 21) || (month === 5 && day <= 20)) {
  sign = "Tauro";
} else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
  sign = "Géminis";
} else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
  sign = "Cáncer";
} else if ((month === 7 && day >= 23) || (month === 8 && day <= 23)) {
  sign = "Leo";
} else if ((month === 8 && day >= 24) || (month === 9 && day <= 22)) {
  sign = "Virgo";
} else if ((month === 9 && day >= 23) || (month === 10 && day <= 23)) {
  sign = "Libra";
} else if ((month === 10 && day >= 24) || (month === 11 && day <= 22)) {
  sign = "Escorpio";
} else if ((month === 11 && day >= 23) || (month === 12 && day <= 21)) {
  sign = "Sagitario";
} else if ((month === 12 && day >= 22) || (month === 1 && day <= 20)) {
  sign = "Capricornio";
} else if ((month === 1 && day >= 21) || (month === 2 && day <= 19)) {
  sign = "Acuario";
} else if ((month === 2 && day >= 20) || (month === 3 && day <= 20)) {
  sign = "Piscis";
} else {
  sign = "Fecha no correcta";
}

alert(`Tu signo zodiacal es: ${sign}`);
