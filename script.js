const jokeContainer = document.querySelector('p');
const getJokeButton =  document.querySelector('button')
const url = 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,political,racist,sexist,explicit&type=single&idRange=0-300'


function getJoke() {
    jokeContainer.style.opacity = '0';  
    fetch(url)
    .then(res => res.json())
    .then(data => {
        jokeContainer.textContent =`${data.joke}`;
        jokeContainer.style.transition = 'opacity 1.5s';  // Ensure the transition is applied
        jokeContainer.style.opacity = '1'; 
    })
}
getJoke();

getJokeButton.addEventListener('click', getJoke)


// Learnin to use Fetch API

// fetch('https://fakestoreapi.com/products', {
//     method: 'POST',
//     headers:{
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//         title: 'Purple Watch'
//     })
// }) 
//     .then(res => {
//         return res.json()
//     })
//     .then(data => console.log(data))


//     fetch('https://fakestoreapi.com/products')
//     .then(res => {
//         return res.json()
//     })
//     .then(data => console.log(data))