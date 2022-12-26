document.getElementById('search').addEventListener('click', getResult)


async function getResult() {
    const lookFor = document.getElementById('placeholder').value
    const response = await fetch('http://www.omdbapi.com/?apikey=455b65d4', {
        method: 'POST',
        body: {
            i: "tt3896198"
        },
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const data = await response.json()
    console.log(data)
    /* document.getElementById('test').textContent = data.stringify */
}



