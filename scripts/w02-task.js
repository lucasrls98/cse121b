/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = "Lucas Rolando Leal dos Santos";
const currentYear = 2023;
const profilePicture = "images/mypic.jpg";

/* Step 3 - Element Variables */

const nameElement = document.getElementById("name");

const foodElement = document.getElementById("food");

const yearElement = document.querySelector("#year");

let img_ = document.getElementsByTagName ("img")

let imageElement = img_[0];

/* Step 4 - Adding Content */
imageElement.setAttribute("src", profilePicture);



nameElement.innerHTML = `<strong>${fullName}</strong>`;

yearElement.textContent = currentYear;

imageElement.setAttribute("alt", `Profile image of ${fullName}`)

/* Step 5 - Array */

let favoriteFoods = ["Pizza ", "Brazilian Strogonoff ", "Brazilian Barbecue "]

foodElement.textContent = favoriteFoods.join(", ");

let singleFood = " Pasta ";

favoriteFoods.push(singleFood);

foodElement.innerHTML += `<br>${favoriteFoods}`

favoriteFoods.shift();

foodElement.innerHTML += `<br>${favoriteFoods}`

favoriteFoods.pop();

foodElement.innerHTML += `<br>${favoriteFoods}`







