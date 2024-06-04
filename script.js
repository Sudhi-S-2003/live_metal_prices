const API_KEY = 'LBUUSALCWTBL9GUHD6UX528UHD6UX';

function search() {
    let metal = document.getElementById('input').value.toLowerCase();
    fetch(`https://api.metals.dev/v1/metal/spot?api_key=${API_KEY}&metal=${metal}&currency=INR`)
        .then(response => response.json())
        .then(data => displaydata(data))
        .catch(error => console.error('Error fetching data:', error));
}

function displaydata(data) {
    let result = document.getElementsByClassName('details')[0];
    console.log('API Response:', data); 

    if (data) {
        let name = data.metal;
        let rate = data.rate.price;
        let change_rate = data.rate.change;
        let change_percent = data.rate.change_percent;
        let unit = data.unit;

        result.innerHTML = `
        <img src="img/${name}.jfif" alt="${name} metal image"><br>
        <h2>Metal: ${name}</h2>
        Unit: ${unit}<br>
        Rate: ${rate}<br>
        Change Rate: ${change_rate}<br>
        Change Rate Percentage: ${change_percent}%
        `;
    } else {
        console.error('Data structure is not as expected:', data);
        
        result.innerHTML = 'Error: Data not found or incorrect format.';
    }
}
