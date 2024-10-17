let num = parseInt(prompt("Enter the number: "));

let sum = 0;

let i = 1;
let series = "";
while (i <= num) {
  sum += i ** 2;
  series += (i ** 2).toString();
  if (i != num) {
    series += "+";
  }
  i++;
}
document.write(`<h1>${series} = ${sum}</h1>`);
