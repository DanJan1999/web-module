

let color = document.querySelector(`#color`);
let place = document.querySelector(`#place`);
let ritual = document.querySelector(`#ritual`);

const showColor = () => alert(`Daniel's favorite color is Blue!`);
const showPlace = () => alert(`Daniel's favorite place is South Dakota!`);
const showRitual = () => alert(`Daniel's favorite ritual is watching "Friends" with his wife!`)

color.addEventListener(`click`, showColor);
place.addEventListener(`click`, showPlace);
ritual.addEventListener(`click`, showRitual)