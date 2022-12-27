let resultsContainer = document.getElementById('results-container')


document.addEventListener('click', function(e) {
    if (e.target.dataset.name) {
        let selectedMovieObj = JSON.parse(window.localStorage.getItem("lastSearch")).filter(movie => movie.Title === e.target.dataset.name)
        if (window.localStorage.getItem("Watchlist")) {
            let parsedWatchlist = JSON.parse(window.localStorage.getItem("Watchlist"))
            parsedWatchlist.push(selectedMovieObj[0])
            localStorage.setItem("Watchlist", JSON.stringify(parsedWatchlist))
        } else {
            localStorage.setItem("Watchlist", JSON.stringify(selectedMovieObj))
        }        
    }
})


const renderResults = async function getResult() {
    localStorage.removeItem("lastSearch");
    const searchInput = document.getElementById('placeholder').value
    resultsContainer.innerHTML = ''
    const response = await fetch(`http://www.omdbapi.com/?s=${searchInput}&apikey=455b65d4`)
    const data = await response.json()
    for (const movie of data.Search) {
        resultsContainer.innerHTML += `
            <div">
                <h2>${movie.Title}</h2>
                <img src='${movie.Poster}'>
                <button data-name="${movie.Title}"> Add to watchlist </button>
                <hr>
            </div>
        `
    }
    localStorage.setItem("lastSearch", JSON.stringify(data.Search))
}

document.getElementById('search').addEventListener('click', renderResults)
