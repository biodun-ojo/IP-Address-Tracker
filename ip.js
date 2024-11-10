console.log('Lets get this shit started')

const form = document.getElementById('form')
const adderss = document.getElementById('ip')
const button = document.getElementById('InputBTN')
const diplay = document.getElementById('display')
const ipDisplay = document.getElementById('ipDisplay')
const locationDisplay = document.getElementById('locationDisplay')
const timeDisplay = document.getElementById('timeDisplay')
const ispDisplay = document.getElementById('ispDisplay')


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
        as: { asn, name, route, domain, type },
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

    ipDisplay.textContent = ip
    locationDisplay.textContent = `${region}, ${country} ${asn}`
    timeDisplay.textContent = `UTC${timezone}`
    ispDisplay.textContent = isp

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

//map code, yeah mehn

function diplayMap() {
    let map = L.map('map').setView([7.3775, 3.9470], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    const marker = L.marker([7.3775, 3.9470]).addTo(map);
    marker.bindPopup("<b>Hello!</b><br>This is a popup.").openPopup();
}

diplayMap()

/*
const url = `https://geo.ipify.org/api/v2/country?apiKey=at_qMkipuXcRjSIWco8laFzkGXrAYAtX&ipAddress=${themain}`

fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));

get(data)
*/

//gotta start leatlet mehn

//105.112.17.132