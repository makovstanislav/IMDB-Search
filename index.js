let resultsContainer = document.getElementById('results-container')

const renderResults = async function getResult() {
    const searchInput = document.getElementById('placeholder').value
    resultsContainer.innerHTML = ''
    const response = await fetch(`http://www.omdbapi.com/?s=${searchInput}&apikey=455b65d4`)
    const data = await response.json()
    console.log(data.Search)
    for (const movie of data.Search) {
        resultsContainer.innerHTML += `
            <h2>${movie.Title}</h2>
            <img src='${movie.Poster}'>
            <hr>
        `
    }
}

document.getElementById('search').addEventListener('click', renderResults)
