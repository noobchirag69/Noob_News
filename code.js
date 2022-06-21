const apiKey = '364993d049084ce98c88c51585b1464e';
const url = `https://newsapi.org/v2/everything?q=superman&apiKey=${apiKey}`;

let req = new Request(url);

fetch(req)
    .then(function(response) {
        console.log(response.json());
    });

