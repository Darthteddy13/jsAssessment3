console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert(`Form has been submitted!`);
}

document.querySelector('img').addEventListener('mouseover', () => {
	alert(`Feel good! You have received a compliment!`)
})


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);