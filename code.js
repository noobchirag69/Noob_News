const apiKey = 'GmFMdYk8V0s9KK6yKnkYlfXcAcv2xEvV';

defaultNews();

function defaultNews() {
    const url = `https://api.nytimes.com/svc/topstories/v2/world.json?api-key=${apiKey}`;

    fetch(url)
        .then(response => {
            return response.json();
        })
        .then(data => {
            for (i = 1; i < data.results.length; i++) {
                let html = `<div class="card m-3">
                            <div class="row g-0">
                                <div class="col-md-4 d-flex justify-content-center">
                                    <img src="${data.results[i].multimedia[0].url}" class="img-fluid">
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">${data.results[i].title}</h5>
                                        <p class="card-text">${data.results[i].abstract}</p>
                                        <p class="source">Source: The New York Times - ${data.results[i].byline}</p>
                                        <a href="${data.results[i].url}" target="_blank" class="btn btn-dark btn-sm">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>`;
                $('.posts').append(html);
            }
        })
}

function getNews() {
    $('.posts').text("");
    let keyword = $('#keyword').val();
    const search_url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${keyword}&api-key=${apiKey}`;
    if (keyword == '') {
        alert("Please input something!");
        defaultNews();
    } else {
        fetch(search_url)
        .then(response => {
            return response.json();
        })
        .then(data => {
            for (i = 0; i < data.response.docs.length; i++) {
                let html = `<div class="card m-3">
                                <div class="row g-0">
                                    <div class="col-md-4 d-flex justify-content-center">
                                        <img src="https://static01.nyt.com/${data.response.docs[i].multimedia[0].url}" class="img-fluid">
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <h5 class="card-title">${data.response.docs[i].headline.main}</h5>
                                            <p class="card-text">${data.response.docs[i].snippet}</p>
                                            <p class="source">Source: The New York Times - ${data.response.docs[i].byline.original}</p>
                                            <a href="${data.response.docs[i].web_url}" target="_blank" class="btn btn-dark btn-sm">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>`;
                $('.posts').append(html);
            }
        })
    }
}
