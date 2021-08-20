console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert(`Form Submitted!`);
}


let form = document.querySelector('#contact');
let pic = document.querySelector(`#cat-pic`)

form.addEventListener('submit', handleSubmit);

const catAttack = () => alert(`Are you a cat because meeeYowza!`);

pic.onmouseover = catAttack;