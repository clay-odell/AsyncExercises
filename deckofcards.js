const baseURL = "https://deckofcardsapi.com/api/deck";
const deck = {
  async init() {
    let res = await axios.get(`${baseURL}/new`);
    this.deckID = res.data.deck_id;
    console.log(this.deckID);
  },
  async shuffle() {
    let res = await axios.get(`${baseURL}/${this.deckID}/shuffle`);
    console.log(res.data);
  },
  async drawCard() {
    let res = await axios.get(`${baseURL}/${this.deckID}/draw/?count=1`);
    let card = res.data.cards[0].image;
    cardDiv = document.querySelector("#cards");
    let img = document.createElement("img");
    img.src = card;
    cardDiv.append(img);
    console.log(res.data.cards[0].code);
  },
};
//Draws two cards from a shuffled deck
async function partTwo() {
  await deck.init();
  await deck.shuffle();
  await deck.drawCard();
  await deck.drawCard();
}
partTwo();

