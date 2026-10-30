document.addEventListener('DOMContentLoaded', () => {
    
    const getCountryBtn = document.querySelector('#get-country-btn');
    const countryContainer = document.querySelector('#country-container');
    const countryInput = document.querySelector('#country-input');

    async function getCountry() {
        const response = await fetch(`https://countries.dev/alpha/${encodeURIComponent(code)}`)
        const data = await response.json();
        console.log(data);
        const flagUrl = data[0].flag;
        console.log(flagUrl);
        countryContainer.innerHTML = `<img src="${flagUrl}" alt="Прапор">`
    }

    getCountryBtn.addEventListener('click', getCountry);
    
});
