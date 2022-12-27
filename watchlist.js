let watchlistContainer = document.getElementById('watchlist-container')


document.addEventListener('click', function(e) {
    if (e.target.dataset.name) {
        let selectedMovieObj = JSON.parse(window.localStorage.getItem("Watchlist")).filter(movie => movie.Title === e.target.dataset.name)[0]
        let watchlistArr = JSON.parse(window.localStorage.getItem("Watchlist"))
        console.log(watchlistArr)
        for (let i = 0; i < watchlistArr.length; i++) {
            if (watchlistArr[i].Title === selectedMovieObj.Title) {
                watchlistArr.splice(i, i+1)
            }    
        }
        localStorage.setItem("Watchlist", JSON.stringify(watchlistArr))
        document.location.reload()
    }
})


function renderWatchlist() {
    let watchlist = JSON.parse(window.localStorage.getItem("Watchlist"))
    console.log("render")
    for (const movie of watchlist) {
        watchlistContainer.innerHTML += `
        <h2>${movie.Title}</h2>
        <img src='${movie.Poster}'>
        <button data-name="${movie.Title}">Remove from watchlist</button>
        <hr>
        `
    }
}

renderWatchlist()




