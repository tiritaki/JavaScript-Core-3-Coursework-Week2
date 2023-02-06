
const button = document.getElementById("random-dog");
const dogContainer = document.getElementById("dog-container");

button.addEventListener('click', getRandomDog)

function getRandomDog() {
fetch("https://dog.ceo/api/breeds/image/random")
.then(response => {
  return response.json();
})
.then(data => {
  const img = document.createElement('img');
  img.src = data.message;
  dogContainer.innerHTML = '';
  dogContainer.appendChild(img);
  
})
.catch((error) => console.log(error));
}