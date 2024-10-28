console.log('Lets get this shit started')

const form = document.getElementById('form')
const adderss = document.getElementById('ip')
const button = document.getElementById('InputBTN')
const diplay = document.getElementById('display')


/*
async function name(params) {
    
}

const key = 'at_qMkipuXcRjSIWco8laFzkGXrAYAtX';

form.addEventListener('submit', async event => {
    event.preventDefault()

    const thething = adderss.value

    if (thething) {
        try {
            const weatherData = await getWeatherData(thething)
            //displayWeatherInfo(weatherData)
        }
        catch (error) {
            console.error(error)
            //displayError(error)
        }

    }
    else {
        displayError('please enter a city')
    }

    console.log(getWeatherData(thething))
})

async function getWeatherData(adderss) {
    const apiUrl = `https://geo.ipify.org/api/v2/country?apiKey=at_qMkipuXcRjSIWco8laFzkGXrAYAtX&ipAddress=${adderss}`

    const response = await fetch(apiUrl)

    if (!response.ok) {
        throw new Error('could not fethc ip address')
    }

    return await response.json()
}

let data;

function get(data) {
    const {
        ip,
        isp,
        location: {country, region, timezone}
    } = data

    console.log(data)
}
*/

async function getIPAddress(IP) {
    const apiUrl = `https://geo.ipify.org/api/v2/country?apiKey=at_qMkipuXcRjSIWco8laFzkGXrAYAtX&ipAddress=${IP}`

    const response = await fetch(apiUrl)

    if (!response.ok) {
        throw new Error('could not fethc weather data')
    }

    return await response.json()
}

function destructure(info) {
    const {
        as: { asn, name, route, domain, type},
        domains,
        ip,
        isp,
        location: { country, region, timezone }
    } = info;

    //as: {asn: 14618, name: 'AMAZON-AES', route: '54.166.0.0/15', domain: '', type: ''}

    console.log(asn);       // 14618
    console.log(name);      // 'AMAZON-AES'
    console.log(route);     // '54.166.0.0/15'
    console.log(domain);    // ''
    console.log(type);      // ''
    console.log(domains);   // ['ec2-54-166-131-153.compute-1.amazonaws.com']
    console.log(ip);        // '54.166.131.153'
    console.log(isp);       // 'Amazon AES'
    console.log(country);   // 'US'
    console.log(region);    // 'Virginia'
    console.log(timezone);
}

form.addEventListener('submit', async event => {
    event.preventDefault()

    let themain = adderss.value;

    if (themain) {
        try {
            const IPAddressData = await getIPAddress(themain)
            console.log(IPAddressData)
            destructure(IPAddressData)
        }
        catch (error) {
            console.error(error)
            //displayError(error)
        }
    }
    else {
        //displayError('please enter a city')
        console.log('error')
    }
})

/*
const url = `https://geo.ipify.org/api/v2/country?apiKey=at_qMkipuXcRjSIWco8laFzkGXrAYAtX&ipAddress=${themain}`

fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));

get(data)
*/


//105.112.17.132