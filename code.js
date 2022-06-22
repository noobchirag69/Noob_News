function getNews() {

    $('.posts').text("");

    let keyword = $('#keyword').val();

    const apiKey = '364993d049084ce98c88c51585b1464e';
    const url = `https://newsapi.org/v2/everything?q="${keyword}"&from=2022-06-21&sortBy=popularity&language=en&apiKey=${apiKey}`;

    $.get(url, (response) => {
        for (i = 0; i < response.articles.length; i++) {
            let html = `<div class="card m-3">
                            <div class="row g-0">
                                <div class="col-md-4 d-flex justify-content-center">
                                    <img src="${response.articles[i].urlToImage}" class="img-fluid" alt="Image Missing :/">
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h6 class="card-title">${response.articles[i].title}</h6>
                                        <p class="card-text">${response.articles[i].description}</p>
                                        <hr>
                                        <p class="source">Source: ${response.articles[i].source.name}</p class="source">
                                        <a href="${response.articles[i].url}" target="_blank" class="btn btn-sm btn-dark">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>`;

            $('.posts').append(html);
        }
    });
}