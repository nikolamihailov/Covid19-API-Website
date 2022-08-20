var countryName = document.getElementById("countryName");
var totalCases = document.getElementById("totalCases");
var totalDeaths = document.getElementById("totalDeaths");
var totalRecovered = document.getElementById("totalRecovered");
var countryInput = document.getElementById("input");
const btn = document.querySelector(".btn");


btn.addEventListener("click", getName);
let countryUrl;
function getName() {
    countryName.innerHTML = countryInput.value;
    let name = countryInput.value;
    console.log(name);
    countryUrl = 'https://covid-19-tracking.p.rapidapi.com/v1/' + name;
    console.log(countryUrl);

    showData();
    function showData() {

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '783d4795f5msh7b334c2c6ddf04ep1174e1jsn4f5402dd379b',
                'X-RapidAPI-Host': 'covid-19-tracking.p.rapidapi.com'
            }
        };

        function showTotalCases() {
            fetch(countryUrl, options)
                .then(response => response.json())
                .then(response => totalCases.innerHTML = response["Total Cases_text"])
                .catch(err => console.error(err));

        }

        function showTotalDeaths() {
            fetch(countryUrl, options)
                .then(response => response.json())
                .then(response => totalDeaths.innerHTML = response["Total Deaths_text"])
                .catch(err => console.error(err));

        }

        function showTotalRecovered() {
            fetch(countryUrl, options)
                .then(response => response.json())
                .then(response => totalRecovered.innerHTML = response["Total Recovered_text"])
                .catch(err => console.error(err));

        }
        showTotalCases();
        showTotalDeaths();
        showTotalRecovered();
    }



}






