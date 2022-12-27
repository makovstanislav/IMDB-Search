let watchlistContainer = document.getElementById('watchlist-container')

function renderWatchlist() {
    let watchlist = JSON.parse(window.localStorage.getItem("Watchlist"))
    console.log(watchlist)
    for (const movie of watchlist) {
        watchlistContainer.innerHTML += `
        <h2>${movie.Title}</h2>
        <img src='${movie.Poster}'>
        <hr>
        `
    }
}

renderWatchlist()