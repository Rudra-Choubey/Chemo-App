let chemoDescription = document.querySelector('.chemo-description');
let chemoName = document.querySelector('.chemo-name');
let atomicNo = document.querySelector('.atomic-no');
let atomicMass = document.querySelector('.atomic-mass');
let appearance = document.querySelector('.chemo-appearance');
let phase = document.querySelector('.phase');
let symbol = document.querySelector('.chemo-symbol');
let ename = document.querySelector('#e-name');
let elements;
let required_element;
async function embedInfo(name){
    let information = await fetch('https://rawcdn.githack.com/Bowserinator/Periodic-Table-JSON/1871a04b65c5c6774fe8d1c64abe35b0f577c3b5/PeriodicTableJSON.json');
    let jsonResp = await information.json();
    elements = await jsonResp.elements;
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        if (element.name.toLowerCase() === name.toLowerCase()) {
            required_element = element;
            break;
        }
    }
    if (required_element) {
        chemoDescription.innerHTML = required_element.summary;
        chemoName.innerHTML = required_element.name;
        atomicNo.innerHTML = required_element.number;
        atomicMass.innerHTML = required_element.atomic_mass;
        appearance.innerHTML = required_element.appearance || "Unknown or colorless";
        phase.innerHTML = required_element.phase;
        symbol.innerHTML = required_element.symbol;
        console.log(required_element.summary)
    }
}
embedInfo('Hydrogen')
ename.onchange = function(){
    embedInfo(this.value)
};