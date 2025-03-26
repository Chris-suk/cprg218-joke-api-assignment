const joke = document.getElementById("joke");


fetch("https://v2.jokeapi.dev/joke/any?safe-mode")
.then(response => response.json())
.then(data => {
    console.log(data);
    joke.textContent = data.joke || data.setup + " ... " + data.delivery;
})

document.getElementById("christmas").addEventListener ('click', function() {
    fetch("https://v2.jokeapi.dev/joke/Christmas?safe-mode") 
.then(response => response.json())
.then(data => {
    console.log(data);
    header.textContent = "A Random Christmas Joke";
    joke.textContent = data.joke || data.setup + " ... " +  data.delivery;
});
});


document.getElementById("spooky").addEventListener ('click', function() {
    fetch("https://v2.jokeapi.dev/joke/spooky?safe-mode") 
.then(response => response.json())
.then(data => {
    console.log(data);
    header.textContent = "A Random Spooky Joke";
    joke.textContent = data.joke || data.setup + " ... " + data.delivery;
});
});

document.getElementById("misc").addEventListener ('click', function() {
    fetch("https://v2.jokeapi.dev/joke/misc?safe-mode") 
.then(response => response.json())
.then(data => {
    console.log(data);
    header.textContent = "A Random Misc Joke";
    joke.textContent = data.joke || data.setup + " ... " +  data.delivery;
});
});


document.getElementById("program").addEventListener ('click', function() {
    fetch("https://v2.jokeapi.dev/joke/programming?safe-mode") 
.then(response => response.json())
.then(data => {
    console.log(data);
    header.textContent = "A Random Programming Joke";
    joke.textContent = data.joke || data.setup + " ... " +  data.delivery;
});
});


document.getElementById("pun").addEventListener ('click', function() {
    fetch("https://v2.jokeapi.dev/joke/pun?safe-mode") 
.then(response => response.json())
.then(data => {
    console.log(data);
    header.textContent = "A Random Pun";
    joke.textContent = data.joke || data.setup + " ... " +  data.delivery;
});
});
