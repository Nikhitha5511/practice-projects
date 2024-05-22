function searchCrypto() {
    const searchQuery = document.getElementById('searchInput').value;
    fetch(`https://api.example.com/search?query=${searchQuery}`)
        .then(response => response.json())
        .then(data => {
            displaySearchResults(data);
        })
        .catch(error => {
            console.error('Error fetching search results:', error);
        });
}

function displaySearchResults(results) {
    const searchResultsContainer = document.getElementById('searchResults');
    searchResultsContainer.innerHTML = ''; 

    results.forEach(result => {
        const listItem = document.createElement('li');
        listItem.textContent = result.name; 
        const moreInfoButton = document.createElement('button');
        moreInfoButton.textContent = 'More Info';
        moreInfoButton.onclick = () => showCryptoInfo(result.id); 
        listItem.appendChild(moreInfoButton);
        searchResultsContainer.appendChild(listItem);
    });
}

function populateTopCryptos() {
    fetch('https://api.example.com/topCryptos')
        .then(response => response.json())
        .then(data => {
            displayTopCryptos(data);
        })
        .catch(error => {
            console.error('Error fetching top cryptocurrencies:', error);
        });
}

function displayTopCryptos(topCryptos) {
    const topCryptoList = document.getElementById('topCryptoList');
    topCryptoList.innerHTML = ''; 

    topCryptos.forEach(crypto => {
        const listItem = document.createElement('li');
        listItem.textContent = crypto.name; 
        listItem.onclick = () => showCryptoInfo(crypto.id);
        topCryptoList.appendChild(listItem);
    });
}

function showCryptoInfo(cryptoId) {
    fetch(`https://api.example.com/cryptoInfo?id=${cryptoId}`)
        .then(response => response.json())
        .then(data => {
            localStorage.setItem('cryptoDetails', JSON.stringify(data));
            window.location.href = `moreInfo.html`;
        })
        .catch(error => {
            console.error('Error fetching crypto info:', error);
        });
}