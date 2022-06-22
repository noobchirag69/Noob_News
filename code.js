const apiKey = 'GmFMdYk8V0s9KK6yKnkYlfXcAcv2xEvV';
const url = `https://api.nytimes.com/svc/topstories/v2/world.json?api-key=${apiKey}`;

fetch(url)
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
        for (i = 1; i < data.results.length; i++) {
            let html = `<div class="card m-3">
                            <div class="row g-0">
                                <div class="col-md-4 d-flex justify-content-center">
                                    <img src="${data.results[i].multimedia[0].url}" class="img-fluid" alt="Image Missing :/">
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">${data.results[i].title}</h5>
                                        <p class="card-text">${data.results[i].abstract}</p>
                                        <p class="source">Source: The New York Times</p>
                                        <a href="${data.results[i].url}" target="_blank" class="btn btn-dark">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>`;
            $('.posts').append(html);
        }
    })
