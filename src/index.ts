import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>`;

function calcularPotencia(base: number, exponente: number) {
  if (exponente >= 0) {
    return Math.pow(base, exponente);
  } else {
    return console.log("Dato no valido");
  }
}

let base = Number(prompt("Ingrese la base:"));
let exponente = Number(prompt("Ingrese el exponente:"));

console.log(calcularPotencia(base, exponente));
