const baseURL = 'http://numbersapi.com/';
let favNum = 3;

//1.
async function getFact() {
    let data = await $.getJSON(`${baseURL}${favNum}?json`);
    console.log(data.text);
}
getFact();

//2. 
const multiNums = [3, 7, 999]
async function multiNumFacts() {
    let data = await $.getJSON(`${baseURL}${multiNums}?json`)
    console.log(data);
}
multiNumFacts();

//3.
async function favNumFourFacts() {
    let facts = await Promise.all(
        Array.from({length: 4}, () => $.getJSON(`${baseURL}${favNum}?json`))
    );
    facts.forEach(data => {
        $('#facts').append(`<li>${data.text}</li>`)
    });
}
favNumFourFacts();