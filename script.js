const button = document.getElementById('btn');
const jokeEl = document.getElementById('joke')

const apiKey = '9TpYX6RUPEshCYBAF05e1A==sX3Hn9tq1sZEC1Le';

const options = {
    method: 'GET',
    headers: {
        'X-Api-Key': apiKey,
    },
};

const apiURL = 'https://api.api-ninjas.com/v1/dadjokes?limit=1'

async function getJoke(){
    try{
    button.disabled = true;
    button.innerText = 'Loading...';
    const response = await fetch(apiURL, options);
    const data = await response.json();
    
    button.disabled = false;
    button.innerText = 'Tell Me A Joke';

    jokeEl.innerText = data[0].joke;

    } catch (error){
        jokeEl.innerText = 'Error, try again later';

        button.disabled = false;
        button.innerText = 'Tell Me A Joke';
        console.log(error);
    }
}

button.addEventListener('click', getJoke)