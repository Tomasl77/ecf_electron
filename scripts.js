async function doFetch(endpoint) {
    try {
        const resp = await fetch("https://restcountries.eu/rest/v2/" + endpoint, { method: 'GET' });
        if (resp.ok) {
            return await resp.json();
        } else {
            return `error fetching endpoint: /${endpoint}`;
        }
    } catch (err) {
        console.log(err);
    }
}

let responseNumber = 0;

function display(data, selector) {
    const container = document.querySelector(selector);
    responseNumber = responseNumber +1;
    let stringToDiplsay = "Winning the async race in position "+ responseNumber +"<br>"+ data;
    if (responseNumber === 1 ) {
        stringToDiplsay += "<br> Congratulations !!!" 
    }
    container.innerHTML = stringToDiplsay;
    container.classList.add('be-bold');
}

async function fetchA() {
    const data = await doFetch('alpha/fra');
    console.log("Country name");
    display(data.name, '#component-a');
}

async function fetchB() {
    const data = await doFetch('alpha/fra');
    console.log("Capital name");
    display(data.capital, '#component-b');
}

async function fetchC() {
    const data = await doFetch('alpha/fra');
    console.log("Population");
    display(data.population, '#component-c');
}

async function fetchD() {
    const data = await doFetch('alpha/fra');
    console.log("Numeric Code");
    display(data.numericCode, '#component-d');
}

function fetchAndDisplayData() {
    fetchA();
    fetchB();
    fetchC();
    fetchD();
}