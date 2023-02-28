// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

// function getNumber() {
//   return;
// }
function getNumber() {
  return 4;
}
var numb = getNumber();
console.log(numb + 'numb');

fetch('https://api.coingecko.com/api/v3/coins/list?include_platform=true')
  .then((response) => response.json())
  .then((data) => console.log(data));

fetch('https://api.coingecko.com/api/v3/ping')
  .then((response) => response.json())
  .then((data) => console.log(data));
