let input = document.getElementById("input");
let container = document.getElementById("container");
function createAppend(country) {
    let {
        flag,
        name,
        population
    } = country;

    let div = document.createElement("div");
    div.classList.add("country-card", "col-11", "col-md-5", "mr-auto", "ml-auto", "d-flex", "flex-row");
    container.appendChild(div);

    let image = document.createElement("img");
    image.classList.add("country-flag", "mt-auto", "mb-auto");
    image.src = flag;
    div.appendChild(image);


    let div2 = document.createElement("div");
    div2.classList.add("etc","d-flex", "flex-column", "ml-4");
    div.appendChild(div2);

    let para = document.createElement("p");
    para.textContent = name;
    para.classList.add("country-name");
    div2.appendChild(para);

    let para2 = document.createElement("p");
    para2.textContent = population;
    para2.classList.add("country-population");
    div2.appendChild(para2);





}


function displayResults(countries) {
    let inputValue=input.value;

    container.textContent="";
    for (let country of countries) {

    let countryName = country.name;
    if (countryName.toLowerCase().includes(inputValue.toLowerCase())) {
                    createAppend(country);

    }

}
}

function findCountry() {
    let options = {
        method: "GET"
    };
    let url = "https://apis.ccbp.in/countries-data";
    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(json) {
            displayResults(json);
        });

}
findCountry();

input.addEventListener("keyup", findCountry);