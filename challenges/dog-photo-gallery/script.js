// async function getRandomDog() {
//     const request = await fetch("https://dog.ceo/api/breeds/image/random");
//     const blob = await request.blob();
//     const objectURL = URL.createObjectURL(blob);
//     console.log(objectURL)
//     return objectURL;
// }

async function getRandomDog() {
fetch('https://dog.ceo/api/breeds/image/random')
  .then((response) => response.json())
  .then((data) => data.message)
  .then((error) =>console.log(error))
}

const button = document.getElementById("random-dog");
const dogContainer = document.getElementById("dog-container");

button.addEventListener('click', async () => {
    const img = document.createElement('img');
    img.src = await getRandomDog();
    dogContainer.innerHTML = '';
    dogContainer.appendChild(img);
})