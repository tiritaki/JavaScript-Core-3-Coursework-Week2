
const imgContainer = document.getElementById("img-container");

fetch("https://xkcd.now.sh/?comic=latest")
.then(response => {
  return response.json();
})
.then(data => {
  const img = document.createElement('img');
  img.src = data.img;
  imgContainer.innerHTML = '';
  imgContainer.appendChild(img);
})
.catch((error) => console.log(error));
